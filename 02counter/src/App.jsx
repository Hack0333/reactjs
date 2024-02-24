import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter] = useState(15);

  const addValue = ()=>{
    //value will be changed only once irrespective of how many times we call the set counter
    // setCounter(Counter + 1)
    // setCounter(Counter + 1)
    // setCounter(Counter + 1)
  
    // this approach is used to change value multpile times b/c the setcounter is updating the previous value of counter
    setCounter(prevCounter => prevCounter + 1 );
    setCounter(prevCounter => prevCounter + 1 );
    setCounter(prevCounter => prevCounter + 1 );
  }

  const removeValue = ()=>{
    // console.log("clicked ",{Counter});
    Counter = Counter-1;
    setCounter(Counter)
    // console.log("clicked ",{Counter});
  }

  return (
    <>
      <h1>Counter : {Counter}</h1>
      <button
      onClick={addValue}
      >ADD {Counter}</button>
      <br />
      <button
      onClick={removeValue}
      >REMOVE {Counter}</button>

      <p>Value of counter is : {Counter}</p>
    </>
  )
}

export default App
