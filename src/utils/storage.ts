import AsyncStorage from "@react-native-async-storage/async-storage";

export const guardarTokens = async (token: string) => {
  await AsyncStorage.setItem("access", token);
};

export const obtenerToken = async () => {
  await AsyncStorage.getItem("access");
};
