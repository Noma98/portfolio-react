import styles from './App.module.scss';
import About from './pages/about/About';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Skills from './pages/skills/Skills';
import React, { useRef } from 'react'

function App() {
  const tabRefs = useRef([]);
  return (
    <>
      <Header tabRefs={tabRefs} />
      <Home tabRefs={tabRefs} />
      <About tabRefs={tabRefs} />
      <Skills tabRefs={tabRefs} />
    </>
  );
}

export default App
