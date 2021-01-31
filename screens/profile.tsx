import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Dimensions, Image, Modal, Alert} from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import { FontAwesome } from '@expo/vector-icons'; import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
export function normalize(size) {
    return (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/ size)
  }
  

export default class WelcomePage extends Component {

  signOut = () => {
    firebase.auth().signOut().then(() => console.log('Signed out'));
    this.props.navigation.navigate('CreateAccountPage');
  }

  state = {
      previous_events: [{date:'01/30/2021', name:'Basketball', score:230}, {date:'01/30/2021', name:'Basketball', score:2400}, {date:'01/30/2021', name:'Basketball', score:100}],
  }

render(){
  return (
      <View style={styles.container}>
            <View>

            </View>
            <Image source={require('../assets/logotext.png')} style={{width:normalize(150), height:normalize(50)}}/>
            <Text style={{fontFamily:'MuliBlack', fontSize:normalize(35), marginTop:normalize(30)}}>Your <Text style={{color:'#FDB531'}}>Profile</Text></Text>
            <Text style={{fontFamily:'MuliSemi', fontSize:normalize(20), marginTop:normalize(10), color:'#bababa'}}>{firebase.auth().currentUser.displayName}</Text>
            <TouchableOpacity activeOpacity={0.75} onPress={()=>this.props.navigation.navigate('Leaderboard')} style={{backgroundColor:'#FDB531', width:'100%', height:normalize(70), alignItems:'center', paddingLeft:30, marginTop:normalize(30), borderRadius:15, flexDirection:'row'}}><Text style={{color:'white',fontSize:normalize(30), fontFamily:'MuliBlack'}}>36</Text><View><Text style={{color:'white',fontSize:normalize(17), fontFamily:'MuliBold', paddingLeft:25,}}>Today's Rank</Text><Text style={{color:'white',fontSize:normalize(12), fontFamily:'MuliLight', paddingLeft:28,}}>View Leaderboard</Text></View></TouchableOpacity>
            {/* <TouchableOpacity activeOpacity={0.75} onPress={()=>this.signOut} style={{backgroundColor:'#E84E61', width:'100%', height:normalize(60), alignItems:'center', justifyContent:'center', marginTop:normalize(50), borderRadius:15,}}><Text style={{color:'white', fontSize:normalize(20), fontFamily:'MuliBold'}}><FontAwesome name="power-off" size={24} color="white" />   Sign Out</Text></TouchableOpacity> */}
            <Text style={{fontSize:normalize(25), fontFamily:'MuliBlack', marginTop:normalize(30),}}>Previous Events</Text>
            <ScrollView>
            {Object.keys(this.state.previous_events).map((event, index) => {

return(
    <TouchableOpacity key={index} activeOpacity={0.75} onPress={()=>this.props.navigation.navigate('Leaderboard')} style={{backgroundColor:'#F5F5F5', width:'100%', height:normalize(70), alignItems:'center', paddingLeft:30, marginTop:normalize(20), borderRadius:15, flexDirection:'row'}}><Text style={{color:'#929292',fontSize:normalize(20), fontFamily:'MuliSemi'}}>{this.state.previous_events[event].score} pts</Text><View><Text style={{color:'#929292',fontSize:normalize(17), fontFamily:'MuliBold', paddingLeft:25,}}>{this.state.previous_events[event].name}</Text><Text style={{color:'#929292',fontSize:normalize(12), fontFamily:'MuliLight', paddingLeft:28,}}>{this.state.previous_events[event].date}</Text></View></TouchableOpacity>
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
