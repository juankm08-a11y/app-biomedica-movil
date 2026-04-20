import { useEffect, useState } from "react";
import { obtenerMantenimientos } from "../services/mantenimientoService";
import { FlatList, Text, View } from "react-native";

export default function MantenimientoScreen({ route }: any) {
  const { equipoId } = route.params;

  const [mantenimientos, setMantenimientos] = useState([]);

  const cargarMantenimientos = async () => {
    const data = await obtenerMantenimientos();

    const filtrados = data.filter((m: any) => m.equipo === equipoId);

    setMantenimientos(filtrados);
  };

  useEffect(() => {
    cargarMantenimientos();
  }, []);
  return (
    <View>
      <Text>Mantenimiento del Equipo</Text>
      <FlatList
        data={mantenimientos}
        keyExtractor={(item: any) => item.idMantenimiento.toString()}
        renderItem={({ item }: any) => (
          <View>
            <Text>Tipo: {item.tipo}</Text>
            <Text>Estado: {item.estado}</Text>
            <Text>Inicio: {item.fechaInicio}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
