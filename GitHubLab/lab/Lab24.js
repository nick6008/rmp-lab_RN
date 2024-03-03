import React from 'react';
import { View } from 'react-native-web';

const Lab24 = () => {
  return(
    <View>
      <h1>Lab24 React Navigation.</h1>
      <h3>Эта лаба не заработала по причине:</h3>
      <p>
      Web Bundling failed 2272ms (C:\android\L3_2\node_modules\expo\AppEntry.js)<br/>
      Unable to resolve "react-navigation-tabs" from "lab\Labtest_2.js"
      </p>
    <h3>Какие предложения?<br/>Текст лабы в файле Labtest_2.js</h3>
    </View>
  )
  ;
};

export default Lab24;