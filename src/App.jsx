import styles from './App.module.scss';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import React, { useRef } from 'react'

function App() {
  const tabRefs = useRef([]);
  return (
    <>
      <Header tabRefs={tabRefs} />
      <Home />
    </>
  );
}

export default App
