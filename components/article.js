import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableOpacity} from 'react-native';
import firebase from 'firebase';


export default function Article() {





  return (
    <View style={styles.container}>
     <Text> wait for a sec</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent :'center',
    backgroundColor: '#fff',
    paddingLeft: 10
  },
  heading:{
    fontSize:25,
    fontWeight:'bold'
  },
  btn:{
    backgroundColor:'#000',
    width:100,
  },
  text:{
    color:'#fff',
    fontSize:15,
    padding:10
  }

  
});
