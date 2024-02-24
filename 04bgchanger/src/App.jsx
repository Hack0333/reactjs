import { useState } from "react"


function App() {

  const [Color,setColor] = useState("pink");

  return (
    <div className=" w-full h-screen"
    style={{backgroundColor : Color}}
    >
      <div className=" flex flex-wrap justify-center fixed bottom-2 rounded-md text-center shadow-md gap-3 inset-x-1"
      style={{backgroundColor:"white"}}
      >
       <button className=" rounded-md text-center px-2 gap-2 my-1 text-white outline-none shadow-md"
       style={{backgroundColor:"red"}}
       onClick={()=> setColor("red")}
       >Red</button> 
       <button className=" rounded-md text-center px-2 gap-2 my-1 text-white outline-none shadow-md"
       style={{backgroundColor:"green"}}
       onClick={()=> setColor("green")}
       >Green</button> 
       <button className=" rounded-md text-center px-2 gap-2 my-1 text-white outline-none shadow-md"
       style={{backgroundColor:"skyblue"}}
       onClick={()=> setColor("skyblue")}
       >Skyblue</button> 
       <button className=" rounded-md text-center px-2 gap-2 my-1 text-white outline-none shadow-md"
       style={{backgroundColor:"olive"}}
       onClick={()=> setColor("olive")}
       >Olive</button> 
       <button className=" rounded-md text-center px-2 gap-2 my-1 text-white outline-none shadow-md"
       style={{backgroundColor:"purple"}}
       onClick={()=> setColor("purple")}
       >Purple</button> 
       <button className=" rounded-md text-center px-2 gap-2 my-1 text-white outline-none shadow-md"
       style={{backgroundColor:"grey"}}
       onClick={()=> setColor("grey")}
       >Grey</button> 
       <button className=" rounded-md text-center px-2 gap-2 my-1 text-white outline-none shadow-md"
       style={{backgroundColor:"orange"}}
       onClick={()=> setColor("orange")}
       >Orange</button> 
       <button className=" rounded-md text-center px-2 gap-2 my-1 text-white outline-none shadow-md"
       style={{backgroundColor:"blue"}}
       onClick={()=> setColor("blue")}
       >Blue</button> 
       <button className=" rounded-md text-center px-2 gap-2 my-1 text-white outline-none shadow-md"
       style={{backgroundColor:"yellow"}}
       onClick={()=> setColor("yellow")}
       >Yellow</button> 
      </div>
    </div>
  )
}

export default App
