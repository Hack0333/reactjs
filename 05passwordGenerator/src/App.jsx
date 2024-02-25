import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length,setLenght] = useState(9);
  const [number,setNumber] = useState(false);
  const [character,setCharacter] = useState(false);
  const [password,setPassword] = useState("");
  const passwordRef = useRef(null);
  
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str +=  "0123456789";
    if(character) str += "!#$%&()*?><}{[]";

    for (let i = 1; i <= length; i++) {
      let charIn = Math.floor(Math.random() * str.length +1 )
      pass += str.charAt(charIn);
    }
    setPassword(pass); 
  },[length,number,character,setPassword]);

  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select() // ? marks indicate optionally select if it empty or value is there or not
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password);
  }
  ,[password])

  
  useEffect(()=>{
    passwordGenerator();
  },[number,character,length,passwordGenerator])

    return(
      <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            />
            <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLenght(e.target.value)}
          />
           <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={number}
          onChange={() => setNumber(prev => !prev)}
          />
           <label htmlFor="number">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={character}
          onChange={() => setCharacter(prev => !prev)}
          />
           <label htmlFor="character">Character</label>
        </div>
        </div>
      </div>
      </>
    )
}

export default App
