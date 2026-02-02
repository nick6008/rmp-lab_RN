import React, { useEffect, useState } from 'react';
/*
Пример3 таймера с хуками useState, useEffect:
*/
function Timer() {
const [count, setCount] = useState(0);
useEffect(() => {
// Запускаем интервал при монтировании компонента
const intervalId = setInterval(() => {
setCount(prevCount => prevCount + 1);
}, 1000); // Обновлять каждую секунду
// Очищаем интервал при размонтировании компонента
return () => {
clearInterval(intervalId);
};
}, []); /* Пустой массив зависимостей означает, что эффект запускается один раз при
монтировании и очищается при размонтировании */
return (
<div>
<h1>Таймер: {count} секунд</h1>
</div>
);
}