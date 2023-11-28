import  axios  from "axios";
  
const baseURL = "http://localhost:3000/api/"


const Axios = axios.create({
    baseURL,
    headers : {
        "Content-Type" : "application/json"
    }
})

Axios.interceptors.response.use(
    (response) => {
        return response
    } ,
    (error) => {
        return error
    }
)

export default Axios