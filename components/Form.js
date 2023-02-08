import { useState } from 'react';
import { StyleSheet,  View, Text, TextInput, Button, } from 'react-native';

export default function Form({addHandler}) {
 
    const [text,setValue] = useState('')
    
    const onChange = (text) => {setValue(text)}
    
    

  return (
    
     <View >
    <TextInput style={styles.input} onChangeText={onChange} placeholder='Add task..'/>
    <Button title='Add' color='pink' onPress={()=>addHandler(text)}/>
     </View>
    
  );
}


const styles = StyleSheet.create({
  input: {
      borderBottomWidth:1,
      borderColor:'#000',
      padding:10,
      marginVertical:30,
      marginHorizontal:'20%',
      width:'60%'
  }
});
