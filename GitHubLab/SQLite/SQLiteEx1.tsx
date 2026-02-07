import * as SQLite from 'expo-sqlite';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet, Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
//  find ~/prg/kbp/SQLite / -name "*.db"

// Определение интерфейса для данных
interface Todo {
  id: number;
  value: string;
  done: number;
}

export default function App() {
  const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  // 1. Инициализация БД
  useEffect(() => {
    async function setup() {  /* добавил имя бд my.db */
      const database = await SQLite.openDatabaseAsync(' ');
      
      // Создание таблицы, если она не существует
      await database.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS todos (
          id INTEGER PRIMARY KEY NOT NULL, 
          value TEXT NOT NULL, 
          done INTEGER DEFAULT 0    /* для следующего задания */
        );
      `);
      
      setDb(database);
    }
    setup();
  }, []);

  // 2. Загрузка данных (Read)
  useEffect(() => {
    if (db) fetchTodos();
  }, [db]);

  const fetchTodos = async () => {
    if (!db) return;
    const allRows = await db.getAllAsync<Todo>('SELECT * FROM todos');
    setTodos(allRows);
  };

  // 3. Добавление записи (Create)
  const addTodo = async () => {
    if (text.trim() === '' || !db) return;
    
    await db.runAsync('INSERT INTO todos (value) VALUES (?)', text);
    setText('');
    await fetchTodos(); // Обновляем список
  };

  // 4. Удаление записи (Delete)
  const deleteTodo = async (id: number) => {
    if (!db) return;
    await db.runAsync('DELETE FROM todos WHERE id = ?', id);
    await fetchTodos();
  };

  // Компонент отрисовки элемента списка
  const renderTodo = ({ item }: { item: Todo }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.value}</Text>
      <TouchableOpacity onPress={() => deleteTodo(item.id)}>
        <Text style={styles.deleteBtn}>Удалить</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мой список дел (SQLite)</Text>
      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Что нужно сделать?" 
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addTodo}>
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTodo}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60, paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  inputContainer: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginRight: 10 },
  addBtn: { backgroundColor: '#007AFF', padding: 15, borderRadius: 5, justifyContent: 'center' },
  addBtnText: { color: 'white', fontWeight: 'bold' },
  list: { flex: 1 },
  todoItem: { 
    flexDirection: 'row', justifyContent: 'space-between', padding: 15, 
    borderBottomWidth: 1, borderBottomColor: '#eee', alignItems: 'center' 
  },
  todoText: { fontSize: 16 },
  deleteBtn: { color: 'red' }
});