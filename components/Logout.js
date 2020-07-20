
import React, { Component } from 'react'
import { Text, View } from 'react-native';
import * as firebase from 'firebase';

export class Logout extends Component {

logoutUser = () => {
  firebase.auth().signOut()
}

  render() {
    return (
       this.logoutUser
    );
  }
}

export default Logout
