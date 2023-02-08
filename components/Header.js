import { StyleSheet,  View, Text } from 'react-native';

export default function Header() {
 
  return (
    
     <View style={styles.main}>
    <Text style={styles.text}>Todo List</Text>
     </View>
    
  );
}


const styles = StyleSheet.create({
  main:{
      paddingTop:70,
      height:100,
      backgroundColor:'silver',
  },
  text: {
      fontSize:28,
      color:'pink',
      fontStyle:'italic',
      textAlign:'center'
  }
});
