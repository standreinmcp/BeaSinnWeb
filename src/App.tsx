import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components'; 
import { HomePage, MyStory, MyServices, ContactDetails } from './screens'; 

function App() {
  return (
    <div>
      <div className="appContainer">
        <Header />
        <HomePage />
        
      </div>
      <MyStory />
      <MyServices />
      <ContactDetails />
    </div>
  );
}

export default App;
