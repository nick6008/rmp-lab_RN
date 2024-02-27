import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Navi from './Navi';

const App = () => {
  return (
    <ScrollView>
      <Text>https://reactnativedev.ru/rn</Text>
      <Navi />

      <View>
        
        <Image
    source={{
      uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
    }}
    style={{width: 200, height: 200}}
  />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default App;