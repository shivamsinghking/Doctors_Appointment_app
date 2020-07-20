import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';



export default function Logo() {


  return (
    <View >
      <View >
      <Image source = {require('../assets/doctor.png')}
   style = {{ width: 150, height: 150 }}
   />
      </View>
  </View>
  );
}

