import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Register from './pages/employees/auth/EmployeeRegister'
import Login from './pages/employees/auth/EmployeeLogin';
import AdminLogin from './pages/admin/auth/AdminLogin'
import DashboardMain from './pages/dashboard/dashboardMain'
import ApplyForLeave from './pages/dashboard/applyForLeave'
import AnnualLeave from './pages/dashboard/AnnualLeave';
import SickLeave from './pages/dashboard/SickLeave';
import LeaveRecall from './pages/dashboard/LeaveRecall';
import AdminDashboard from './pages/admin/AdminDashboard'
import LeaveManagement from './pages/admin/LeaveManagement';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/admin-login' element={<AdminLogin/>}></Route>
        <Route path='/dashboard-main' element={<DashboardMain/>}></Route>
        <Route path='/applyfor-leave' element={<ApplyForLeave/>}></Route>
        <Route path='/annual-leave' element={<AnnualLeave/>}></Route>
        <Route path='/sickleave' element={<SickLeave/>}></Route>
        <Route path='/leaverecall' element={<LeaveRecall/>}></Route>
        <Route path='/admin-dashboard' element={<AdminDashboard/>}></Route>
        <Route path='/leave-management' element={<LeaveManagement/>}></Route>
      </Routes>
      {/* <Register/> */}
      {/* <Login/> */}
    </>
  )
}

export default App
