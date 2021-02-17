import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ToastAndroid,
 KeyboardAvoidingView} from 'react-native';
import {Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';


export default class WriteStoryScr extends React.Component{
    constructor(){
        super();
        this.state={
          title: '',
          author: '',
          story: '',
        }
    }

    submitStory = ()=>{
      db.collection("stories").add({
          title: this.state.title,
          author: this.state.author,
          story: this.state.story
      })
      this.setState({
          title: "",
          author: "",
          story: ""
      })
      //ToastAndroid.show(" Your story has been submitted",ToastAndroid.LONG)
      //ToastAndroid.show(" Your story has been submitted",ToastAndroid.SHORT)
      alert('Story Submitted Successfully ✅✅');
  }
    
    render(){
        return(
          <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>
            <Text style={styles.story}> STORY HUB </Text>
            <Text style={styles.head}> Create a story of your own! </Text>
          <TextInput style={styles.inputBox} placeholder={'Name of your story'} />
          <TextInput style={styles.inputBox}  placeholder={'Author of the  story'} />
          <TextInput style={styles.inputBox2}  placeholder={'Write your story here'} multiline={true}/>
      <TouchableOpacity style={styles.submit} onPress={this.submitStory}>
                      <Text style={styles.text}>Submit</Text>
                      </TouchableOpacity>
          </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 50,
    width: 380,
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    backgroundColor: '#FFFD9B'
    },
    inputBox2: {
      marginTop: 50,
      width: 380,
      alignSelf: 'center',
      height: 200,
      textAlign: 'center',
      borderWidth: 4,
      backgroundColor: '#FFFD9B'
      },
      text:{
      color:'blue',
      fontSize:20,
      textAlign: 'center',
      fontWeight: 'bold'
      },
      submit:{
      justifyContent:'center',
      borderWidth:4,
      backgroundColor:'pink',
      marginTop:20,
      marginLeft:650,
      width:100,
      height:45,
      },
      story:{
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        backgroundColor: 'pink',
        fontSize: 45,
        fontWeight: 'bold',
        fontFamily: 'times'
    },
    head:{
      justifyContent:'center',
      alignItems:'center',
      textAlign: 'center',
      backgroundColor: 'aqua',
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: 'times'
  }
    
})