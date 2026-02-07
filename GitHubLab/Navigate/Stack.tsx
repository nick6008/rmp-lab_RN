import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// Импортируем контейнер навигации (обертка всего приложения)
// Импортируем функцию для создания стекового навигатора
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Stack Navigation */

// --- Экраны приложения ---
// 1. HomeScreen (Главный экран)
function HomeScreen({ navigation }) {
  return (
    <View style={styles.center}>
      <Text>Главный экран Стека</Text>
      <Button
        title="Перейти на экран Push-Pop"
        // Используем метод navigate для перехода на экран с именем 'Details'
        onPress={() => navigation.navigate('Details', { itemId: 86, otherParam: 'что-то еще' })}
      />
    </View>
  );
}

// 2. DetailsScreen (Экран деталей)
// Получаем параметры маршрута через пропс 'route'
function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;

  return (
    <View style={styles.center}>
      <Text>Экран Push-Pop</Text>
      <Text>ID элемента: {JSON.stringify(itemId)}</Text>
      <Text>Другой параметр: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Вверх по стеку"
        onPress={() => navigation.goBack()} // Метод goBack() возвращает назад
      />
      <Button
        title="Обновить ID элемента (заменить текущий экран)"
        onPress={() => navigation.push('Details', 
          { itemId: Math.floor(Math.random() * 100),
            otherParam: Math.floor(Math.random() * 100)
           })} // Метод push() добавляет новый экземпляр экрана в стек
      />
    </View>
  );
}

// --- Конфигурация навигатора ---
// Создаем экземпляр стека
const Stack = createNativeStackNavigator();

// Основной компонент приложения
//{/*  */}{/* Конфигурируем стек навигатор */}
function App() {
  return (
    // Оборачиваем все приложение в NavigationContainer
      // <NavigationContainer>
      // Конфигурируем стек навигатор 
      <Stack.Navigator initialRouteName="Home">
        {/* Определяем экраны и их имена */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Стек навигация' }} // Настройки заголовка
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Вверх' }}
        />
      </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;