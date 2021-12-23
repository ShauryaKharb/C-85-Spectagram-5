import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'

export default class Loading extends React.Component {
  checkIfLogedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('DashboardScreen')
      } else {
        this.props.navigation.navigate('LoginScreen')
      }
    })
  }

  componentDidMount() {
    this.checkIfLogedIn()
  }

  render() {
    return (
      <View>
        <Text>Loading.......</Text>
      </View>
    )
  }
}
