import React, { Component } from 'react'
import { Text, View,Button } from 'react-native';
import {Formik} from 'formik';
import { TextInput } from 'react-native-gesture-handler';


 class profileForm extends Component {
    render() {
        return (
            <View >
               <Formik
               initialValues= {{username:'', location:''}}
               onSubmit={(values) => {
                   this.props.addItem(values);
                 
               }}
               >
                   {(props) =>  (
                       <View style={{margin:20}}>
                           <Text style={{fontSize:24,fontWeight:'700',marginBottom:20}}> Edit Profile Here ....</Text>
                           <TextInput  placeholder="enter username" onChangeText={props.handleChange('username')}
                            value={props.values.username}  style={{borderBottomColor:'grey', borderBottomWidth: 2,fontSize:24,fontWeight:'500'}}
                           />
                        
                           <TextInput  placeholder="enter location" onChangeText={props.handleChange('location')}
                           value={props.values.location}
                           style={{borderBottomColor:'grey', borderBottomWidth: 2,marginBottom:20,fontSize:24,fontWeight:'500'}}
                           />
                        <Button title="Submit"  onPress={props.handleSubmit} />
                         
                       </View>
                   )}
            

               </Formik>
            </View>
        )
    }
}

export default profileForm;
