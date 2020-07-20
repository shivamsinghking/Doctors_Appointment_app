import React, { Component } from 'react'
import { Text, View,ScrollView,Image } from 'react-native'

export default class Categories extends Component {
    render() {
        return (
            <View style={{height:130,width:130,borderWidth:0.5,borderColor:"#dddddd",marginLeft:20}}>
            <View style={{flex:2}}>
                <Image source={this.props.imagesUri} style={{flex:1,width:null,height:null,resizeMode:'cover'}} />
            </View>
            <View style={{flex:1}}>
             <Text>{this.props.name}</Text> 
            </View>
        </View>
        )
    }
}
