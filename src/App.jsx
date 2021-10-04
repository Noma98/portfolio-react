import styles from './App.module.scss';
import About from './pages/about/About';
import DevLog from './pages/devLog/DevLog';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
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
      <DevLog tabRefs={tabRefs} />
      <Projects tabRefs={tabRefs} />
    </>
  );
}

export default App
