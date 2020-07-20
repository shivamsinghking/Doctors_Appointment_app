import React, { Component } from 'react'
import { Text, View,Alert,StyleSheet,TouchableOpacity} from 'react-native'
import firebase from 'firebase';
import {Formik} from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import {Container,Content,Header,Item,Input,Button,Label,Form,Icon} from 'native-base'


export class Singup extends Component {

state = {
  username: '',
  location: '',
  email: '',
  password: '',
  error :''
}

userSignUp = (email,password) => {
    
    try {
        if(this.state.password<6)
        {
         Alert.alert("please enter more than 6 character as password")
         return ;  
        }
        else{
            Alert.alert("you are sucessfully sign-up");
         
            firebase.auth().createUserWithEmailAndPassword(email, password);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User logged in already or has just logged in.
             
              var usersRef = firebase.database().ref('users/'+ user.uid)

              usersRef.set({
               username: this.state.username,
               location: this.state.location,
               email: this.state.email,
        
            });


            } else {
              // User not logged in or has just logged out.
            }
          });

        
        }
    }catch(error){
        this.setState({
            error: err.message
    })

}
}


createNewAccount = async (email,password) => {
    try {
      
       
    } catch (error) {
        console.log(error.message)
    }
}


 writeUserData(user) {
    firebase.database().ref('users/' + user.uid).set(user).catch(error => {
        console.log(error.message)
    });
}
I

    render() {
        return (
          <View style={{marginLeft:10,marginTop:10,marginRight:10}}>

          <TextInput placeholder="USERNAME"  style={{fontSize:18, borderBottomWidth:2,borderBottomColor:"black",marginTop:10,marginBottom:10}}
           onChangeText={username => this.setState({username})}  value ={this.state.username}
          />
             <TextInput placeholder="Email-ID"  style={{fontSize:18, borderBottomWidth:2,borderBottomColor:"black",marginTop:10,marginBottom:10}}
           onChangeText={email => this.setState({email})}  value ={this.state.email}
          />
           <TextInput placeholder="PASSWORD"  style={{fontSize:18, borderBottomWidth:2,borderBottomColor:"black",marginTop:10,marginBottom:10}}
           onChangeText={password => this.setState({password})}  value ={this.state.password}
          />
             <TextInput placeholder="LOCATION"  style={{fontSize:18, borderBottomWidth:2,borderBottomColor:"black",marginTop:10,marginBottom:10}}
           onChangeText={location => this.setState({location})}  value ={this.state.location}
          />
          <Button  full
                              rounded
                              primary
                              style={{marginTop: 10}}
                              onPress={() => this.userSignUp(this.state.email,this.state.password)}
                              
                   >
                      <Text style={{color:"#fff"}}>Sign up</Text> 
                  </Button>
                  <TouchableOpacity>
             <Text>{this.state.error}
             </Text>
             </TouchableOpacity>

          </View>
          
        )
    }
}
       
const styles = StyleSheet.create({
    container: {
      flex: 1,
       backgroundColor: '#fff',
 
       justifyContent:'center',
       marginTop: 40
    },
});
 
export default Singup
