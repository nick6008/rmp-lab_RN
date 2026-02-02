import { useState } from 'react';

/* 
Пример 2. 
Несколько состояний в одном компоненте. Каждое состояние независимо.
*/
function UserProfile() {
const [name, setName] = useState('Не определен');
const [age, setAge] = useState(0);
return (
<div>
<h1>Профиль: {name}</h1>
<p>Возраст: {age}</p>
<button onClick={() => setName('Ольга')}>Изменить имя</button>
<button onClick={() => setAge(age + 1)}>Увеличить возраст</button>
</div>
);
}