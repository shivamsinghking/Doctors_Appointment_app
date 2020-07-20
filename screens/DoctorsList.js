import React, { Component } from 'react'
import { Text, View,SafeAreaView,ScrollView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calc from './Calc'
import {Button} from 'native-base';

 class DoctorsList extends Component {

       render() {
     
        return (
         <SafeAreaView>
        <ScrollView>
          <View>
              <View style={{justifyContent:'center',alignItems:'center',margin:20}}>
                  <Image source={require('../assets/d1.jpg')}
                  style={{height:150,width:150,borderRadius:50/2,borderWidth:8,borderColor:'skyblue',shadowOffset:{width:4,height:2},shadowColor:'red'}}
                  />
              </View>
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:24,textTransform:'capitalize',fontWeight:'700'}}> Dr : {this.props.route.params?.name??'default value'}</Text>
            <Text style={{fontSize:18,textTransform:'capitalize',fontWeight:'400'}}>LOCATION: {this.props.route.params?.location??'default value'}</Text>
            <Text style={{fontSize:16,textTransform:'capitalize',fontWeight:'500'}}>EXPERIENCE: {this.props.route.params?.experience??'default value'} years</Text>
            <Text style={{fontSize:15,textTransform:'capitalize',fontWeight:'700',textDecorationColor:'blue'}}>Consulting Fee: 200/-</Text>
         
              </View>
         
           <Button  full
                              rounded
                              primary
                              style={{marginTop: 10,marginLeft:20,marginRight:20}}
                               onPress = {() => this.props.navigation.navigate('Calendar',{
                                   Doctorname: this.props.route.params?.name??'default value',
                                   uid: this.props.route.params?.uid??'default value'
                               })}
                               style={{margin:30,elevation:5}}
                              
                   >
                       
                      <Text style={{color:"#fff"}}>Book Appointment</Text> 
                  </Button>
                  <Button  full
                              rounded
                              success
                              style={{marginTop: 10,marginLeft:20,marginRight:20}}
                              
                               style={{margin:30,marginTop:6,elevation:5}}
                              
                   >
                       
                      <Text style={{color:"#fff"}}>Get Clinic Location</Text> 
                  </Button>
                  <View style={{backgroundColor:'#fff',margin:12,marginBottom:40}}>
                      <Text> About Doctor : </Text>
                      <Text style={{margin:10}}> "Doctors as clinical scientists apply the principles and procedures of medicine to prevent, diagnose, care for and treat patients with illness, disease and injury and to maintain physical and mental health. </Text>
                  </View>
         </View>
         </ScrollView>
         </SafeAreaView>
         
         
        )
    }
}

export default DoctorsList;
