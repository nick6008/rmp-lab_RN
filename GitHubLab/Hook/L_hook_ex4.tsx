import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
/* Пример4 
с хуком useWindowDimensions адаптации текста к размеру окна: */

const App = () => {
const windowDimensions = useWindowDimensions(); // Используем хук
return (
<View style={styles.container}>
<Text>
Размеры окна: высота - {windowDimensions.height}, ширина -
{windowDimensions.width}
</Text>
{/* меняем размер текста в зависимости от ширины */}
<Text style={{ fontSize: windowDimensions.width * 0.05 }}>
Текст адаптируется к ширине экрана
</Text>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
},
});
export default App;