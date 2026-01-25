import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

/* пример обработки циклов Activity с помощью useEffect */
function LifecycleDemoComponent() {
  const [count, setCount] = useState(0);

  // 1. Имитация componentDidMount (монтирование) и componentDidUpdate (обновление)
  useEffect(() => {
    // Этот код выполняется при монтировании компонента И при каждом обновлении
    console.log('=1=Компонент был отрендерен или обновлен (аналог componentDidMount и componentDidUpdate)');
    // Например, здесь можно выполнять запрос к API или устанавливать подписку

    // 2. Имитация componentWillUnmount (размонтирование)
    return () => {
      // Эта функция (cleanup function) выполняется перед следующим вызовом useEffect
      // (при обновлении) или когда компонент размонтируется
      console.log('=2=Компонент будет размонтирован или обновлен (аналог componentWillUnmount для предыдущего эффекта)');
      // Например, здесь можно отменять подписки, таймеры или очищать ресурсы
    };
  }); // Без второго аргумента (массива зависимостей)

  // 3. Имитация componentDidMount ТОЛЬКО (однократный запуск)
  useEffect(() => {
    console.log('=3=Компонент смонтирован впервые (ТОЛЬКО componentDidMount)');
    // Здесь можно выполнить первоначальную загрузку данных

    // Очистка при размонтировании (дополнительно)
    return () => {
        console.log('=4=Компонент будет размонтирован (componentWillUnmount для однократного эффекта)');
    };
  }, []); // Пустой массив зависимостей обеспечивает однократный вызов

  // 4. Имитация componentDidUpdate (только при изменении определенных зависимостей)
  useEffect(() => {
    console.log(`=5=Счетчик изменился до ${count} (выполняется только при обновлении count)`);
  }, [count]); // Массив зависимостей указывает, при каких изменениях выполнять эффект

  return (
    <View>
      <Text>Счетчик: {count}</Text>
      <Button title="Увеличить счетчик" onPress={() => setCount(count+1)} />
    </View>
  );
}

export default LifecycleDemoComponent;

