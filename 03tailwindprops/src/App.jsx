import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let obj = {
    age : 23,
    gender : "male"
  }
  let arr = [1, 2, 3, 4]

  return (
    //<> is called fragments
    <>
     <h1 className='bg-green-500 rounded-xl p-3 mb-3'>Tailwind CSS</h1>
     <Card name= "Deepak" myobj={obj} myarr={arr}/>
     <Card name="KUmar" btnText="click me"/>
     <Card name="Sharma" btnText="profile" />
    </>
  )
}

export default App
