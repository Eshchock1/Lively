import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Dimensions, Image, Modal, Alert, ScrollView} from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
      <ScrollView style={{flex: 1, backgroundColor:'white'}}>
        <View style={{marginHorizontal: '8%', marginTop: '18%'}}>
        <Image source={require('../assets/logotext.png')} style={{width:normalize(150), height:normalize(50)}}/>

        <Text style={{paddingTop: normalize(40), fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), fontFamily: 'MuliBlack', marginBottom: 25}}><Text style={{}}>Events </Text><Text style={{color: '#FDB531'}}>Today</Text></Text>

        {Object.keys(this.state.events).map((event, index) => {

          return(
            <TouchableOpacity key={index} style={{height: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/110),  flexDirection: 'row', backgroundColor: this.state.events[event].color, marginTop: 20, borderRadius: 10}} onPress={() => this.props.navigation.navigate("EventsInfo", {image: this.state.events[event].image, live: this.state.events[event].live, title: this.state.events[event].title, color: this.state.events[event].color})}>
              <View style={{flex: 0.6, padding: '8%'}}>
                <Text style={{fontFamily: 'MuliBlack', fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/22), paddingBottom: '5%',color: 'white' }}>{this.state.events[event].title}</Text>
                <Text style={{fontFamily: 'MuliRegular', fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/14), color: 'white'}}>{this.state.events[event].live}</Text>
              </View>
              <View style={{flex: 0.5, justifyContent:'flex-end'}}>
                <Image source={this.state.events[event].image} style={{height: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/100), width: '135%',  resizeMode: 'contain'}}></Image>

              </View>
            </TouchableOpacity>
          )
          
        })}
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
