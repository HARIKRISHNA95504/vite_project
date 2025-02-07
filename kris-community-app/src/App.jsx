import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import EmployeeLayout  from './components/layouts/EmployeeLayout'
import Register from './pages/employees/auth/EmployeeRegister'
import EmployeeLogin from './pages/employees/auth/EmployeeLogin';
import AdminLogin from './pages/admin/auth/AdminLogin'
import DashboardMain from './pages/dashboard/dashboardMain'
import ApplyForLeave from './pages/dashboard/applyForLeave'
import AnnualLeave from './pages/dashboard/AnnualLeave';
import SickLeave from './pages/dashboard/SickLeave';
import LeaveRecall from './pages/dashboard/LeaveRecall';
import AdminDashboard from './pages/admin/Dashboard/AdminDashboard'
import DashBoard from './pages/admin/Dashboard/dashboard'
import LeaveManagement from './pages/admin/Dashboard/leavemanagement/LeaveManagement';
import AdminLeaveRecall from './pages/admin/Dashboard/leavemanagement/LeaveRecall'
import AdminLeaveHistory from './pages/admin/Dashboard/leavemanagement/LeaveHistory';
import AdminLeaveSettings from './pages/admin/Dashboard/leavemanagement/LeaveSettings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<EmployeeLogin/>}></Route>
        <Route path='/admin-login' element={<AdminLogin/>}></Route>
        <Route path='/dashboard-main' element={<DashboardMain/>}></Route>
        <Route path='/applyfor-leave' element={<ApplyForLeave/>}></Route>
        <Route path='/annual-leave' element={<AnnualLeave/>}></Route>
        <Route path='/sickleave' element={<SickLeave/>}></Route>
        <Route path='/leaverecall' element={<LeaveRecall/>}></Route>
        <Route path='/' element={<AdminDashboard/>}>
          <Route path='/dashboard' element={<DashBoard/>}></Route>
          <Route path='/leave-management' element={<LeaveManagement/>}>
            <Route path='admin-leaverecall' element={<AdminLeaveRecall/>}></Route>
            <Route path='admin-leavehistory' element={<AdminLeaveHistory/>}></Route>
            <Route path='admin-leavesettings' element={<AdminLeaveSettings/>}></Route>
          </Route>
        </Route>
        {/* <Route path='/leave-management' element={<LeaveManagement/>}></Route> */}
      </Routes>
      {/* <Register/> */}
      {/* <Login/> */}
    </>
  )
}

export default App
