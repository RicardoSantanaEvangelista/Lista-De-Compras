import React, {useState, useEffect} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
         Text,
         View,
         TextInput,
         TouchableOpacity
         } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';


import Database from './Database';
  
export default function AppForm({ route, navigation }) {
  const id = route.params ? route.params.id : undefined;
  const [descricao, setDescricao] = useState(''); 
  const [quantidade, setQuantidade] = useState('');

  useEffect(() => {
    if(!route.params) return;
    setDescricao(route.params.descricao);
    setQuantidade(route.params.quantidade.toString());
  }, [route])

  function handleDescriptionChange(descricao){ setDescricao(descricao); } 
  function handleQuantityChange(quantidade){ setQuantidade(quantidade); }
  async function handleButtonPress(){ 
    const listItem = {descricao, quantidade: parseInt(quantidade)};
    Database.saveItem(listItem, id)
      .then(response => navigation.navigate("AppList", listItem));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item para comprar !</Text>
      <View style={styles.inputContainer}> 
        <TextInput 
          style={styles.input} 
          onChangeText={handleDescriptionChange} 
          placeholder="O que está faltando em casa?"
          clearButtonMode="always"
          value={descricao} /> 
        <TextInput 
          style={styles.input} 
          onChangeText={handleQuantityChange} 
          placeholder="Digite a quantidade !" 
          keyboardType={'numeric'}
          clearButtonMode="always"
          value={quantidade.toString()} /> 
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}> 
            <View style={styles.buttonContainer}>
              <Icon name="save" size={22} color="white" />
              <Text style={styles.buttonText}>Salvar</Text> 
            </View>
          </TouchableOpacity> 
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D32EA',
    alignItems: 'center',
  },

  title: {
    color: '#00EAF9',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
  },

  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#00EAF9',
    borderRadius: 15,
  },

  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch',
  },

  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#1D32EA',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#1D32EA',
  },

  buttonContainer: {
    flexDirection: "row",
  },

  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },

});
