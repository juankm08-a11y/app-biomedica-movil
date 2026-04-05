import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import EquiposListScreen from "../screens/EquipoListScreen";
import EquipoDetalleScreen from "../screens/EquipoDetalleScreen";
import EquipoRegistroScreen from "../screens/EquipoRegistroScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen
        name="Equipos"
        component={EquiposListScreen}
        options={{
          title: "Lista de Equipos",
        }}
      />
      <Stack.Screen
        name="EquiposDetalle"
        component={EquipoDetalleScreen}
        options={{ title: "Detalle del Equipo" }}
      />
      <Stack.Screen
        name="EquiposRegistro"
        component={EquipoRegistroScreen}
        options={{ title: "Registrar equipo" }}
      />
    </Stack.Navigator>
  );
}
