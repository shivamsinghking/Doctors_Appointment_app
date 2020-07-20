import React, {useState,Component} from 'react';
import { StyleSheet, Text, View,Image,Button, Modal,SafeAreaView,ScrollView} from 'react-native';
import {Header,Left,Right,Icon} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import ProfileForm from './profileForm';
import * as firebase from 'firebase';


class Profile extends Component{

    static navigationOptions ={
        drawerIcon : ({tintColor}) => (
            <Icon name= "setting" style ={{ fontSize: 24, color: tintColor}} />
        )
    }
    
  state={
    username: '',
    email: '',
    location : '',
    avatarSource : null,
    modal : false
  }

  addItem = (review) => {
    
    const user = review.username
    const locate = review.location
       this.setState({
         username: user,
         location : locate,
         modal: false
       });
    
      
   

  }

   openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    this.setState({ avatarSource: pickerResult.uri });

    var usersRef = firebase.database().ref("users/");

   
    usersRef.push({
      img: pickerResult.uri 
    })

  };

  getUserData(uid) {
    firebase.database().ref('users/' + uid).once("value", snap => {
        console.log(snap.val())
    })
}


componentDidMount(){
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      firebase.database().ref('users/' + user.uid).once("value", snap => {
       
        const firebaseUser = snap.val()
       
        this.setState({
          username: firebaseUser.username,
          location: firebaseUser.location,
          email: firebaseUser.email
        })
    })
 
    }
})

}


 
render() {
  return (
    <SafeAreaView>
      <ScrollView>
    <View>

    <Header style={{backgroundColor:"grey"}}>
 <Left style={{marginLeft:-130,marginTop:15}}>
     <Icon name="menu" style={{color:'#fff'}} onPress= {() => this.props.navigation.openDrawer()}/>
 </Left>
    </Header>

    <View>
     <Modal  visible={this.state.modal} animationType='slide'>
       <View>
        

          <Icon name="close" onPress={() => {
          this.setState({modal: false})
           }}
           style={{marginLeft:20,marginTop:20,fontSize:28}}
           />
         <ProfileForm addItem={this.addItem}/>
       </View>
      
     </Modal>
     </View>
  
    <View style={{backgroundColor:'', height:200,justifyContent:'center'}}>

       <View style={{backgroundColor:'skyblue', height:180,margin:10}}>
       <Image source={{uri: this.state.avatarSource}} style={{height:180,width:180,resizeMode:'cover',}}/>
       <Button title="Edit Profile Pic" onPress={this.openImagePickerAsync} />
        </View>
       
    </View>
     <View style={{backgroundColor:'#fff', marginLeft:40,marginTop:40,marginRight:40,elevation:4}}>
          <View style={{borderBottomColor:'grey',marginRight:40,marginLeft:20}}>
             <Text style={{fontSize:18,opacity:0.5}}>USERNAME</Text>
                  <Text style={{fontSize:15,marginBottom:10}}>{this.state.username}</Text>
            <Text style={{fontSize:18,opacity:0.5}}>EMAIL</Text>
                  <Text style={{fontSize:15,marginBottom:10}}>{this.state.email}</Text>
            <Text style={{fontSize:18,opacity:0.5}}>LOCATION</Text>
                  <Text style={{fontSize:15,marginBottom:10}}>{this.state.location}</Text>
          </View>
     </View>

     <View style={{ margin:20}}>
      <Button title= "Edit Profile" onPress = {() => (
        this.setState({modal : true})
      )} 
      style={{marginBottom:20}}
      /></View>
      <View style={{ margin:5,marginLeft:20,marginRight:20}}>
      <Button title="Log out" onPress ={() => firebase.auth().signOut()} 
      style={{marginTop:10}}
      />
     </View>
     
</View>
</ScrollView>
</SafeAreaView>
 
  );
}
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "center",
    backgroundColor: '#fff',
    alignItems : 'center'
  }
  
});

export default Profile;