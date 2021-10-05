import styles from './App.module.scss';
import About from './pages/about/About';
import DevLog from './pages/devLog/DevLog';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import React, { useRef } from 'react'
import { FaAngleUp } from 'react-icons/fa';

function App() {
  const tabRefs = useRef([]);
  const scrollUp = () => {
    tabRefs.current[0].scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <Header tabRefs={tabRefs} />
      <Home tabRefs={tabRefs} />
      <About tabRefs={tabRefs} />
      <Skills tabRefs={tabRefs} />
      <DevLog tabRefs={tabRefs} />
      <Projects tabRefs={tabRefs} />
      <button className={styles.scrollUp} onClick={scrollUp}>
        <FaAngleUp size='3rem' />
      </button>
      <footer>
        CONTACT | wiostz98kr@gmail.com <br />
        Copyright ⓒ 2021 Noma All rights reserved.
      </footer>
    </>
  );
}

export default App
