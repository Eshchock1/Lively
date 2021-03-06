import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard, Dimensions, Image, Modal, Alert} from 'react-native';
import firebase from "../firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Form, Item, Label, Input, Button} from 'native-base';
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
export function normalize(size) {
    return (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/ size)
  }
  

export default class WelcomePage extends Component {

  signOut = () => {
    AsyncStorage.clear();
    firebase.auth().signOut().then(() => console.log('Signed out'));
    this.props.navigation.navigate('CreateAccountPage');
  }
  state = {
    previous_events: [],
    rank:0,
}
  async componentDidMount() {
    const focusListener = this.props.navigation.addListener("didFocus", async () => {
      let hello
    try {
      hello = await AsyncStorage.getItem("previous_events");
      if (!hello) {
        hello = []
        this.setState({previous_events:hello})
      }
      else {
        this.setState({previous_events:JSON.parse(hello)})
      }

    }
    catch {
      hello = []
      this.setState({previous_events:hello})
    }

    const temp = await AsyncStorage.getItem("rank");
    this.setState({rank:temp})
    
    });

  }

  

render(){
  return (
      <View style={styles.container}>
            <Image source={require('../assets/logotext.png')} style={{width:normalize(150), height:normalize(50)}}/>
            <Text style={{fontFamily:'MuliBlack', fontSize:normalize(35), marginTop:normalize(30)}}>Your <Text style={{color:'#FDB531'}}>Profile</Text></Text>
            <TouchableOpacity activeOpacity={0.75} onPress={()=>this.props.navigation.navigate('Leaderboard')} style={{backgroundColor:'#FDB531', width:'100%', height:normalize(70), alignItems:'center', paddingLeft:30, marginTop:normalize(30), borderRadius:15, flexDirection:'row'}}><Text style={{color:'white',fontSize:normalize(30), fontFamily:'MuliBlack'}}>{this.state.rank}</Text><View><Text style={{color:'white',fontSize:normalize(17), fontFamily:'MuliBold', paddingLeft:25,}}>Today's Rank</Text><Text style={{color:'white',fontSize:normalize(12), fontFamily:'MuliLight', paddingLeft:28,}}>View Leaderboard</Text></View></TouchableOpacity>
            <View style={{backgroundColor:'#E84E61', width:'100%', height:normalize(70), justifyContent:'center', paddingLeft:30, marginTop:normalize(20), borderRadius:15}}><Text style={{color:'white',fontSize:normalize(17), fontFamily:'MuliBold',}}>{firebase.auth().currentUser.displayName}</Text><TouchableOpacity activeOpacity={0.75} onPress={()=>this.signOut()}><Text style={{color:'white',fontSize:normalize(12), fontFamily:'MuliLight', }}><AntDesign name="poweroff" size={normalize(12)} color="white" />  Sign Out</Text></TouchableOpacity></View>
            {/* <TouchableOpacity activeOpacity={0.75} onPress={()=>this.signOut} style={{backgroundColor:'#E84E61', width:'100%', height:normalize(60), alignItems:'center', justifyContent:'center', marginTop:normalize(50), borderRadius:15,}}><Text style={{color:'white', fontSize:normalize(20), fontFamily:'MuliBold'}}><FontAwesome name="power-off" size={24} color="white" />   Sign Out</Text></TouchableOpacity> */}
            <Text style={{fontSize:normalize(25), fontFamily:'MuliBlack', marginTop:normalize(30),}}>Previous Events</Text>
            <ScrollView>
            {this.state.previous_events.length ==0?<Text style={{fontSize:normalize(15), fontFamily:'MuliSemi', marginTop:normalize(18),}}>You haven't participated in an event yet!</Text>:null}
            {this.state.previous_events.map((event, index) => {

return(
    <TouchableOpacity key={index} activeOpacity={0.75} style={{backgroundColor:'#F5F5F5', width:'100%', height:normalize(70), alignItems:'center', paddingLeft:30, marginTop:normalize(20), borderRadius:15, flexDirection:'row'}}><Text style={{color:'#929292',fontSize:normalize(20), fontFamily:'MuliSemi'}}>{event.score} pts</Text><View><Text style={{color:'#929292',fontSize:normalize(17), fontFamily:'MuliBold', paddingLeft:25,}}>{event.name}</Text><Text style={{color:'#929292',fontSize:normalize(12), fontFamily:'MuliLight', paddingLeft:28,}}>{event.date}</Text></View></TouchableOpacity>
)
})}
            </ScrollView>
      </View>
  );}
}
// previous events particpated in 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:'16%',
    marginHorizontal:'10%'
  },
  logo: {
    color: "white",
    marginHorizontal:(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30),
    fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/38),
    fontWeight: "bold",
    paddingTop: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/20),
  },
});
