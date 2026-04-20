import { useEffect, useState } from "react";
import { obtenerMantenimientos } from "../services/mantenimientoService";
import { FlatList, Text, View } from "react-native";

export default function MantenimientoScreen() {
    const [mantenimientos,setMantenimientos] = useState([]);

    const cargarMantenimientos = async () => {
        try {
            const data = await obtenerMantenimientos()

            setMantenimientos(data)
        } catch (error) {
            console.error("Error cargando mantenimientos",error);
        }
    }

    useEffect(() => {
        cargarMantenimientos()
    },[])

    return (
        <View style={{padding:20}}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>
                Mantenimientos del Equipo
            </Text>
            <FlatList data={mantenimientos} keyExtractor={(item:any) => item.idMantenimiento.toString()} renderItem={({item}:any) => (
                <View style={{
                    padding:15,
                    borderBottomWidth:1,
                    borderColor:"#ddd"
                }}
                >
                    <Text>
                      Tipo:  {item.tipo}
                    </Text>
                    <Text>
                        Estado: {item.estado}
                    </Text>
                    <Text>
                        Inicio: {item.fechaInicio}
                    </Text>
                </View>
            )}
            />
            
        </View>
    )
}