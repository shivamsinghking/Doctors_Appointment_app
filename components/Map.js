
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import getDirections from 'react-native-google-maps-directions'
 
export default class Map extends Component {
 
  handleGetDirections = () => {
    const data = {
       source: {
       
      },
      destination: {
        latitude: 25.3905,
        longitude: 81.8632
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      
    }
 
    getDirections(data)
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  }
});