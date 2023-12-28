import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"
function App() {
  const [result, setResult] = useState("")
  return (
    <>
      <div>
        <h1>MERN STACK</h1>
        <button onClick={async()=>{
          const response = await fetch(`${URL}/ping`)
          const data = await response.json()
          setResult(data);
        }}>BUTTON</button>
        <pre>
          {JSON.stringify(result,null,2)}
        </pre>
      </div>
    </>
  )
}

export default App
