import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Alert,
  ScrollView
} from 'react-native';
import * as firebase from 'firebase'
import Animbutton from '../components/Animbutton'


 class Slot extends Component {
  
    
     state ={
       bookingDate: this.props.route.params?.bookingDate??'default value',
        slots : {
        "slot1": "9:00am to 9:30am",  
     },
     uid:  this.props.route.params?.uid?? 'default value'
    }
     

  
  _onPressBack(){
    const {goBack} = this.props.navigation
    goBack()
  }
  _bookSlot(status,key,value){
    const month = this.state.bookingDate.month
    const date = this.state.bookingDate.day
    const user = firebase.auth().currentUser
    const uid = user.uid
    let userDataJson = {}
    if(status)
    userDataJson[key] = uid
    else
    userDataJson[key] = null

 //fire base data

    this.props.navigation.navigate('MyBooking', { Doctorname: this.props.route.params?.Doctorname??'default value'})
      const deleteSlot = Object.keys(this.state.slots)
    
      for(var i=0; i<= deleteSlot.length;i++){
          if(deleteSlot[i] === key){
          delete this.state.slots[key]
         
           const result = this.state.slots
           const deleteSlot = this.state.slots[key]
          this.setState({
            slots : result
          })
          const UID = this.state.uid
         console.log(key)
         console.log(userDataJson)
         firebase.database().ref('dentist/' + UID ).child('appointments').child(month).child(date).child(key).remove()
          
           break;
          }
      }
    
    
  }

componentDidMount(){
  const UID = this.state.uid
  const month = this.state.bookingDate.month
  const date = this.state.bookingDate.day
  console.log(month)
  console.log(date)
   console.log(firebase.database().ref('dentist/' + UID ).child('appointments').child(month).child(date) ==null)
   firebase.database().ref('dentist/' + UID ).child('appointments').child(month).child(date).on("value", snap => {
       
    const firebaseUser = snap.val()
     if(firebaseUser !== null){
      firebase.database().ref('dentist/' + UID ).child('appointments').child(month).child(date).on("value", snap => {
       
        const firebaseUser = snap.val()
        this.setState({
          slots : firebaseUser
        })
      })

     }else{
       Alert.alert("booking not available")
       this.props.navigation.navigate('Calendar')
     }
   })
 
}


  render() {
    let _this = this
    const slots = this.state.slots
    const slotsarr = Object.keys(slots).map( function(k) {
      return (  <View key={k} style={{margin:5}}>
                  <Animbutton countCheck={0} onColor={"green"} effect={"pulse"} _onPress={(status) => _this._bookSlot(status,k,slots[k]) } text={slots[k]} />
                </View>)
    });
    return (
      <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View >
    <TouchableOpacity onPress={() => this._onPressBack() }><Text >Doctorname : {this.props.route.params?.Doctorname??'default value'}</Text></TouchableOpacity>
                    <Text></Text>
                    <Text></Text>
      </View>
      { slotsarr }
      </ScrollView>
    );
  }
}

export default Slot;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});