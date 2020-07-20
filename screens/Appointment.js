import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorsList from './DoctorsList';
import DoctorsGrid from './DoctorsGrid';
import dentist from './dentist';
import cardiologist from './cardiologist'
import Calc from './Calc';
import Slot from './Slot';
import Mybooking from './Mybooking'

 class Appointment extends Component {

  render() {
    const Stack = createStackNavigator();

    return (
   
      <Stack.Navigator>
        <Stack.Screen name="Appointment" component={DoctorsGrid} />
        <Stack.Screen name="ListItem" component={DoctorsList} />
        <Stack.Screen name="Doctors" component={dentist} />
        <Stack.Screen name="Cardiologist" component={cardiologist} />
        <Stack.Screen name="Calendar" component={Calc} />
        <Stack.Screen name="Slot" component={Slot} />
        <Stack.Screen name="MyBooking" component={Mybooking} />
      </Stack.Navigator>
    

    );
}
}



export default Appointment;
