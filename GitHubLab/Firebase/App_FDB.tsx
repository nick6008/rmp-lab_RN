// App_FDB.tsx
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { app } from './firebaseConfig';

/*  
  Для работы с Firebase 
  1. Создать проект
  2. Установить библиотеки Firebase:
   npm i -g expo-cli ( admin )
   npx expo install firebase 
    Для некоторых задач может понадобиться
   npx expo install expo-image-picker
  3. В консоли Firestore/Realtime Database 
   3.1. провести необходимые настройки
   3.2. Из Project Overview/Project settings скачать JSON конфигурации firebase
      (это будет файл firebaseConfig.js)
*/

/* Запись в базу данных Firestore/Realtime Database */

const App = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState<any[]>([]);  /* useState([]); */

  const db = getDatabase(app); 
  // Добавить пользователя
  const addUser = async () => {

    try {
      const usersRef = ref(db, 'users');
   // push() - добавление с авто-генерацией ключа
      const newUserRef = await push (usersRef, {
        name: "Ivan",
        email: Date.now()
      });
      set(newUserRef, { name });
      setName('');

      console.log("Документ добавлен с ID: ", usersRef.key);
   
    } catch (e) { 
      console.error("Ошибка: ", e);
    }   
  };

  // Получить пользователей в реальном времени
  useEffect(() => {
    const usersRef = ref(db, 'users');
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      const usersList = data
        ? Object.keys(data).map(key => ({ id: key, ...data[key] }))
        : [];
      setUsers(usersList);
    });
    return () => unsubscribe();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Добавить пользователя:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Имя"
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Button title="Добавить" onPress={addUser} />

      <Text style={{ marginTop: 20 }}>Список пользователей:</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.id} - {item.name}</Text>}
      />
    </View>
  );
};

export default App;
