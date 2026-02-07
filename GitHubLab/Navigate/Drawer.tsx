import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Button, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Drawer_2')} 
        title="Перейти во вторую"
      />
    </View>
  );
}

function Drawer2Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Назад" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
//    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        {/* Экраны, доступные через боковое меню */}
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Главная Drawer' }} />
        <Drawer.Screen name="Drawer_2" component={Drawer2Screen} options={{ title: 'Вторая Drawer' }} />
      </Drawer.Navigator>
//    </NavigationContainer>
  );
}