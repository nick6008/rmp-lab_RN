import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
/* стили expo */
const LotsOfStyles = () => {
return (
<View style={styles.container}>
    <Text style={styles.red}>just red Базовый подход</Text>
    <Text style={styles.bigBlue}>just bigBlue</Text> {/* 1 */}
    <Text style={[styles.bigBlue, { color: 'green' }]}> {/* 2 */}
    Комбинирование. Этот текст частично переопределяет базовый стиль
    </Text>
    <Text style={[styles.bigBlue, styles.red]}>Источники bigBlue, then red</Text> {/* 3 */}
    <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue </Text>
</View>
);
};
const styles = StyleSheet.create({
    container: {
    marginTop: 50,
    },
    bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    },
    red: {
    color: 'red',
    },
});
export default LotsOfStyles;