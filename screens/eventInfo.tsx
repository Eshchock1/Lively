import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Dimensions, Image, Modal, Alert, ScrollView, ImageBackground} from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export function normalize(size) {
  return (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/ size)
}

export default class WelcomePage extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      events: {
        symptom1: {
          title: 'Basketball',
          live: 'Currently Live',
          image: require("../assets/basketball.png"),
          color: '#FDB531'
        },
        symptom2: {
          title: 'Football',
          live: 'Not Live',
          image: require("../assets/football.png"),
          color: '#548EFF'
        },
        symptom3: {
          title: 'Tennis',
          live: 'Not Live',
          image: require("../assets/tennis.png"),
          color: '#E84E61'
        },
        symptom4: {
          title: 'Basketball',
          live: 'Currently Live',
          image: require("../assets/basketball.png"),
          color: '#FDB531'
        },
      },
        
      }
    }
  

  signOut = () => {
    firebase.auth().signOut().then(() => console.log('Signed out'));
    this.props.navigation.navigate('CreateAccountPage');
  }

render(){
  return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex:1}}>
          <View style={{ paddingTop: '15%', paddingLeft: '10%', paddingRight: '10%', height: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/350), backgroundColor:'#FDB531', borderBottomRightRadius:normalize(30), borderBottomLeftRadius:normalize(30)}}>
            <View style={{flex: 0.1, flexDirection: 'row'}}>
              <View style={{flex: 0.2}}>
                <Ionicons name="ios-arrow-back" size={24} color="white" />
              </View>
            </View>
            <View style={{flex: 0.5}}>
              <Text style={{fontFamily: 'MuliBlack', fontSize: normalize(36), marginTop: normalize(80), color: 'white', zIndex: 100}}>Basketball</Text>
              <Text style={{fontFamily: 'MuliLight', fontSize: normalize(14), marginTop: normalize(10), color: 'white', zIndex: 100}}>Event Currently Live</Text>
            </View>
            <ImageBackground source={require("../assets/basketball.png")} imageStyle={{ opacity: 0.15}} style={{ marginLeft: '15%', height: 300, width: 450, resizeMode: 'cover',}}

 />
          </View>
        </View>
        
        
          

      </ScrollView>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:'16%',
    marginHorizontal:'10%',
    
  },
  logo: {
    color: "white",
    marginHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30),
    fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/38),
    fontWeight: "bold",
    paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20),
  },
});
