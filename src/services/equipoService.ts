import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../api/api";
export const obtenerEquipos = async () => {
  const token = await AsyncStorage.getItem("access");

  const response = await api.get("/equipos/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const crearEquipos = async () => {
  const token = await AsyncStorage.getItem("access");

  const response = await api.post("/equipos/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
