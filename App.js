import React, {useState} from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Cita from './componentes/Cita';

const App = () => {

  const[citas, setCitas] = useState([
    { id: "1", paciente: "Camila", propietario: "Juanky", sintomas: "Dolor en la pata" },
    { id: "2", paciente: "Perlina", propietario: "Luciana", sintomas: "Dolor de estomago" },
    { id: "3", paciente: "Chabi", propietario: "Daniela", sintomas: "Malestar total" }
  ]);

  return (
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>

        <FlatList
          data = {citas}
          renderItem = { ({item}) => <Cita item={item} /> }
          keyExtractor = { cita => cita.id }
        />
      </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    marginTop: 40,
    textAlign: 'center',
    color: '#fff'
  },
  contenedor: {
    backgroundColor: '#ef4e31',
    flex: 1
  }
})
export default App;
