/* App.js */
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {WebView} from 'react-native-webview';


export default class App extends React.Component{
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
      <WebView
          source={{ uri: 'https://testlib.ru' }}
        style={{ marginTop: 20 }}
      />
      <TouchableHighlight style={{alignItems: 'center'}} onPress={this.onPress}>
        <Text>Click Me</Text>
      </TouchableHighlight>
      </View>
    );
  }
}