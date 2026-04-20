import { api } from "../api/api";

export const obtenerMantenimientos = async () => {
  const response = await api.get("/mantenimientos/");
  return response.data;
};

export const crearMantenimiento = async (data: any) => {
  const response = await api.post("/mantenimientos/");
  return response.data;
};
