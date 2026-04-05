import { Button, StyleSheet, Text, View } from "react-native";

export default function EquipoDetalleScreen({ route, navigation }: any) {
  const equipo = route?.params?.equipo ?? null;

  console.log("PARAMS:", route?.params);
  if (!equipo) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Cargando equipo...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{equipo.nombre}</Text>

      <Text style={styles.label}>Marca:</Text>
      <Text>{equipo.marca}</Text>

      <Text style={styles.label}>Modelo:</Text>
      <Text>{equipo.modelo}</Text>

      <Text style={styles.label}>Fabricante:</Text>
      <Text>{equipo.fabricante}</Text>

      <Text style={styles.label}>Serie:</Text>
      <Text>{equipo.serie}</Text>

      <Text style={styles.label}>Ubicacion:</Text>
      <Text>{equipo.ubicacion}</Text>

      <Text style={styles.label}>Tecnologia:</Text>
      <Text>{equipo.tipoTecnologia}</Text>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Editar equipo"
          onPress={() => navigation.navigate("EquiposRegistro", { equipo })}
        ></Button>
      </View>
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
  label: {
    fontWeight: "bold",
    marginTop: 20,
  },
});
