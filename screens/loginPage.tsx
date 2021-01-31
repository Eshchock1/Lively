import React, { useState, useEffect, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import firebase from "../firebase";
import { Form, Item, Label, Input, Button } from "native-base";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
export function normalize(size) {
  return (Dimensions.get("window").width + Dimensions.get("window").height) / (1080/ size)
}
const LoginPage = ({ navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrortext] = useState("");

  const loginUser = (email, password) => {
    var emailTrimmed = email.trim();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailTrimmed, password)
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          setErrortext("Invalid email address");
        } else if (error.code === "auth/wrong-password") {
          setErrortext("Invalid password");
        } else if (error.code === "auth/user-not-found") {
          setErrortext("User not found");
        }
        console.log(error);
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user logged");
        navigation.navigate("AppNavigator");
      }
    });
  }, []);

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
      <TouchableOpacity style={{backgroundColor:'#FDB531', width:'100%', height:normalize(50), alignItems:'center', justifyContent:'center', marginTop:20, borderRadius:15}} onPress={()=> loginUser(email, password)}><Text style={{color:'white',fontSize:20, fontFamily:'MuliBold'}}>Sign In</Text></TouchableOpacity>

      <Text style={{textAlign:'center', marginHorizontal:30, color:'black', marginTop:20, fontSize:15, paddingTop:5, fontFamily:'MuliLight', opacity:0.8}}>Dont have an account yet? <TouchableWithoutFeedback onPress={()=> navigation.navigate('CreateAccountPage')}><Text style={{textDecorationLine:"underline"}}>Sign Up.</Text></TouchableWithoutFeedback></Text>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363940",
  },
});

export default LoginPage;
