import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';

/* LSens_Ex3 камера */

export default function App() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
    // Запрос разрешения на доступ к камере
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
        alert('Извините, требуется разрешение на использование камеры!');
        return;
    }

    // Запуск камеры для съемки фотографии
    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    if (!result.canceled) {
        setImage(result.assets[0].uri);
    }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Сделать фото" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 20 }} />}
        </View>
    );
}