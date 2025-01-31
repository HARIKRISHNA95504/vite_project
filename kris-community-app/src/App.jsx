import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Register from './pages/employees/auth/EmployeeRegister'
import Login from './pages/employees/auth/EmployeeLogin';
import AdminLogin from './pages/admin/auth/AdminLogin'
import DashboardMain from './pages/dashboard/dashboardMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/admin-login' element={<AdminLogin/>}></Route>
        <Route path='/dashboard-main' element={<DashboardMain/>}></Route>
      </Routes>
      {/* <Register/> */}
      {/* <Login/> */}
    </>
  )
}

export default App
