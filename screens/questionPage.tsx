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
      points: this.props.navigation.state.params.points,
      timer: 30,
      disabled:false,
      countdown:0,
      starting:0,
    }


}

componentDidMount = () => {
  this.state.questionCounter += 1
  {Object.keys(this.props.navigation.state.params.questionList).map((question, index) => {
    if(index == this.state.questionCounter) {
      console.log('index', index)
      this.setState({starting:Date.now()})
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

  this.setState({countdown:setInterval(() => {this.handleTimer()}, 1000)}) 
}

handleTimer () {
  this.setState({timer:this.state.timer - 1})
  if (this.state.timer <= 0) {
    this.nextQuestion('e');
  }

}



nextQuestion = (button: string) => {
  this.setState({disabled:true})
  clearInterval(this.state.countdown)
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
  if(button != 'e'){
    this.setState({points:this.state.points + (1000 - Math.floor((Date.now() - this.state.starting) * (400/30000)))})
  }

  // calculate points

  

  console.log(this.state.navigateAgain)

  console.log(this.state.points, 'points')
  if(this.state.navigateAgain){
    setTimeout(() => 
    this.props.navigation.push("QuestionPage", {title:this.props.navigation.state.params.title, questionList: this.props.navigation.state.params.questionList, questionCounter: this.state.questionCounter, points:this.state.points}) 
    
    , 100) 
   
  } else {
  this.props.navigation.navigate("TriviaComplete", {points: this.state.points, title:this.props.navigation.state.params.title}) 
  }
  

}

render(){
  return (
      <View style={styles.container}>
        <View style={{width: "80%", height: '9%', backgroundColor: "#FDB531", marginTop: "20%", borderRadius: 10, alignItems: "center", flexDirection: "row"}}>
            <Text style={{fontSize: normalize(24), fontFamily: "MuliBlack", marginLeft: "10%", color: "white"}}>{this.props.navigation.state.params.points} points</Text>
            <ImageBackground source={require("../assets/basketball.png")} imageStyle={{ opacity: 0.15}} style={{ height: 60, width: 85, resizeMode: 'cover', right: 0, position: "absolute"}} />
        </View>
        <View style={{marginLeft: "6%", marginTop: "10%", width: "80%", flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
          <View style={{flex:0.7}}>
            <Text style={{fontFamily: "MuliBlack", fontSize:normalize(16), lineHeight: normalize(30)}}>{this.state.question.question}</Text>
          </View>
          <View style={{flex:0.3}}>

            <View style={{backgroundColor:"#E84E61", zIndex:1000, width:normalize(70), height:normalize(70), borderRadius:1000, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'white', fontFamily:'MuliBlack', fontSize:normalize(25)}} >{this.state.timer}</Text></View>
        </View>
        </View>
        
        <Pressable disabled={this.state.disabled} onPress={() => this.nextQuestion('a')} style={{width:"80%", height: '9%', backgroundColor: this.state.selectedABG, marginTop: "10%", borderRadius: 10, flexDirection: "row", alignItems: "center"}}>
            <Text style={{fontSize: normalize(22), marginLeft: "7.5%", color: this.state.selectedAWHITE2, fontFamily: "MuliRegular"}}>A</Text>
            <Text style={{fontSize: normalize(18), marginLeft: "5%", color: this.state.selectedAWHITE, fontFamily: "MuliRegular"}}>{this.state.question.optionA}</Text>
        </Pressable>

        <Pressable disabled={this.state.disabled} onPress={() => this.nextQuestion('b')} style={{width:"80%", height: '9%', backgroundColor: this.state.selectedBBG, marginTop: "5%", borderRadius: 10, flexDirection: "row", alignItems: "center"}}>
            <Text style={{fontSize: normalize(22), marginLeft: "7.5%", color: this.state.selectedBWHITE2, fontFamily: "MuliRegular"}}>B</Text>
            <Text style={{fontSize: normalize(18), marginLeft: "5%", color: this.state.selectedBWHITE, fontFamily: "MuliRegular"}}>{this.state.question.optionB}</Text>
        </Pressable>

        <Pressable disabled={this.state.disabled} onPress={() => this.nextQuestion('c')} style={{width:"80%", height: '9%', backgroundColor: this.state.selectedCBG, marginTop: "5%", borderRadius: 10, flexDirection: "row", alignItems: "center"}}>
            <Text style={{fontSize: normalize(22), marginLeft: "7.5%", color: this.state.selectedCWHITE2, fontFamily: "MuliRegular"}}>C</Text>
            <Text style={{fontSize: normalize(18), marginLeft: "5%", color: this.state.selectedCWHITE, fontFamily: "MuliRegular"}}>{this.state.question.optionC}</Text>
        </Pressable>

        <Pressable disabled={this.state.disabled} onPress={() => this.nextQuestion('d')} style={{width:"80%", height: '9%', backgroundColor: this.state.selectedDBG, marginTop: "5%", borderRadius: 10, flexDirection: "row", alignItems: "center"}}>
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
