import { useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetail from './components/projects/ProjectDetail'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/project/:id' element={<ProjectDetail/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/create' element={<CreateProject/>}></Route>
    </Routes>
   </>
  )
}

export default App
