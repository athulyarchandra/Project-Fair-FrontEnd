import React, { useContext } from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/AuthContextAPI'

const Header = ({insideDashboard}) => {
  const {isAuthrorised,setIsAuthrorised} = useContext(tokenAuthContext)

  const navigte = useNavigate()

  const logout = ()=>{
    sessionStorage.clear()
    setIsAuthrorised(false)
    navigte("/")
  }
  return (
    <Navbar style={{zIndex:1}} className="border shadow rounded position-fixed w-100">
        <Container>
       <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand style={{color:'white'}} className='fw-bolder'>
            <i className='fa-brands fa-docker'></i>Project Fair
            </Navbar.Brand>
       </Link>
       {
        insideDashboard &&
        <div className="ms-auto">
          <button onClick={logout} className="btn btn-link">Logout <i className="fa-solid fa-right-from-bracket ms-1"></i></button>
        </div>
       }
        </Container>
      </Navbar>
  
  )
}

export default Header