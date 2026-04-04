import { api } from "../api/api";

export const login = async (correo: string, password: string) => {
  const response = await api.post("/usuarios/login/", {
    correo,
    password,
  });

  return response.data;
};
