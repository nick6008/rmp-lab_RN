import React from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';

/* SectionList (Для данных с разделами/секциями). */
const SECTIONS_DATA = [
    {
        title: 'Основная еда',
        data: ['Пицца', 'Бургер', 'Паста'],
    },
    {
        title: 'Напитки',
        data: ['Вода', 'Кофе', 'Чай'],
    },
];
const MySectionList = () => {
return (
    <SectionList
        sections={SECTIONS_DATA} // Данные, структурированные по разделам
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text
        style={styles.item}>{item}</Text>} // Рендер элемента
        renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text> // Рендер заголовка секции
        )}
    />
);
};
// ... стили для item и header
const styles = StyleSheet.create({
    header: {
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
export default MySectionList;