import { Text, View } from "react-native";

export default function MantenimientoDetalleScreen({route}:any) {
    const {mantenimiento} = route.params;
    return (
        <View style={{padding:20}}>
            <Text style={{fontSize:22,fontWeight:"bold"}}>
                Mantenimientos del Equipo
            </Text>
            
            <Text>
                Tipo: {mantenimiento.tipo}
            </Text>
            <Text>
                Estado: {mantenimiento.estado}
            </Text>
            <Text>
                Fecha inicio: {mantenimiento.fechaInicio}
            </Text>
            <Text>
                Fecha fin: {mantenimiento.fechaFin}
            </Text>
        </View>
    )
}