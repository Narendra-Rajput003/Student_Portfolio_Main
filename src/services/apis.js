import axios from 'axios';


export const getPortfolio = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/user/portfolio/me');
    return response.data;
    console.log("response",response.data)

  } catch (error) {
    console.error("Error fetching portfolio:", error);
    throw error;
  }
};

export const getTimeline=async()=>{
  try {
    const response=await axios.get('http://localhost:3000/api/v1/timeline/getall')
    return response.data
  } catch (error) {
    console.error("Error fetching timeline:", error);
    throw error;
  }
}

export const getSkills=async()=>{
  try {
    const response=await axios.get('http://localhost:3000/api/v1/skill/getall')
    return response.data
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
}

export const getProjects=async()=>{
  try {
    const response=await axios.get('http://localhost:3000/api/v1/project/getall')
    return response.data
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

export const getApps=async()=>{
  try {
    const response=await axios.get('http://localhost:3000/api/v1/softwareapplication/getall')
    return response.data
    console.log("getApps",response.data)
  } catch (error) {
    console.error("Error fetching apps:", error);
    throw error;
  }
}

export const sendMessage = async (data) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/message/send', data);
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  } 
};

export const getSingleProject = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/project/get/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
}


