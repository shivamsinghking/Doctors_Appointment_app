import React, { Component } from 'react'
import { Text, View } from 'react-native'

 class Mybooking extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.route.params?.Doctorname??'default value'}</Text>
            </View>
        )
    }
}

export default Mybooking
