import React, {useState,Component} from 'react';
import { StyleSheet, Text,TextInput,View,SafeAreaView,ScrollView,Image} from 'react-native';
import {Header,Left,Right,Icon} from 'native-base'
import Categories from '../components/explore/categories'

class HomeScreen extends Component{
static navigationOptions ={
    drawerIcon : ({tintColor}) => (
        <Icon name= "home" style ={{ fontSize: 24, color: tintColor}} />
    )
}

render() {
  return (
      <SafeAreaView>
 <View style={{shadowColor:'black'}}>
     <Header style={{backgroundColor:"grey"}}>
  <Left style={{marginLeft:-130,marginTop:15}}>
      <Icon name="menu" style={{color:'#fff'}} onPress= {() => this.props.navigation.openDrawer()}/>
  </Left>
     </Header>
 </View>
 <View style={{height:50,backgroundColor:'#fff',borderBottomWidth:2,borderBottomColor:'#dddddd'}}>
        <View  style={{flexDirection: 'row', margin:10,height:40, shadowColor:"black",shadowOffset:{width:0,height:0},justifyContent:"center",borderBottomColor:"grey"}}>
             
          <Icon name= "search" style={{fontSize:24, color: 'grey', padding: 8}} />
          <TextInput  placeholder=" Search for Doctors"
            placeholderTextColor= "#D3D3D3" style={{fontSize:18,opacity:100/2}}
            caretHidden={true} 
          />
                 
       </View>
 </View>
 <ScrollView scrollEventThrottle={16}>
       <View style={{paddingLeft:20,paddingTop:5,flex:1}}>
            <Text style={{fontSize:18, fontFamily: 'sans-serif' ,fontWeight:'700'}}> Top Recommended Doctors for You</Text>
            <View style={{height:130,backgroundColor:'white',marginTop:20,marginLeft:-20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Categories imagesUri={require('../assets/d1.jpg')} name="Renuka"/>
                <Categories imagesUri={require('../assets/d2.jpg')} name="Renuka"/>
                <Categories imagesUri={require('../assets/d3.jpg')} name="Renuka"/>
                <Categories imagesUri={require('../assets/d4.jpg')} name="Renuka"/>
                </ScrollView>

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
    
  }
  
});

export default HomeScreen;