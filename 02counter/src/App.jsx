import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;
  const addValue = () =>{
    console.log("add value :", counter);
    // counter = counter+ 1;
    if(counter<20){
       setCounter(counter + 1);
    }
  }
  
  const decreaseValue = () =>{
    if(counter>0){
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={decreaseValue}
      >remove value</button>
    </>
  )
}

export default App
