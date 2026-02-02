import { Image, StyleSheet, Text, View } from 'react-native';
export default function CardWithImage() {
return (
<View style={styles.card}>
    {/* Компонент Image для отображения картинки. */}
    <Image
    source={require('@/assets/images/me_pict.jpg')}
    style={styles.image}
    />
    {/* Контейнер для текста, чтобы он не сливался с изображением. */}
    <View style={styles.textContainer}>
        <Text style={styles.title}>
          Группа, Фамилия
        </Text>
        <Text style={styles.description}>
            Текстовый компонент.
        </Text>
    </View>
</View>
);
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 4, // Тень для Android
        shadowColor: '#000', // Тень для iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        margin: 16,
    },
    image: {
        width: '50%',
        height: 400, // Высота изображения
        resizeMode: 'center' // Центрирует изображение в контейнере.
    },
    textContainer: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
});