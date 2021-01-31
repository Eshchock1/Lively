import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableOpacity, Keyboard, Dimensions, Image, Modal, Alert, ScrollView, ImageBackground} from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export function normalize(size) {
  return (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/ size)
}

export default class WelcomePage extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      image: this.props.navigation.state.params.image,
      title: this.props.navigation.state.params.title,
      live: this.props.navigation.state.params.live,
      color: this.props.navigation.state.params.color,
      questions: {
        question1: {
          question: "Who was the coach of the Toronto Raptors?",
          optionA: "Vansh Sethi",
          optionB: "Nushaine Ferdinand",
          optionC: "Khalid Falili",
          optionD: "Kael Lacelle",
          correctAns: 'Vansh Sethi'
        },
        question2: {
          question: "Who was the coach of the Boston Celtics?",
          optionA: "Vansh Sethi",
          optionB: "Nushaine Ferdinand",
          optionC: "Hassan Alawie",
          optionD: "Eeshwar Chockalingam",
          correctAns: 'Hassan Alawie'
        },
        question3: {
          question: "Who was the coach of the Boston Celtics?",
          optionA: "Vansh Sethi",
          optionB: "Nushaine Ferdinand",
          optionC: "Hassan Alawie",
          optionD: "Eeshwar Chockalingam",
          correctAns: 'Eeshwar Chockalingam'
        },
        question4: {
          question: "Who was the coach of the Boston Celtics?",
          optionA: "Vansh Sethi",
          optionB: "Nushaine Ferdinand",
          optionC: "Hassan Alawie",
          optionD: "Eeshwar Chockalingam",
          correctAns: 'Nushaine Ferdinand '
        },
        question5: {
          question: "Who was the coach of the Boston Celtics",
          optionA: "12345678",
          optionB: "12345678",
          optionC: "12345678e",
          optionD: "12345678",
          correctAns: 'Nushaine Ferdinand '
        },
      },
      questionCounter: -1,
      points: 0

      
      }
    }

    componentDidMount() {
      // make req here
    }
  

  signOut = () => {
    firebase.auth().signOut().then(() => console.log('Signed out'));
    this.props.navigation.navigate('CreateAccountPage');
  }

  renderTrivia = () => {
    if(this.state.live == 'Currently Live') {
      return(
        <View  style={{justifyContent:'flex-end', alignItems: 'center'}}>
          <Text style={{paddingTop: normalize(40), fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), fontFamily: 'MuliBlack', marginBottom: 25}}><Text>Trivia Is </Text><Text style={{color: this.state.color}}>Live</Text></Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("QuestionPage", {questionList: this.state.questions, questionCounter: this.state.questionCounter, points: this.state.points})} style={{width: normalize(275), backgroundColor: this.state.color, justifyContent: 'center', alignItems: 'center', padding: '4%', borderRadius: 10}}>
            <Text style={{fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/18), fontFamily: 'MuliBlack', color: 'white'}}>Join Now</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return(
        <View style={{justifyContent:'flex-end', alignItems: 'center'}}>
          <Text style={{paddingTop: normalize(40), fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/30), fontFamily: 'MuliBlack', marginBottom: 25}}><Text>Trivia </Text><Text style={{color: this.state.color}}>Not</Text><Text> Live</Text></Text>
          <View style={{width: normalize(275), backgroundColor: '#F0F0F0', justifyContent: 'center', alignItems: 'center', padding: '4%', borderRadius: 10}}>
            <Text style={{fontSize: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/18), fontFamily: 'MuliBlack', color: 'white'}}>Join Now</Text>
          </View>
        </View>
      )
    }
  }

render(){
  return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex:1}}>
        <TouchableOpacity onPress={() => this.props.navigation.popToTop()} style={{zIndex: 100, position:'absolute', left:'10%', top:'12%'}}>
                <Ionicons name="ios-arrow-back" size={24} color="white" />
                </TouchableOpacity>
          <View style={{ paddingTop: '15%', paddingLeft: '10%', paddingRight: '10%', height: (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/350), backgroundColor:this.state.color, borderBottomRightRadius:normalize(30), borderBottomLeftRadius:normalize(30)}}>
            <View style={{flex: 0.5}}>

              <Text style={{fontFamily: 'MuliBlack', fontSize: normalize(36), marginTop: normalize(80), color: 'white', zIndex: 100}}>{this.state.title}</Text>
              <Text style={{fontFamily: 'MuliLight', fontSize: normalize(14), marginTop: normalize(10), color: 'white', zIndex: 100}}>Event {this.state.live}</Text>
            </View>
            <ImageBackground source={this.state.image} imageStyle={{ opacity: 0.15}} style={{ marginLeft: '15%', height: 350, width: 450,}}/>
            <View ></View>
          </View>

              <View style={{backgroundColor: 'white', height: normalize(350), justifyContent: 'center', alignItems: 'center'}}>
                <View style={{marginTop: normalize(65)}}>
                {this.renderTrivia()}

              </View>
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
