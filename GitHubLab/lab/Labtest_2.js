import React from 'react';
import { CreateAppContainer } from '@react-navigation/native';
/* import { createStackNavigator } from 'react-navigation-stack'; */
import { CreateBottomTabNavigator } from 'react-navigation-tabs';
import { Text, View } from 'react-native';

const Favorites = () => {
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Favorites</Text>
    </View>
  );
};

const Feed = () => {
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Feed</Text>
    </View>
  );
};

const MyNotes = () => {
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>MyNotes</Text>
    </View>
  );
};

const TabNavigator = CreateBottomTabNavigator({
  FeedScreen:{
    screen: Feed,
    navigationOptions:{
      tabBarLabel:'Feed',
    }
  },
  MyNoteScreen:{
    screen: MyNotes,
    navigationOptions:{
      tabBarLabel:'My Notes',
    }
  },
  FavoriteScreen:{
    screen: Favorites,
    navigationOptions:{
      tabBarLabel:'Favorites',
    }
  }
});

export default CreateAppContainer(TabNavigator);