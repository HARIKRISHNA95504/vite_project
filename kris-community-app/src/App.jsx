import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './views/user/Register'
import Login from './views/user/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Register/>
      {/* <Login/> */}
    </>
  )
}

export default App
