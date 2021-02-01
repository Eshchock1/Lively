import React, { useState, useEffect, Component, } from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard, Dimensions, Image, Modal, ScrollView, ImageBackground, Pressable} from 'react-native';
import firebase from "../firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Form, Item, Label, Input, Button} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
export function normalize(size) {
    return (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/ size)
  }
  

export default class QuestionPage extends Component {
constructor(props) {
    super(props)
    this.state = {
     
    }


}

async componentDidMount () {
  await AsyncStorage.setItem(this.props.navigation.state.params.title, "true");
  let  previous_events;
  try {
   previous_events = await AsyncStorage.getItem("previous_events");

   if (!previous_events) {
    await AsyncStorage.setItem('previous_events', JSON.stringify([]));
   } 

}
catch {
  const hello = await AsyncStorage.setItem('previous_events', JSON.stringify([]));

}
  let previous_events_new = [];
  let d = new Date();
  previous_events_new.push({name:this.props.navigation.state.params.title, score:this.props.navigation.state.params.points, date:d.toString().split(" ")[1] + " " + d.toString().split(" ")[2] + " " + d.toString().split(" ")[3]})
  console.log(previous_events_new)
  const hello = await AsyncStorage.setItem("previous_events", JSON.stringify(previous_events_new));



  
  let b = 0
  console.log( "init" + b)
  console.log( "init" + b)
  console.log( "init" + b)
  console.log( "init")
  console.log( "init")
  console.log( "init")
  console.log( "init")
  console.log( "init")
  console.log( "init")
  console.log( "init")

  try {
    base.database().ref('Leaderboard/' + String(firebase.auth().currentUser.displayName)).once('value', function (snapshot) {
      b = snapshot.val()['points']
    });
    console.log("current val" + b)
    b += this.props.navigation.state.params.points
    console.log("plus val" + b)

    firebase.database().ref('Leaderboard/' + String(firebase.auth().currentUser.displayName)).update({
      points: b,
      name: firebase.auth().currentUser.displayName,
    })
    console.log("req val" + b)
  }

  catch {
    console.log("------")
    console.log("------")
    console.log("------")
    console.log("------")

    firebase.database().ref('Leaderboard/' + String(firebase.auth().currentUser.displayName)).push({
      points: this.props.navigation.state.params.points,
      name: firebase.auth().currentUser.displayName,
    })
  }

  

// fb




}




render(){
  return (
      <View style={styles.container}>
        <View style={{flex: 0.33, flexDirection: 'row'}}>
          <View style={{flex:0.6, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: "MuliRegular", fontSize: normalize(16), marginTop: '5%', marginBottom: '6%'}}>You Earned: </Text>
              <Text style={{fontFamily: "MuliBlack", fontSize: normalize(24), color: '#E84E61'}}>{this.props.navigation.state.params.points} pts</Text>
          </View>
          <View style={{flex: 0.4, alignItems: 'flex-end'}}>
            <Image source={require("../assets/redRect.png")} style={{height: normalize(225),width: '100%'}} />
          </View>
        </View>
        <View style={{flex: 0.33, width:'100%', alignItems: 'flex-start', paddingLeft: '10%'}}>
          
          <Text style={{fontFamily: "MuliBold", fontSize: normalize(18), marginBottom: '7%'}}> ────    Congrats</Text>
          <Text style={{fontFamily: "MuliBlack", fontSize: normalize(48)}}>Trivia</Text>
          <Text style={{fontFamily: "MuliBlack", fontSize: normalize(48), color: '#FDB531'}}>Complete</Text>

        </View>
        <View style={{flex: 0.33, flexDirection: 'row'}}>
          <View style={{flex: 0.5}}>
          <Image source={require("../assets/yellowRect.png")} style={{height: normalize(250),width: '100%'}} />

          </View>
          <View style={{flex: 0.5, marginTop:'10%', }}>
        
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Events")}>
                <Text style={{fontFamily: "MuliBold", fontSize: normalize(15), color: '#FDB531'}}>Go Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{  backgroundColor: '#FDB531', padding: '5%', width: normalize(150), justifyContent: 'center', alignItems: 'center', marginTop: '7%', borderRadius: 10, }} onPress={() => this.props.navigation.navigate("Leaderboard")}>
                <Text style={{fontFamily: "MuliBold", fontSize: normalize(18), color: 'white'}}>Leaderboards</Text>
              </TouchableOpacity>


          </View>

        </View>
        
      </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: "center"

  },

});
