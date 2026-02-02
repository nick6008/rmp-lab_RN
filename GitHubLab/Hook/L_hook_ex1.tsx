import { useEffect, useState } from 'react';

/*
Пример1 пользовательского хука, который отслеживает ширину окна браузера:
*/
function useWindowWidth() {
const [width, setWidth] = useState(window.innerWidth);
useEffect(() => {
const handleResize = () => setWidth(window.innerWidth);
window.addEventListener('resize', handleResize);
// Очистка обработчика при размонтировании компонента
return () => window.removeEventListener('resize', handleResize);
}, []);
return width;
}
// Использование хука в компоненте:
export default function MyComponent() {
const width = useWindowWidth();
return <div>Ширина окна: {width}px</div>;
}