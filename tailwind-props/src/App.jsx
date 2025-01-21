import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
    <h1 className='bg-green-600 mb-4'>Tailwind Test</h1>
    <Card username = "Lalit" btnText='click me'/>
    <Card username = "Aman"/>
    </>
  )
}

export default App
