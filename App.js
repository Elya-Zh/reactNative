import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet,  View, Text } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';


export default function App() {
 
  const [listOfItems, setListOfItems] = useState([
    {text:'read a book', key:'1'},
    {text:'Learn React Native', key:'2'},
    {text:'Learn C++', key:'3'},
    {text:'find a job', key:'4'},

  ])

  const addHandler = (text) =>{
  setListOfItems((list) => {
    return [
      {text:text,key:Math.random().toString(36).substring(7)},
      ...list,
    ]
  })
  }

  return (
    
     <View>
    <Header/>
    <Form addHandler={addHandler}/>
    <View>
     <FlatList data={listOfItems} renderItem={({item})=> (
       <List el={item}/>
     )}/>
    </View>
     </View>
    
  );
}


const styles = StyleSheet.create({
  
});
