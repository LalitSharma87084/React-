import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter,setCounter] = useState(0)

  const addValue = () =>{
    if(counter < 20){
      setCounter(counter+1)
    }else{
      console.log("Can't go beyond 20")
    }
  }
  const removeValue = () =>{
    if(counter>0){
      setCounter(counter-1)
    }else{
      console.log("Can't go less than 0")
    }
    
  }

    return (
    <>
    <h1>Learning React</h1>
    <h2>Counter:{counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br/><br/>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}
export default App
