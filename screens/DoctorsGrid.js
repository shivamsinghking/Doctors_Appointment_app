import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {StyleSheet, Text, View ,Button,SafeAreaView,FlatList,TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
 class DoctorsGrid extends Component {
   DATA =[
    {
      id: Math.floor(Math.random() * 100),
      title: 'dentist',
    
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Cardiologist',
     
    }


   ]
  

    render() {
      
        return (
          <SafeAreaView >
          <FlatList
           numColumns={2}
            data={this.DATA}
            renderItem={({ item }) => (
            
              <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Doctors',{title: item.title})}
              style={{marginTop:20, backgroundColor:'#fff', marginBottom:10,boxWithShadow: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,  
                elevation: 5
            },marginLeft:20,borderRadius:20/2,borderWidth:0.5,borderColor:'skyblue'}}    >
              <View style={{margin: 20,elevation:6}}>
             
              <Text style={{fontSize:24,textTransform:'capitalize'}}>{item.title}</Text>
            </View>
            </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
          

        </SafeAreaView>
        )
    }
}



export default DoctorsGrid;
