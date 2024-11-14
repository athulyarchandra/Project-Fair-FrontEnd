import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'
import { useContext } from 'react'
import { tokenAuthContext } from './contexts/AuthContextAPI'


function App() {
  const {isAuthrorised,setIsAuthrorised} = useContext(tokenAuthContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={isAuthrorised? <Projects/> : <Navigate to={'/login'}/>}/>
        <Route path='/dashboard' element={isAuthrorised? <Dashboard/> : <Navigate to={'/login'}/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
