/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {View, StyleSheet} from 'react-native';
 import ButtonCombo from './ButtonCombo'
 
 export default class App extends Component {

   render() {
     return (
       
       <View style = {styles.base}>
        <ButtonCombo id = {1}/>
        <ButtonCombo id = {2}/>
        <ButtonCombo id = {3}/>
        <ButtonCombo id = {4}/>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: 'column', 
    backgroundColor: '#CFF635',
  },
});
