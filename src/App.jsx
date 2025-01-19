/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './App.css'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  
    const [name, setName] = useLocalStorage('username', '')

  return (
    <>
      <input type="text" placeholder="Enter your name" 
       value={name} onChange={(e)=>setName(e.target.value)}></input>
      <h2>Hello, {name}</h2>
    </>
  )
}

export default App
