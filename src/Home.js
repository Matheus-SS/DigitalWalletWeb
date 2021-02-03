import React from 'react';
import './Home.css';
import loginScreen from './assets/01.png';
import homeScreen from './assets/02.png';
import qrCodeScreen from './assets/03.png';
import logo from './assets/wallie-logo.png';
import app from './assets/wallie.apk';

const Home = () => {
  return (
    <>
    <div className="container-banner">
      <img src={logo} className="logo-image"  alt="logo"/>
      <strong>Uma carteira além do seu bolso!</strong>
    </div>

    <div className="description">
      <p>Wallie é um app onde você além de fazer pagamentos, 
        você pode gerenciar suas despesas. </p>
    </div>

    <section id="section-cards">
        <div className="card">
          <img src={loginScreen} className="card-image" alt="signup"/>

        </div>
        <div className="card">
          <img src={homeScreen} className="card-image" alt="Home"/>

        </div>
          <div className="card">
            <img src={qrCodeScreen} className="card-image" alt="Payment"/>
        </div>
    </section>

    <div className="button-container">
    <a href={app} download>
      <button>
          Download - Android APK
      </button>
      </a>
    </div>
    

    <footer>
       Copyright &copy; 2020 - Matheus Santos
    </footer>
    </>
  )
};

export default Home;