import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Dimensions, Image, Modal, Alert} from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function normalize(size) {
  return (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/ size)
}

export default class WelcomePage extends Component {

  constructor(props){
    super(props)
    
    }
  

render(){
  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={()=>this.signOut()}><Text style={{marginTop:200, fontFamily:"MuliBold", color:"#FFAE6C"}}>Sign Out</Text></TouchableOpacity>
      </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    color: "white",
    marginHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30),
    fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/38),
    fontWeight: "bold",
    paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20),
  },
});
