import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import {Calendar} from 'react-native-calendars';

  class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    this.props.navigation.navigate('Slot', { bookingDate : day, Doctorname : this.props.route.params?.Doctorname??'default value',uid: this.props.route.params?.uid??'default value'})
  }
  _onPressBack(){
    const {goBack} = this.props.navigation
      goBack()
  }
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View>
    <TouchableOpacity onPress={() => this._onPressBack() }><Text>Doctors name : {this.props.route.params?.Doctorname??'default value'}</Text></TouchableOpacity>
                    <Text ></Text>
                    <Text></Text>
      </View>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true}}}
          theme={{
            selectedDayBackgroundColor: 'green',
            todayTextColor: 'green',
            arrowColor: 'green',
          }}
        />
      </View>
    );
  }
}


export default Calc;


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  }
});