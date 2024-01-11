import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import context from './components/Context';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [theme,setTheme]=useState('light'); 
  return (
    <context.Provider value={theme}>
      <div className={`card ${theme}`}>
        <div className="top-bar">
                      <div className="heading">Calc</div>
                      <div className="theme-btn">
                          <button className='night-btn' onClick={()=>setTheme('dark')}><FontAwesomeIcon icon={faMoon} /></button>
                          <button className='day-btn' onClick={()=>setTheme('light')}><FontAwesomeIcon icon={faSun}/></button>
                      </div>
        </div>
        <Calculator/>
      </div>
    </context.Provider>
  );
}

export default App;
