import AsyncStorage from "@react-native-async-storage/async-storage";

export const guardarTokens = async (token: string) => {
  return await AsyncStorage.setItem("access", token);
};

export const obtenerToken = async () => {
  return await AsyncStorage.getItem("access");
};
