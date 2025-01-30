import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './views/user/Register'
import Login from './views/user/Login';
import AdminLogin from './views/admin/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/adminlogin' element={<AdminLogin/>}></Route>
      </Routes>
      {/* <Register/> */}
      {/* <Login/> */}
    </>
  )
}

export default App
