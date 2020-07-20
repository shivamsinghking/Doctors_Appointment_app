import 'react-native-gesture-handler';
import React, {useState,Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView,Dimension,Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import Profile from './screens/profile';
import Appointment from './screens/Appointment'
import DoctorsGrid from './screens/DoctorsGrid';
import DoctorsList from './screens/DoctorsList';
import Logout from './components/Logout';
import firebase from 'firebase';
import Login from './components/login';
import Article from './components/article'
import Map from './components/Map'




class MyApp extends  Component{

  render() {
    const Drawer = createDrawerNavigator();
    const Stack = createStackNavigator();
    return (
  
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Appointment" component={Appointment} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Map" component={Map} />
      </Drawer.Navigator>
    </NavigationContainer>
   
    );
  }
  }






   class App extends  Component{

    state ={
      loggedIn: null
    }
  
  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyA893DH129tIH_Qf4avhcRbMhB6TTH9KWQ",
      authDomain: "react-native-login-15a90.firebaseapp.com",
      databaseURL: "https://react-native-login-15a90.firebaseio.com",
      projectId: "react-native-login-15a90",
      storageBucket: "react-native-login-15a90.appspot.com",
      messagingSenderId: "945704146097",
      appId: "1:945704146097:web:85d0b575bd548cc774fe90",
      measurementId: "G-SPTQ5FTBCR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
  
  firebase.auth()
  .onAuthStateChanged(user => {
  if(user){
    this.setState({
      loggedIn : true
    })
  }else {
    this.setState({
      loggedIn : false
    })
  }
  
  })
  }
  


renderContent = () => {
  switch(this.state.loggedIn)
  {
    case true: return  <MyApp />

    case false : return  <Login />
        
     default : return   <Article />
  }
}



render() {
  return (  this.renderContent() );
}

}

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "center",
    backgroundColor: '#fff',
    alignItems : 'center'
  }
  
});

