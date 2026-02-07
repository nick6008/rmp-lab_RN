// App_FAuth.tsx
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { app } from './firebaseConfig'; // путь к вашему файлу конфигурации  auth->database

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
/* Аутентификация в Firebase */

export default function App() {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null); /*useState(null); */

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);  
      alert('Пользователь зарегистрирован!');
    } catch (error) {
      alert(error);  /* .message */
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert('Вход выполнен!');
    } catch (error) {
      alert(error);  /* .message */
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      alert('Выход выполнен!');
    } catch (error) {
      alert(error);  /* .message */
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Зарегистрироваться" onPress={handleSignUp} />
      <Button title="Войти" onPress={handleSignIn} />
      <Button title="Выйти" onPress={handleSignOut} />
      {user && <Text>Вы вошли как: {user.email}</Text>}
    </View>
  );
}