import styles from './App.module.scss';
import Home from './pages/home/Home';
import React, { useRef } from 'react'

function App() {
  const tabRefs = useRef([]);
  return (
    <>
      <Home />
    </>
  );
}

export default App
