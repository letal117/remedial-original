import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet,Alert, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import appfirebase from '../credenciales';

const db = getFirestore(appfirebase)
export default function Formulario(props){
  const initialState = {
    nombre:'',
    apellido:''
   

  }
 
 const [state, setState] = useState(initialState)

 const hanleChangeText =(value, name)=>{
  setState({...state, [name]:value})

 } 

 const savenombre = async()=>{
   try{
    await addDoc(collection(db, 'nombre'),{
      ...state
 
    })
    Alert.alert('alerta','guardado')
    props.navigation.navigate('LogginScreen')
  }
  catch{
    console.error(error)
  }
  
 }


  return (
    
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input} placeholder='nombre' onChangeText={(value)=>hanleChangeText(value, 'nombre')}value={state.nombre}/>
        <TextInput style={styles.input} placeholder='apellido' onChangeText={(value)=>hanleChangeText(value, 'apellido')}value={state.apellido}/>
       
        
        <View>
          <Button title='guardar' onPress={savenombre}/>
        </View>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  itemText: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#CC0033',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#050608',
    fontWeight: 'bold',
  },
});

