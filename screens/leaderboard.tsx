import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Dimensions, Image, Modal, ScrollView, } from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export function normalize(size) {
    return (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/ size)
  }
  

export default class WelcomePage extends Component {

  signOut = () => {
    firebase.auth().signOut().then(() => console.log('Signed out'));
    this.props.navigation.navigate('CreateAccountPage');
  }
  state = {
    leaderboard: [{name:'Vansh', score:1}, {name:'Nushaine', score:20}, {name:'Hassan', score:300}, {name:'Hassan', score:300}, {name:'Hassan', score:300}, {name:'Hassan', score:300}, {name:'Hassan', score:300}, {name:'Hassan', score:300}],
}
render(){
  return (
      <View style={styles.container}>
        <Image source={require('../assets/logotext.png')} style={{width:normalize(150), height:normalize(50)}}/>
        <Text style={{fontFamily:'MuliBlack', fontSize:normalize(35), marginTop:normalize(40)}}>Leader<Text style={{color:'#FDB531'}}>board</Text></Text>

        <View style={{width: "100%", height: normalize(60), backgroundColor:"#E84E61", borderRadius: normalize(10), marginTop: "8%", flexDirection: "row", alignItems:"center", marginBottom: "6%"}}>
          <Text style={{fontFamily:"MuliBlack", marginLeft: "7.5%", fontSize:normalize(22.5), color: 'white'}}>69</Text>
          <Text style={{fontFamily:"MuliRegular", marginLeft: "7.5%", fontSize:normalize(17), color: 'white'}}>{firebase.auth().currentUser.displayName}</Text>
        </View>
        <ScrollView>
        {Object.keys(this.state.leaderboard).map((person, index) => {
            return(
                <View key={index} style={{width: "100%", height: normalize(60), backgroundColor:index<3?"#FDB531":"#F5F5F5", borderRadius: normalize(10), marginTop: "6%", flexDirection: "row", alignItems:"center"}}>
                <Text style={{fontFamily:"MuliBlack", marginLeft: "7.5%", fontSize:normalize(22.5), color:index<3?"white":"#929292"}}>{index+1}</Text>
                <Text style={{fontFamily:"MuliRegular", marginLeft: "7.5%", fontSize:normalize(17), color:index<3?"white":"#929292"}}>{this.state.leaderboard[person].name}</Text>
                <Text style={{fontFamily:"MuliRegular", position:'absolute', right: "7.5%", fontSize:normalize(18), color:index<3?"white":"#929292"}}>{this.state.leaderboard[person].score} pts</Text>

                
                </View>
            )
            })}
        </ScrollView>
      </View>
  );}
}

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
