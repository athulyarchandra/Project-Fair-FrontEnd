import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"


//registerAPI called by Auth component when user click registe btn
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

//loginAPI called by Auth component when user click login btn
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

//addProjectAPI called by Add component when user click add button add-project
export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}

//getHomeProjectAPI called by Home componetn when page loaded in browser (useEffect)
export const getHomeProjectAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-project`,{})
}

//allProjectAPI called by Project component when page loaded in browser (useEffct)
export const allProjectAPI = async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-project?search=${searchKey}`,{},reqHeader)
}

//userProjectAPI called by view component when page loaded in browser (useEffct) 
export const userProjectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-project`,{},reqHeader)
}

//updateProjectAPI called by edit component when when user click update button  projects/672c77d98e67974867e5744d/edit
export const updateProjectAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/projects/${id}/edit`,reqBody,reqHeader)
}

//userProjectRemoveAPI called by Project component when delet button clicked 
export const userProjectRemoveAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/projects/${id}/remove`,{},reqHeader)
}

//updateUserAPI called by profile component when  user click update button  edit-user
export const updateUserAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-user`,reqBody,reqHeader)
}