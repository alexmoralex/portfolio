import React, { useState } from 'react';
import './App.scss';

import Icons from './components/background/Icons';
import Menu from './components/background/Menu';
import Home from './components/pages/home/Home';
import Works from './components/pages/works/Works';
import Skills from './components/pages/skills/Skills';
import Contact from './components/pages/contact/Contact';

const App = () => {

  const [page, setPage] = useState('home')
  const [theme, setTheme] = useState('App')
  const [menu, setMenu] = useState('')

  const toggleTheme = value => {
    setTheme(value)
  }

  const toggleMenu = value => {
    setMenu(value)
  }

  const togglePage = value => {
    setPage(value)
    setMenu('')
  }

  return (
    <div className={theme}>
      <div className={"pages "+page}>
        <Home />
        <Works />
        <Skills />
        <Contact />
      </div>
      <Menu menu={menu} toPage={togglePage} toOpen={toggleMenu} />
      <Icons toDark={toggleTheme} />
    </div>
  );
}

export default App;
