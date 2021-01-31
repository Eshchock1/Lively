// Application created by Eshwar Chockalingam
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component  } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import AppStack from './navigators/appStack';
import * as Font from "expo-font";



export default class App extends Component {
  
  constructor(props:any) {
    super(props)
    this.state = {
      fontLoaded: false
    }
  }
  
  async componentDidMount() {

    try {
      await Font.loadAsync({
        MuliBlack: require("./assets/muli/Muli-Black.ttf"),
        MuliLight: require("./assets/muli/Muli-Light.ttf"),
        MuliRegular: require("./assets/muli/Muli-Regular.ttf"),
        MuliSemi: require("./assets/muli/Muli-SemiBold.ttf"),
        MuliBold: require("./assets/muli/Muli-Bold.ttf"),
        MuliBoldItalic: require("./assets/muli/Muli-BoldItalic.ttf")
  
      })
      this.setState({ fontLoaded: true })
    } catch (error) {
      console.log(error)
      return
    }
  }



render(){
  const { fontLoaded } = this.state

  if (!fontLoaded) return null;

  return (
    <View style={styles.container}>
    <AppStack />
      <StatusBar style="dark"/>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
