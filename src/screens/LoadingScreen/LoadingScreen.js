import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import '../../styles/app.css';
import './LoadingScreenStyle.css';

function LoadingScreen() {

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      autoplay: true,
      loop: true,
      animationData: require('../../assets/img/office.json')
    })
  }, []);

  return (
    <div className="app">
      <div className="container" ref={container}></div>
      <h1 className="appName">Welcome To Hiku</h1>
      <h1 className="appLoadingText">Loading...</h1>
    </div>
  );
}

export default LoadingScreen;
