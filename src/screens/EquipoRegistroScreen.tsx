import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
export default function EquipoRegistroScreen({ route }: any) {
  const equipo = route?.params?.equipo;

  const [nombre, setNombre] = useState(equipo?.nombre || "");
  const [marca, setMarca] = useState(equipo?.marca || "");
  const [modelo, setModelo] = useState(equipo?.modelo || "");
  const [tipoTecnologia, setTipoTecnologia] = useState(equipo?.modelo || "");
  const [serie, setSerie] = useState(equipo?.serie || "");
  const [ubicacion, setUbicacion] = useState(equipo?.ubicacion || "");

  const guardarEquipo = () => {
    console.log("Guardar equipo");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Registrar / Editar Equipo</Text>
      <TextInput
        placeholder="nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      <TextInput
        placeholder="Marca"
        value={marca}
        onChangeText={setMarca}
        style={styles.input}
      />
      <TextInput
        placeholder="Modelo"
        value={modelo}
        onChangeText={setModelo}
        style={styles.input}
      />
      <TextInput
        placeholder="tipoTecnologia"
        value={tipoTecnologia}
        onChangeText={setTipoTecnologia}
        style={styles.input}
      />
      <TextInput
        placeholder="serie"
        value={serie}
        onChangeText={setSerie}
        style={styles.input}
      />
      <TextInput
        placeholder="ubicacion"
        value={ubicacion}
        onChangeText={setUbicacion}
        style={styles.input}
      />

      <Button title="Guardar" onPress={guardarEquipo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
