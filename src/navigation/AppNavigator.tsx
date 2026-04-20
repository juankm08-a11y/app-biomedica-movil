import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import EquiposListScreen from "../screens/EquipoListScreen";
import EquipoDetalleScreen from "../screens/EquipoDetalleScreen";
import EquipoRegistroScreen from "../screens/EquipoRegistroScreen";
import MantenimientoScreen from "../screens/MantenimientosScreen";
import MantenimientoDetalleScreen from "../screens/MantenimientoDetalleScreen";
import MantenimientoRegistroScreen from "../screens/MantenimientoRegistroScreen";

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
      <Stack.Screen
        name="Mantenimientos"
        component={MantenimientoScreen}
        options={{ title: "Ver Mantenimiento" }}
      />
      <Stack.Screen 
        name="MantenimientoDetalle" 
        component={MantenimientoDetalleScreen} 
        options={{title:"Detalle del Mantenimiento"}}
       />
        <Stack.Screen
          name="MantenimientoRegistro"
          component={MantenimientoRegistroScreen}
          options={{title:"Registrar Mantenimiento"}}
        />
    </Stack.Navigator>
  );
}
