import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

/* FlatList (Самый распространенный и рекомендуемый способ) */
const DATA = [
{ id: '1', title: 'Первый элемент' },
{ id: '2', title: 'Второй элемент' },
{ id: '3', title: 'Третий элемент' },
];
const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
const MyFlatList = () => {
return (
<FlatList
    data={DATA} // Ваши данные (массив)
    renderItem={({ item }) => <Item title={item.title} />} // Как рендерить каждый элемент
    keyExtractor={item => item.id} // Уникальный ключ для каждого элемента
/>
);
};
const styles = StyleSheet.create({
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
export default MyFlatList;