import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { obtenerEquipos } from "../services/equipoService";
import { FlatList } from "react-native-gesture-handler";

export default function EquiposListScreen({ navigation }: any) {
  const [equipos, setEquipos] = useState([]);

  const cargarEquipos = async () => {
    try {
      const data = await obtenerEquipos();
      setEquipos(data.data);
    } catch (error) {
      console.error("Error cargando equipos:", error);
    }
  };

  useEffect(() => {
    cargarEquipos();
  }, []);

  const renderEquipo = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          console.log("Equipo enviado:", item);
          navigation.navigate("EquiposDetalle", { equipo: item });
        }}
      >
        <Text style={styles.nombre}>{item.nombre}</Text>
        <Text>
          Marca:
          {item.marca}
        </Text>
        <Text>Modelo: {item.modelo}</Text>
        <Text>
          Serie:
          {item.serie}
        </Text>
        <Text>{item.fabricante}</Text>
        <Text>{item.tipoTecnologia}</Text>
        <Text>{item.ubicacion}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equipos Biomédicos</Text>
      <FlatList
        data={equipos}
        keyExtractor={(item: any) => item.idEquipo.toString()}
        renderItem={renderEquipo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
