import React, { Component } from 'react'
import { Text, View,SafeAreaView,FlatList,StyleSheet, TouchableOpacity,Button,ScrollView,Image } from 'react-native';
import * as firebase from 'firebase';

 class dentist extends Component {


    state ={
  DATA: [
     {   id: 25,
      name: 'Ravi',
      location : 'allahabad'
     }
 ]

    }
    

  

  


  

renderItem = ({item}) => {
 return (
   <ScrollView>
   <TouchableOpacity  onPress={() => {
return (
  this.props.navigation.navigate('ListItem', item)
   )
    }}
    style={{marginTop:10, backgroundColor:'#fff', marginBottom:10,boxWithShadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5
  },margin:10,borderRadius:20/2}}   >
    <View style={{marginTop:10, marginBottom:10,padding:20,flexDirection:'row'}}>
     <View>
       <Image source={require('../assets/d1.jpg')}
       style={{height:70,width:70, borderRadius:70/2}}
       />
     </View>
     <View>
     <Text style={{fontSize:20,marginLeft:20,textTransform:'capitalize'}}> Dr.{item.name}</Text>
    <Text style={{fontSize:12,marginLeft:20,textTransform:'capitalize'}}>Location : {item.location}</Text>
    <Text style={{fontSize:12,marginLeft:20,textTransform:'capitalize'}}>Experience : {item.experience}</Text>
    <Text style={{fontSize:12,marginLeft:20,textTransform:'capitalize'}}>Fee : 200/-</Text>
     </View>
    
  </View>
  </TouchableOpacity>
  </ScrollView>
 ) 
}






componentDidMount(){
 
  var title = this.props.route.params?.title??'default value'
  console.log(title)
  let items =[]
  var ref = firebase.database().ref(title);
  ref.on("value", function(snapshot) {
   
    const scores = snapshot.val();
    const keys = Object.keys(scores);
   
    
    for(var i=0;i< keys.length ;i++){
      var k = keys[i];
      var name = scores[k].name;
      var location = scores[k].location;
      var experience = scores[k].experience;
      var slots = scores[k].slots;
      var uid = scores[k].uid
     
    let object = {
       name : name,
       location: location,
       experience: experience,
       slots: slots,
       uid: uid
     }  
     items.push(object);
    }
   
    
   }, function (error) {
    console.log("Error: " + error.code);
 });



   this.getItems(items)

}


getItems = (items) => this.setState({ DATA:items});

    render() {
    
        return (
            <SafeAreaView >
            <FlatList
              data={this.state.DATA}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
            
          </SafeAreaView>
        )
    }
}

export default dentist
