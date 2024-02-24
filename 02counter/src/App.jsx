import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //we will use useState hook so that the change value will be reflected in the UI
  // const [Counter,setCounter] = useState(15) //its const so we can't change the value
  let [Counter,setCounter] = useState(15);

  // let Counter = 15;

  const addValue = ()=>{
    // console.log("clicked ",{Counter});
    Counter = Counter+1;
    // setCounter(Counter + 1); Or
    setCounter(Counter);
    // console.log("clicked ",{Counter});
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
