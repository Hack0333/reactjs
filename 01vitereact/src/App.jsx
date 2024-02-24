import Deepak from './Deepak'
function App() {
  const username = "Deepak Sharma"
  // the {} used is called evluated expression means the u write only the final outcome
  return (
    <> 
     <Deepak />
     <h6>more than one element | {username}</h6> // user name will be printed here
    </>
   
  )
}

export default App
