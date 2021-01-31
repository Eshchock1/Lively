import React, { useState, useEffect, Component, } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, Dimensions, Image, Modal, ScrollView, ImageBackground, Pressable} from 'react-native';
import firebase from "../firebase";
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

componentDidMount = () => {

  // make posts to database here


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
