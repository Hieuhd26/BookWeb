import React from 'react';

import './App.css';
import { NavBar } from './layout/header-footer/NavBar';
import { Footer } from './layout/header-footer/Footer';
import { BodyPage } from './layout/BodyPage';
import { layToanBoSach } from './api/SachApi';
function App() {
layToanBoSach().then().catch()
  return (
    <div className="App">
      <NavBar />
      <BodyPage/>
      <Footer/>
    </div>
  );
}

export default App;
