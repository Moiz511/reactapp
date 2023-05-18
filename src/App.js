
import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // where it is dark or light
  
  const togglemode = ()=> {
    if(mode==='light')
    { setMode('dark');
  document.body.style.background='grey';}
else{
  setMode('light');
  
  document.body.style.background='white';
}
  };
  return (
    <>
 <Navbar title="Text Analyzer"  mode={mode} togglemode={togglemode} />
 <div className="container my-3" >
 <Body heading="Enter your text here: " mode={mode} />
 </div>
    </>
  );
  
}
export default App;
