import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen />
      </View>
    )
  }
 //  <TextInput
//      style={styles.inputBox}
//    onChangeText={text =>{
//       this.setState({
//         text:text,
//         isSearchPressed: false,
//         word  : "Loading...",
//         lexicalCategory  :'',
//         examples : []
//         definition : ""
   
//        });
//  }}
//  />
}