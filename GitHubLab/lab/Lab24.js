import React from 'react';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
/* https://snack.expo.dev/ 
React Navigation
*/

const Favorites = () => {
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Favorites</Text>
    </View>
  );
};

const HomeScreen = () => {
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Домой</Text>
    </View>
  );
};

const MyNotes = () => {
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Моя вкладка</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator()

export default function Lab24() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Мои записи" component={MyNotes} />
        <Tab.Screen name="Избранное" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
