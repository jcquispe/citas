import React from 'react';
import { Text, StyleSheet, View, Button, TouchableHighlight } from 'react-native';

const Cita = ({item}) => {

    const dialogoEliminar = () => {
        console.log("Eliminando...");
    }

    return ( 
        <View style={styles.cita}>
            <View>
                <Text style = {styles.label}>Paciente:</Text>
                <Text style = {styles.texto}>{item.paciente}</Text>  
            </View>
            <View>
                <Text style = {styles.label}>Propietario:</Text>
                <Text style = {styles.texto}>{item.propietario}</Text>  
            </View>
            <View>
                <Text style = {styles.label}>Sintomas:</Text>
                <Text style = {styles.texto}>{item.sintomas}</Text>  
            </View>

            <View>
                <TouchableHighlight onPress = { () => dialogoEliminar() } style = {styles.btnEliminar}>
                    <Text style = {styles.textoEliminar}> Eliminar &times; </Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10
    },
    texto: {
        fontSize: 14
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginTop: 10
    },
    textoEliminar: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
 
export default Cita;
