import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

/* ScrollView (Для для небольшого количества элементов) */
const App = () => {
// Создаем массив с данными для демонстрации
 const items = Array.from({ length: 50 }, (_, i) => `Элемент списка #${i
+ 1}`);
return (
<SafeAreaView style={styles.safeArea}>
{/* ScrollView позволяет прокручивать контент внутри него */}
<ScrollView style={styles.scrollView}>
    <Text style={styles.title}>Список элементов:</Text>
    {items.map((item, index) => (
        <Text key={index} style={styles.item}>
        {item}
    </Text>
))}
</ScrollView>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
    safeArea: {
    flex: 1, // Занимает всю доступную высоту экрана
    backgroundColor: '#fff',
    },
    scrollView: {
    marginHorizontal: 20,
    },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    },
    item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    },
});
export default App;