import { Magnetometer } from 'expo-sensors';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

/* LSens_Ex1 компас=магнитометр */
/*
  npx expo install expo-sensors
  Ex2: npx expo install expo-location
  Ex3: npm i expo-image-picker
*/

export default function App() {
  const [magnetometer, setMagnetometer] = useState(0);

  useEffect(() => {
    Magnetometer.addListener(data => {
      let { x, y } = data;
      let angle = Math.atan2(y, x) * (180 / Math.PI);
      angle = angle >= 0 ? angle : angle + 360;
      setMagnetometer(angle);
    });

    return () => {
      Magnetometer.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Компас</Text>
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/compass.png' }}
        style={{
          width: 200,
          height: 200,
          transform: [{ rotate: `${360 - magnetometer}deg` }],
        }}
      />
      <Text style={styles.text}>{Math.round(magnetometer)}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    margin: 20,
  },
});