import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Text, View } from "react-native";
export default function DashboardScreen({ navigation }: any) {
  const handleLogout = async () => {
    await AsyncStorage.clear();

    navigation.navigate("Login");
  };

  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        title="Ver equipos"
        onPress={() => navigation.navigate("Equipos")}
      />
      <Button
        title="Registrar equipo"
        onPress={() => navigation.navigate("EquiposRegistro")}
      />

      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
}
