import React, { useState, useEffect, useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Addimg from '../assets/addimg.png'
import SERVER_URL from '../services/serverUrl'
import { updateProjectAPI } from '../services/allAPI'
import { editProjectResponseContext } from '../contexts/ContexAPI'


const Edit = ({project}) => {
  const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)
  const [preview, setPreview] = useState("")
  const [imageFileStatus, setimageFileStatus] = useState(false)
  const [projectDetails, setProjectDetails] = useState({
   id:project._id, title: project.title, language: project.language, overview: project.overview, github: project.github, website: project.website, projectImg: ""
  })
  console.log(projectDetails);
  useEffect(() => {
    if (projectDetails.projectImg.type == "image/png" || projectDetails.projectImg.type == "image/jpg" || projectDetails.projectImg.type == "image/jpeg") {
      //valid image
      setimageFileStatus(true)
      setPreview(URL.createObjectURL(projectDetails.projectImg))
    } else {
      //invalid image
      setimageFileStatus(false)
      setPreview("")
      setProjectDetails({ ...projectDetails, projectImg: "" })
    }
  }, [projectDetails.projectImg])
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProjectDetails({
        id:project._id, title: project.title, language: project.language, overview: project.overview, github: project.github, website: project.website, projectImg: ""
    })
  }
  const handleShow = () => {
    setShow(true)
    setProjectDetails({
      id:project._id, title: project.title, language: project.language, overview: project.overview, github: project.github, website: project.website, projectImg: ""
  })
}

const handleUpdateProject = async ()=>{
  const {id,title,language,overview,github,website,projectImg} = projectDetails
  if(title && language && overview && github && website){
    //api call - put (id,updateDetails)
    const reqBody = new FormData()
    reqBody.append("title", title)
    reqBody.append("language", language)
    reqBody.append("overview", overview)
    reqBody.append("github", github)
    reqBody.append("website", website)
    preview? reqBody.append("projectImg", projectImg) : reqBody.append("projectImg", project.projectImg)
    const token = sessionStorage.getItem("token")
    if(token){
      //api call
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      } 
      try {
        const result = await updateProjectAPI(id,reqBody,reqHeader)
        if(result.status==200){
          alert("Project update successfuly")
          handleClose()
          setEditProjectResponse(result)
        }
      } catch (err) {
        console.log(err);        
      }
    }
  }else{
    alert("Please fill the form completely!!")
  }
}
 

  return (
    <>
      <button onClick={handleShow} className="btn"><i className='fa-solid fa-edit'></i></button>
      <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Project Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input onChange={e => setProjectDetails({ ...projectDetails, projectImg: e.target.files[0] })} type="file" style={{ display: 'none' }} />
                <img height={'200px'} className='img-fluid' src={preview ? preview : `${SERVER_URL}/uploads/${project.projectImg}`} alt="" />
              </label>
              {!imageFileStatus &&
                <div className="text-warning fw-bolder my-2">*Upload only the following file type (jpeg,jpg,png) here!!!</div>
              }
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input value={projectDetails.title} onChange={e => setProjectDetails({ ...projectDetails, title: e.target.value })} placeholder='Project Title' type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <input value={projectDetails.language} onChange={e => setProjectDetails({ ...projectDetails, language: e.target.value })} placeholder='Languages used in Project' type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <input value={projectDetails.overview} onChange={e => setProjectDetails({ ...projectDetails, overview: e.target.value })} placeholder='Project Overview' type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <input value={projectDetails.github} onChange={e => setProjectDetails({ ...projectDetails, github: e.target.value })} placeholder='Project Github Link' type="text" className="form-control" />
              </div>
              <div className="mb-2">
                <input value={projectDetails.website} onChange={e => setProjectDetails({ ...projectDetails, website: e.target.value })} placeholder='Project Website Link' type="text" className="form-control" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdateProject} variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit