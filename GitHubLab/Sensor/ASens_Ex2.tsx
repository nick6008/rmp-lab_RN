import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* LSens_Ex2 геолокация */

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync(); // Запрашиваем разрешение
      if (status !== 'granted') {
        setErrorMsg('Доступ к геолокации запрещён');
        return;
      }

      const loc = await Location.getCurrentPositionAsync({}); // Получаем координаты
      setLocation(loc);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {errorMsg
          ? errorMsg
          : location
          ? `Широта: ${location.coords.latitude}, Долгота: ${location.coords.longitude}`
          : 'Определяем местоположение...'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});