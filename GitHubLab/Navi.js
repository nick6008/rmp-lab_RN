import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Lab23 from './lab/Lab23';
import Lab24 from './lab/Lab24';
import Lab25 from './lab/Lab25';
import Lab28 from './lab/Lab28';
import Lab30 from './lab/Lab30';
import About from './About';
import Contact from './Contact';
import Labtest from './lab/Labtest_0';

const Navi = () => {
    return (
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Домой</Link>
              </li>
              <li>
                <Link to="/lab23">Lab23 Жизненные циклы</Link>
              </li>
              <li>
                <Link to="/lab24">Lab24 React Navigation.</Link>
              </li>
              <li>
                <Link to="/lab25">Lab25  Хуки React.</Link>
              </li>
              <li>
                <Link to="/lab28">Lab28 Git.</Link>
              </li>
              <li>
                <Link to="/lab30">Lab30 Подключение Firebase.</Link>
              </li>
              <li>
                <Link to="/about">Ссылки</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/labtest">Labtest</Link>
              </li>
            </ul>
          </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lab23" element={<Lab23 />} />
            <Route path="/lab24" element={<Lab24 />} />
            <Route path="/lab25" element={<Lab25 />} />
            <Route path="/lab28" element={<Lab28 />} />
            <Route path="/lab30" element={<Lab30 />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />Labtest
            <Route path="/Labtest" element={<Labtest />} />
        </Routes>
        </div>
      </Router>
    )
};

export default Navi;
