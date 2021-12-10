import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet,
         View,
         Text,
         ScrollView,
         FlatList,
         } from 'react-native';
import { color } from 'react-native-reanimated';


import AppItem from './AppItem';
import Database from './Database';
 
export default function AppList({ route, navigation }) {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
      Database.getItems().then(items => setItems(items));
  }, [route]); 

  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.title}>Lista de Compras !</Text>
        
        <ScrollView
            persistentScrollbar={true}
            style={styles.scrollContainer}
            contentContainerStyle={styles.itemsContainer}> 

            { items.map(item => {
              return <AppItem key={item.id} id={item.id} item={item.quantidade + '  de ' + item.descricao} navigation={navigation} />
            }) }

        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D32EA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#00EAF9',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
  },

  scrollContainer: {
    flex: 1,
    width: '90%',
  },

  itemsContainer: {
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#00EAF9',
  },

});
