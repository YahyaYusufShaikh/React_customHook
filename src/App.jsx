/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [name, setName] = useState(
    localStorage.getItem('username') ?
    localStorage.getItem('username') : ' '
  );

  useEffect(()=>{
    console.log("hello")
    localStorage.setItem('username', name)
  }, [name])

  return (
    <>
      <input type="text" placeholder="Enter your name" 
       value={name} onChange={(e)=>setName(e.target.value)}></input>
      <h2>Hello, {name}!</h2>
    </>
  )
}

export default App
