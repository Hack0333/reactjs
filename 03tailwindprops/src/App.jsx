import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    //<> is called fragments
    <>
     <h1 className='bg-green-500 rounded-xl p-3 mb-3'>Tailwind CSS</h1>
     <Card />
     <Card />
    </>
  )
}

export default App
