import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './styles/app.css';
import './App.css';

import Router from './components/Router';

function App() {

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: require('./assets/img/office.json')
    })
  }, []);

  return (
    <Router />
  );
}

export default App;
