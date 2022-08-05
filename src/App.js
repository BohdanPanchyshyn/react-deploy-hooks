import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Contracts from "./components/Contracts"

function App() {

  return (
    <div className='App'>
      <div className='App-header'>
        <Contracts />
      </div>
    </div>
  );
}

export default App;
