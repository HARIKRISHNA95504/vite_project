import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

import AdminLayout from './components/layouts/AdminLayout'
import AdminLogin from './pages/admin/auth/AdminLogin'

import EmployeeLayout  from './components/layouts/EmployeeLayout'
import EmployeeLogin from './pages/employees/auth/EmployeeLogin';
import EmployeeRegister from './pages/employees/auth/EmployeeRegister'

import DashboardMain from './pages/employees/dashboard/dashboardMain'
import ApplyForLeave from './pages/employees/dashboard/ApplyForLeave'
import AnnualLeave from './pages/employees/dashboard/AnnualLeave';
import SickLeave from './pages/employees/dashboard/SickLeave';
import LeaveRecall from './pages/employees/dashboard/LeaveRecall';
import AdminDashboard from './pages/admin/Dashboard/AdminDashboard'
import DashBoard from './pages/admin/Dashboard/dashboard'
import LeaveManagement from './pages/admin/Dashboard/leavemanagement/LeaveManagement';
import AdminLeaveRecall from './pages/admin/Dashboard/leavemanagement/LeaveRecall'
import AdminLeaveHistory from './pages/admin/Dashboard/leavemanagement/LeaveHistory';
import AdminLeaveSettings from './pages/admin/Dashboard/leavemanagement/LeaveSettings'
import AdminLeaveRecallModal from './components/AdminLeaveRecallModal'

import EmployeeManagement from './pages/admin/Dashboard/EmployeeManagement/EmployeeManagement'
import ViewProfile from './pages/admin/Dashboard/EmployeeManagement/EmployeeProfile'
import PersonalDetails from './pages/admin/Dashboard/EmployeeManagement/PersonalDetails'
import ContactDetails from './pages/admin/Dashboard/EmployeeManagement/ContactDetails'
import NextOfKinDetails from './pages/admin/Dashboard/EmployeeManagement/NextOfKinDetails'
import EducationQualifications from './pages/admin/Dashboard/EmployeeManagement/EducationQualifications'
import GuarantorDetails from './pages/admin/Dashboard/EmployeeManagement/GuarantorDetails'
import FamilyDetails from './pages/admin/Dashboard/EmployeeManagement/FamilyDetails'
import FinancialDetails from './pages/admin/Dashboard/EmployeeManagement/FinancialDetails'

import PerformanceManagement from './pages/admin/Dashboard/PerformanceManagement/PerformanceManagement'
import TargetSetup from './pages/admin/Dashboard/PerformanceManagement/TargetSetup'
import Targets from './pages/admin/Dashboard/PerformanceManagement/Targets'
import Appraisals from './pages/admin/Dashboard/PerformanceManagement/Appraisals'
import Settings from './pages/admin/Dashboard/PerformanceManagement/Settings'
import Reports from './pages/admin/Dashboard/PerformanceManagement/Reports'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/employee' element={<EmployeeLayout/>}>
          <Route path='' element={<EmployeeLogin/>}></Route>
          <Route path='register' element={<EmployeeRegister/>}></Route>
          <Route path='dashboard-main' element={<DashboardMain/>}></Route>
        </Route>
        
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='' element={<AdminLogin/>}></Route>
        </Route>
        <Route path='/' element={<AdminDashboard/>}>
          <Route path='/dashboard' element={<DashBoard/>}></Route>
          <Route path='/leave-management' element={<LeaveManagement/>}>
            <Route path='admin-leaverecall' element={<AdminLeaveRecall/>}></Route>
            <Route path='admin-leavehistory' element={<AdminLeaveHistory/>}></Route>
            <Route path='admin-leavesettings' element={<AdminLeaveSettings/>}></Route>
          </Route>
          <Route path='/employee-management' element={<EmployeeManagement/>}></Route>
          <Route path='/viewprofile' element={<ViewProfile/>}>
            <Route path='personal-details' element={<PersonalDetails/>}></Route>
            <Route path='contact-details' element={<ContactDetails/>}></Route>
            <Route path='nextof-kindetails' element={<NextOfKinDetails/>}></Route>
            <Route path='education-qualifications' element={<EducationQualifications/>}></Route>
            <Route path='guarantor-details' element={<GuarantorDetails/>}></Route>
            <Route path='family-details' element={<FamilyDetails/>}></Route>
            <Route path='financial-details' element={<FinancialDetails/>}></Route>
          </Route>
          <Route path='/performance-management' element={<PerformanceManagement/>}>
            <Route path='target-setup' element={<TargetSetup/>}></Route>
            <Route path='targets' element={<Targets/>}></Route>
            <Route path='appraisals' element={<Appraisals/>}></Route>
            <Route path='settings' element={<Settings/>}></Route>
            <Route path='reports' element={<Reports/>}></Route>
          </Route>
        </Route>
        
        
        <Route path='/applyfor-leave' element={<ApplyForLeave/>}></Route>
        <Route path='/annual-leave' element={<AnnualLeave/>}></Route>
        <Route path='/sickleave' element={<SickLeave/>}></Route>
        <Route path='/leaverecall' element={<LeaveRecall/>}></Route>


        <Route path='/admin-leaverecall-modal'element={<AdminLeaveRecallModal/>}></Route>
        {/* <Route path='/leave-management' element={<LeaveManagement/>}></Route> */}
      </Routes>
      {/* <Register/> */}
      {/* <Login/> */}
    </>
  )
}

export default App
