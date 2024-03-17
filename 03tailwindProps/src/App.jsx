import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    name: "Sneha",
    age: 21
  }
  let newArr = [1,2,3,4];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="Sneha" someObject={myObj} arr={newArr} />
      <Card username="Shivangi" />
    </>
  );
}

export default App
