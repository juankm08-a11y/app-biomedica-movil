import { useState } from "react";
import { crearMantenimiento } from "../services/mantenimientoService";
import { Button, TextInput, View } from "react-native";

export default function MantenimientoRegistroScreen({route,navigation}:any) {
    const {equipoId} = route.params;

    const [tipo,setTipo] = useState("");

    const [observacion,setObservacion] = useState("");

    const registrar = async () => {
        await crearMantenimiento({
            equipoId,
            tipo,
            observacion
        })

        navigation.goBack();
    }

    return (
        <View style={{padding:20}}>
            <TextInput
            placeholder="Tipo mantenimiento"
            value={tipo}
            onChangeText={setTipo}
            />
            <TextInput
            placeholder="Observación"
            value={tipo}
            onChangeText={setObservacion}
            />
            <Button title="Registrar mantenimiento" onPress={registrar} />
        </View>
    )
}