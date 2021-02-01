import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Dimensions, Image, Modal, ScrollView, } from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function normalize(size) {
    return (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/ size)
  }
  

export default class WelcomePage extends Component {

  readUserData() {
    let rankings = []
    let self = this;
    firebase.database().ref('Leaderboard/').on('value', function (snapshot) {
      let rankings = []
      for (let key in snapshot.val()) {
        console.log(key)
        for (let bruh in snapshot.val()[key]) {
        rankings.push({
          name: key,
          score: snapshot.val()[key][bruh]['points']
        })
      }
      rankings.sort((a, b) => b.score - a.score);
      self.setState({leaderboard:rankings})
      let i = 0
      rankings.forEach(async (e) => {
          i +=1;
          if (e['name'] == firebase.auth().currentUser.displayName) {
            self.setState({userStats:{score:e['score'], place:i,}})
            const temp = await AsyncStorage.setItem("rank", i.toString());
          }
        }
      )
    }});
    if (!this.state.userStats.place) {
      self.setState({userStats:{score:0, place:0,}})      
      const temp = AsyncStorage.setItem("rank", "0");
    }
  }

  componentDidMount() {
    this.readUserData();
  }

  signOut = () => {
    firebase.auth().signOut().then(() => console.log('Signed out'));
    this.props.navigation.navigate('CreateAccountPage');
  }
  state = {
    userStats:0,
    leaderboard: [{name:'Vansh', score:1}, {name:'Nushaine', score:20}, {name:'Hassan', score:300}, {name:'Hassan', score:300}, {name:'Hassan', score:300}, {name:'Hassan', score:300}, {name:'Hassan', score:300}, {name:'Hassan', score:300}],
  }
render(){
  return (
      <View style={styles.container}>
        <Image source={require('../assets/logotext.png')} style={{width:normalize(150), height:normalize(50)}}/>
        <Text style={{fontFamily:'MuliBlack', fontSize:normalize(35), marginTop:normalize(40)}}>Leader<Text style={{color:'#FDB531'}}>board</Text></Text>

        <View style={{width: "100%", height: normalize(60), backgroundColor:"#E84E61", borderRadius: normalize(10), marginTop: "8%", flexDirection: "row", alignItems:"center", marginBottom: "6%"}}>
          <Text style={{fontFamily:"MuliBlack", marginLeft: "7.5%", fontSize:normalize(22.5), color: 'white'}}>{this.state.userStats.place}</Text>
          <Text style={{fontFamily:"MuliRegular", marginLeft: "7.5%", fontSize:normalize(17), color: 'white'}}>{firebase.auth().currentUser.displayName}</Text>
          <Text style={{fontFamily:"MuliRegular", position:'absolute', right: "7.5%", fontSize:normalize(18), color:'white'}}>{this.state.userStats.score} pts</Text>                
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
