import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Linking } from 'react-native';

const About = () => {
  return (
    <div>
      <h1>Ссылки</h1>
      <ul>
        <li><Link to="https://reactnativedev.ru/rn">https://reactnativedev.ru/rn/</Link></li>
        <li><Link to="https://www.jscamp.app/ru/docs/reactnative00">www.jscamp.app/ru/docs/reactnative00</Link></li>
      </ul>
    </div>
  );
};

export default About;
