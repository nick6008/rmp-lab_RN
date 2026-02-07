import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Text, View } from 'react-native';
// Можно использовать иконки через @expo/vector-icons
import Ionicons from '@expo/vector-icons/Ionicons';
import DrawerScreen from './Drawer';
import StacksScreen from './Stack';

/* Tab навигация */
function HomeScreen() { 
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Главная Tab навигаторов!</Text>
    </View>;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
//    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: true,  /*  false - скрыть текстовые подписи */
          // Настройка цветов иконок
          tabBarActiveTintColor: 'tomato',   // цвет иконки при нажатии
          tabBarInactiveTintColor: '#2105f7', // цвет неактивных иконок          
          // Настройка стиля панели вкладок
          tabBarStyle: {
            backgroundColor: '#d1d1d1', // цвет фона панели
            borderTopWidth: 0,          // убираем верхнюю линию (по желанию)
            elevation: 0,               // убираем тень на Android
            height: 60,                 // высота панели
          },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Stacks') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Drawer') {
              iconName = focused ? 'menu' : 'menu-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Stacks" component={StacksScreen} />
        <Tab.Screen name="Drawer" component={DrawerScreen} />

      </Tab.Navigator>
//    </NavigationContainer>
  );
}