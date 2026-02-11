import React, { useState } from 'react';
import {View, StyleSheet, Text, Button, useWindowDimensions} from 'react-native';
import { Link } from 'react-router-dom';
/* Хуки 
  HookDimens (useWindowDimensions) : изменение рамера окна
  HookState (useState) : счетчик
*/
const HookDimens = () => {
  const {height, width, scale, fontScale} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Window Dimension Data</Text>
      <Text>Хук: useWindowDimensions</Text>
      <Link to="https://reactnativedev.ru/rn/usewindowdimensions/">
          https://reactnativedev.ru/rn//usewindowdimensions/</Link>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
      <Text>Font scale: {fontScale}</Text>
      <Text>Pixel ratio: {scale}</Text>
    </View>
  );
};

const HookState = () => {
  // Объявление переменной состояния, которую мы назовём "count"
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Хук: useState</Text>
      <Link to="https://www.jscamp.app/ru/docs/reactnative10">
        https://www.jscamp.app/ru/docs/reactnative10</Link>

      <Text>Вы кликнули {count} раз</Text>
      <Button title="Нажми на меня" onPress={() => setCount(count + 1)} />
    </View>
  )
};

const Lab25 = () => {
  return (
    <View>
      <h1>Lab25 Хуки React.</h1>
      <HookState />
      <HookDimens />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginBottom: 12,
  },
});

export default Lab25;
