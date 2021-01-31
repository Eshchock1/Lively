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
      questionCounter: this.props.navigation.state.params.questionCounter,
      question: {},
      navigateAgain: true,
      selectedABG: "#F5F5F5",
      selectedBBG: "#F5F5F5",
      selectedCBG: "#F5F5F5",
      selectedDBG: "#F5F5F5",
      selectedAWHITE: "#263238",
      selectedBWHITE: "#263238",
      selectedCWHITE: "#263238",
      selectedDWHITE: "#263238",
      selectedAWHITE2: "#BEBEBE",
      selectedBWHITE2: "#BEBEBE",
      selectedCWHITE2: "#BEBEBE",
      selectedDWHITE2: "#BEBEBE",
      points: this.props.navigation.state.params.points
    }


}

componentDidMount = () => {
  this.state.questionCounter += 1
  {Object.keys(this.props.navigation.state.params.questionList).map((question, index) => {
    if(index == this.state.questionCounter) {
      console.log('index', index)
      this.setState({question: this.props.navigation.state.params.questionList[question]})
      console.log('length', Object.keys(this.props.navigation.state.params.questionList).length)
      console.log('QC', this.state.questionCounter)
      if(index == Object.keys(this.props.navigation.state.params.questionList).length - 1){
        console.log('setting navigate to false')
        // this number is 2 bc I have only 3 questions rn
        this.setState({navigateAgain: false})
      }
    } 

    
  })}
}

calculatePoints = () => {

}

nextQuestion = (button: string) => {
  if(button == 'a'){
    this.setState({selectedABG: "#FDB531", selectedAWHITE: "#FFFFFF", selectedAWHITE2: "white"})
  }
  if(button == 'b'){
    this.setState({selectedBBG: "#FDB531", selectedBWHITE: "#FFFFFF", selectedBWHITE2: "white"})
  }
  if(button == 'c'){
    this.setState({selectedCBG: "#FDB531", selectedCWHITE: "#FFFFFF", selectedCWHITE2: "white"})
  }
  if(button == 'd'){
    this.setState({selectedDBG: "#FDB531", selectedDWHITE: "#FFFFFF", selectedDWHITE2: "white"})
  }
  setTimeout(() => console.log('moving to next page'), 100)

  // calculate points

  this.state.points += 100

  console.log(this.state.navigateAgain)

  console.log(this.state.points, 'pints')
  if(this.state.navigateAgain){
   this.props.navigation.push("QuestionPage", {questionList: this.props.navigation.state.params.questionList, questionCounter: this.state.questionCounter, points:this.state.points}) 
   
  } else {
  this.props.navigation.navigate("TriviaComplete") 
  }
  

}

render(){
  return (
      <View style={styles.container}>
        <View style={{width: "80%", height: '9%', backgroundColor: "#FDB531", marginTop: "20%", borderRadius: 10, alignItems: "center", flexDirection: "row"}}>
            <Text style={{fontSize: normalize(24), fontFamily: "MuliBlack", marginLeft: "10%", color: "white"}}>{this.props.navigation.state.params.points} points</Text>
            <ImageBackground source={require("../assets/basketball.png")} imageStyle={{ opacity: 0.15}} style={{ height: 60, width: 85, resizeMode: 'cover', right: 0, position: "absolute"}} />
        </View>
        <View style={{marginLeft: "6%", marginTop: "10%", width: "80%"}}>
            <Text style={{fontFamily: "MuliBlack", fontSize:normalize(18), lineHeight: normalize(30)}}>{this.state.question.question}</Text>
        </View>
        <Pressable onPress={() => this.nextQuestion('a')} style={{width:"80%", height: '9%', backgroundColor: this.state.selectedABG, marginTop: "10%", borderRadius: 10, flexDirection: "row", alignItems: "center"}}>
            <Text style={{fontSize: normalize(22), marginLeft: "7.5%", color: this.state.selectedAWHITE2, fontFamily: "MuliRegular"}}>A</Text>
            <Text style={{fontSize: normalize(18), marginLeft: "5%", color: this.state.selectedAWHITE, fontFamily: "MuliRegular"}}>{this.state.question.optionA}</Text>
        </Pressable>

        <Pressable onPress={() => this.nextQuestion('b')} style={{width:"80%", height: '9%', backgroundColor: this.state.selectedBBG, marginTop: "5%", borderRadius: 10, flexDirection: "row", alignItems: "center"}}>
            <Text style={{fontSize: normalize(22), marginLeft: "7.5%", color: this.state.selectedBWHITE2, fontFamily: "MuliRegular"}}>B</Text>
            <Text style={{fontSize: normalize(18), marginLeft: "5%", color: this.state.selectedBWHITE, fontFamily: "MuliRegular"}}>{this.state.question.optionB}</Text>
        </Pressable>

        <Pressable onPress={() => this.nextQuestion('c')} style={{width:"80%", height: '9%', backgroundColor: this.state.selectedCBG, marginTop: "5%", borderRadius: 10, flexDirection: "row", alignItems: "center"}}>
            <Text style={{fontSize: normalize(22), marginLeft: "7.5%", color: this.state.selectedCWHITE2, fontFamily: "MuliRegular"}}>C</Text>
            <Text style={{fontSize: normalize(18), marginLeft: "5%", color: this.state.selectedCWHITE, fontFamily: "MuliRegular"}}>{this.state.question.optionC}</Text>
        </Pressable>

        <Pressable onPress={() => this.nextQuestion('d')} style={{width:"80%", height: '9%', backgroundColor: this.state.selectedDBG, marginTop: "5%", borderRadius: 10, flexDirection: "row", alignItems: "center"}}>
            <Text style={{fontSize: normalize(22), marginLeft: "7.5%", color: this.state.selectedDWHITE2, fontFamily: "MuliRegular"}}>D</Text>
            <Text style={{fontSize: normalize(18), marginLeft: "5%", color: this.state.selectedDWHITE, fontFamily: "MuliRegular"}}>{this.state.question.optionD}</Text>
        </Pressable>
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
