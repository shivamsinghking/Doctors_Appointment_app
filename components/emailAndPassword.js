import React ,{Component}from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Modal} from 'react-native';
import firebase from 'firebase';
import {Container,Content,Header,Item,Input,Button,Label,Form,Icon} from 'native-base'
import SignUp from './Singup'


class Email extends Component{
    
state={
    email :'',
    password :'',
    error:'',
    loading : false,
    modal : false
}

onButtonPress = () => {
firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
.then(this.onLoginSucess)
.catch(err =>{
    this.setState({
        error: err.message
    })
})
}

onLoginSucess = () =>{
    this.setState({
        error:'',
        loading: false
    })
}



    render(){
        return (
          <Container style={styles.container}>
              <Form>
                  <Item floatingLabel>
                      <Label>Email</Label>
                      <Input 
                       autoCorrect= {false}
                       autoCapitalize= "none"
                       onChangeText={email => this.setState({email})}  value ={this.state.email}
                      />
                  </Item>
                  <Item floatingLabel>
                      <Label>Password</Label>
                      <Input 
                       autoCorrect= {false}
                       autoCapitalize= "none"
                       secureTextEntry={true}
                       onChangeText={password => this.setState({password})}  value ={this.state.password}
                      />
                  </Item>
                  <Button  full
                              rounded
                              success
                              style={{marginTop: 10}}
                              onPress ={this.onButtonPress}
                   >
                      <Text style={styles.btn}>Log In</Text> 
                  </Button>
                  <Button  full
                              rounded
                              primary
                              style={{marginTop: 10}}
                              onPress = {() => (
                                this.setState({modal : true})
                              )}
                   >
                      <Text style={styles.btn}>Sign up</Text> 
                  </Button>
              </Form>
              <TouchableOpacity>
             <Text style={styles.error}>{this.state.error}
             </Text>
             </TouchableOpacity>

             <View>
     <Modal  visible={this.state.modal} animationType='slide'>
       <View>
          <Icon name="close" onPress={() => {
          this.setState({modal: false})
           }}  
           style={{fontSize:36,marginLeft:20,marginTop:10}}
           />
           <Text   style={{fontSize:24,marginLeft:20,marginTop:10}} > SIGN-UP</Text>
         <SignUp  />
       </View>
      
     </Modal>
     </View>
          </Container>
          );
        }
    }
       
const styles = StyleSheet.create({
    container: {
      flex: 1,
       backgroundColor: '#fff',
 
       justifyContent:'center',
       padding: 10
    },
    input:{
        backgroundColor:'#ffc0cb',
        height: 40,
        fontSize:15,
        borderRadius:5,
        marginBottom:15,
        paddingLeft:10,
    },
    error:{
        fontSize:20,
        color: 'red',
        padding: 15,
        
    },
    error2:{
        backgroundColor:'skyblue',
        height: 50,
        borderRadius: 20
    },
    btn:{
       
        color: '#fff',
        
    }
    
  });

 export default Email;
    
        
    