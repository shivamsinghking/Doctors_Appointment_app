import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import Logo from './logo';
import Email from './emailAndPassword'


export default function Login() {





  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#fff',margin:20,marginLeft:100,marginTop:40}}>
     
      <Logo />
      </View>
   
     <View style={{backgroundColor:'#fff',margin:20, height:300,width:300}}>
      <Email />
     </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex :1,
    backgroundColor: '#fff',
   
  
  },
 
 
  
});
