import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components'; 
import { HomePage } from './screens'; 

function App() {
  return (
    <div className="appContainer">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
