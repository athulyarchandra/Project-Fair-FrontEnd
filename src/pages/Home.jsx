import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landingPage from '../assets/landingPage.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { getHomeProjectAPI } from '../services/allAPI'


const Home = () => {

  const [allHomeProjects, setAllHomeProjects] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAllHomeProjects()
  }, [])

  const getAllHomeProjects = async () => {
    try {
      const result = await getHomeProjectAPI()
      if (result.status==200) {
        setAllHomeProjects(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }
  console.log(allHomeProjects);


  const handleprojects = () => {
    if (sessionStorage.getItem("token")) {
      navigate('/projects')
    } else {
      alert("Please login to get full acccess to our projects!!!")
    }
  }
  return (
    <>
      <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center rounded-shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontsize: '80px' }}><i className='fa-brands fa-docker'></i>Project Fair</h1>
              <p style={{ textAlign: 'justify' }}> One stop Destination for all Software Development Projects.Where User can add and manage their projects. As well as access all projects available in our website...What are you waiting for!!! </p>
              {
                sessionStorage.getItem("token") ?
                  <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECTS</Link>
                  :
                  <Link to={'/login'} className='btn btn-warning'>START TO EXPLORE</Link>
              }
            </div>
            <div className="col-lg-6">
              <img width={'600px'} className='img-fluid' src={landingPage} alt="landing" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <h1 className="mb-5">Explore Our Project</h1>
        <marquee behavior="" direction="">
          <div className="d-flex">
           {
            allHomeProjects?.map(project=>(
              <div key={project?._id} className="me-5">
              <ProjectCard displayData={project} />
            </div>
            )) 


           }
          </div>
        </marquee>
        <button onClick={handleprojects} className="btn btn-link mt-5">CLICK HERE TO VIEW MORE PROJECTS...</button>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex align-items-center justify-content-evenly mt-3 w-100">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-items-center flex-column"><img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-K-ZRGsHZeNw-Dq8b1-uiyWFvWF9PRxyWA&s" alt="no image" />Max Miller</Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center '>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                </div>
                <p style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet consectetur adipeniti iusto eveniet! Illo aut rerum sunt pers piciatisnecessi tatibus odio! Praesentium adipisci recusandae quidem?</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-items-center flex-column"><img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEqtqaKui0HMqeIsHdfdZBQw3W562oAbQ1A&s" alt="no image" />Emma</Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center '>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                </div>
                <p style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet consectetur adipeniti iusto eveniet! Illo aut rerum sunt pers piciatisnecessi tatibus odio! Praesentium adipisci recusandae quidem?</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-items-center flex-column"><img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTxrBqk3jhm1r8Dgv6xY9mo3bRu29WtAUf_A&s" alt="no image" />Agnes</Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center '>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                </div>
                <p style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet consectetur adipeniti iusto eveniet! Illo aut rerum sunt pers piciatisnecessi tatibus odio! Praesentium adipisci recusandae quidem?</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

    </>
  )
}

export default Home