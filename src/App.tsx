import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components'; 
import { HomePage, MyStory } from './screens'; 

function App() {
  return (
    <div>
      <div className="appContainer">
        <Header />
        <HomePage />
        
      </div>
      <MyStory />
    </div>
  );
}

export default App;
