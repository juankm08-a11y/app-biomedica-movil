import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

console.log("API URL:", process.env.EXPO_PUBLIC_API_URL);
export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = AsyncStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = AsyncStorage.getItem("refresh");

      if (!refreshToken) {
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        const response = await axios.post(`${BASE_URL}/usuarios/login`, {
          refresh: refreshToken,
        });

        const newAccessToken = response.data.token;

        await AsyncStorage.setItem("access", newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (err) {
        await AsyncStorage.clear();
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);
