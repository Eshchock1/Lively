import React, { useState, useEffect, Component  } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard, ScrollView, Image, Dimensions} from 'react-native';
import firebase from "../firebase";
import {Form, Item, Label, Input, Button} from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
export function normalize(size) {
  return (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/ size)
}

const CreateAccountPage = ({navigation}) => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrortext] = useState('');
  const [userCreated, setUserCreated] = useState(false)
const signUpUser = (email, password) => {
  var emailTrimmed = email.trim();
  var userName = name.trim();
  if (userName.length == 0) {
    setErrortext('Please enter a name')
  }
  else if (emailTrimmed.length == 0) {
    setErrortext('Please enter an email')
  }
    else if (password.length < 8) {
      setErrortext('Password must be 8 or more characters')
    }
    else {
      firebase.auth().createUserWithEmailAndPassword(emailTrimmed, password).catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setErrortext('Email already in use')
        }
    
        else if (error.code === 'auth/invalid-email') {
          setErrortext('Invalid email address')
        }

        else {
          setUserCreated(true);
        }

        console.log(error);
      }).then((userInfo) =>{ userInfo.user.updateProfile({displayName: userName}).then(firebase.auth().currentUser.reload()).then(() => {console.log(firebase.auth().currentUser.displayName)})})
    }
}

useEffect(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('user logged')
      navigation.navigate('AppNavigator')          
    }
 })}, []);

return (
  <View style={{flex:1,backgroundColor:"white", marginTop:'15%', marginHorizontal:'10%'}}>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <KeyboardAvoidingView // adjust the value here if you need more padding
    behavior="position"
    keyboardVerticalOffset={Platform.OS == 'ios'?0:-(Dimensions.get("window").width + Dimensions.get("window").height) / (1080/100)} 
>        
  <Image source={require('../assets/logo.png')} style={{width:normalize(50), height:normalize(50)}}/>
      <Text style={{fontFamily:'MuliBlack', fontSize:normalize(35), marginTop:normalize(70)}}>Welcome to{'\n'}<Text style={{color:'#FDB531'}}>Live.ly</Text></Text>
      <Form style={{alignItems:"center", marginTop:normalize(25), width:'100%'}}>
      <Item style={{backgroundColor:'#F5F5F5', width:"100%", borderRadius:10, justifyContent:'center', paddingLeft:20, marginTop:normalize(20), marginLeft:0, height:normalize(60)}}>
    <Input 
      placeholder="Name"
      autoCorrect={false}
      style={{color:"black", fontFamily:"MuliLight",}}
      autoCapitalize="none"
      onChangeText= {(name) => setName(name)}
    />
  </Item>
  <Item style={{backgroundColor:'#F5F5F5', width:"100%", borderRadius:10, justifyContent:'center', paddingLeft:20, marginTop:normalize(20), marginLeft:0, height:normalize(60)}}>
    <Input 
      placeholder="Email"
      autoCorrect={false}
      style={{color:"black", fontFamily:"MuliLight",}}
      autoCapitalize="none"
      onChangeText= {(email) => setEmail(email)}
    />
  </Item>
  <Item style={{backgroundColor:'#F5F5F5', width:"100%", borderRadius:10, justifyContent:'center', paddingLeft:20, marginTop:normalize(20), marginLeft:0, height:normalize(60)}}>
    <Input 
      placeholder="Password"
      autoCorrect={false}
      secureTextEntry={true}
      style={{color:"black", fontFamily:"MuliLight",}}
      autoCapitalize="none"
      onChangeText= {(password) => setPassword(password)}
    />
  </Item>
  </Form>
  <Text style={{textAlign:'center',marginHorizontal:20, paddingTop:20, color:'tomato', fontSize:15,fontFamily:'MuliLight', opacity:0.8}}>{errorText}</Text>
  <TouchableOpacity style={{backgroundColor:'#FDB531', width:'100%', height:normalize(50), alignItems:'center', justifyContent:'center', marginTop:20, borderRadius:15}} onPress={()=> signUpUser(email, password)}><Text style={{color:'white',fontSize:20, fontFamily:'MuliBold'}}>Create Account</Text></TouchableOpacity>
  <Text style={{textAlign:'center', marginHorizontal:30, color:'black', marginTop:20, fontSize:15, paddingTop:5, fontFamily:'MuliLight', opacity:0.8}}>Already have an account? <TouchableWithoutFeedback onPress={()=> navigation.navigate('LoginPage')}><Text style={{textDecorationLine:"underline"}}>Sign In.</Text></TouchableWithoutFeedback></Text>
  </KeyboardAvoidingView>
</TouchableWithoutFeedback>
</View>

)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363940',
  }
});

export default CreateAccountPage;