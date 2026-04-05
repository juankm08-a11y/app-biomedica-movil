import { api } from "../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = async (correo: string, password: string) => {
  try {
    const response = await api.post("/usuarios/login/", {
      correo,
      password,
    });

    const access = response.data.access;
    const refresh = response.data.refresh;

    if (access) {
      await AsyncStorage.setItem("access", access);
    }

    if (refresh) {
      await AsyncStorage.setItem("refresh", refresh);
    }
    return response.data;
  } catch (error) {
    console.error("Error en login: ", error);
    throw error;
  }
};
