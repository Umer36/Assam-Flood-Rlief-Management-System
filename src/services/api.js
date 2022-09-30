import axios from "axios";
import { getToken } from "../auth";


import { privateAxios } from "../auth/PrivateAxios";


//const test ="http://localhost:8081";



const API_URL = " http://afmsapiapp-env.eba-ssyuxjp8.ap-south-1.elasticbeanstalk.com/api/v1";
const API = " http://afmsapiapp-env.eba-ssyuxjp8.ap-south-1.elasticbeanstalk.com/api/v1/auth/register/victim";
const API2 = "http://afmsapiapp-env.eba-ssyuxjp8.ap-south-1.elasticbeanstalk.com/api/v1/auth/login/victim";
const API3 = "http://afmsapiapp-env.eba-ssyuxjp8.ap-south-1.elasticbeanstalk.com/api/v1/auth/register/orgs";
const API4 = "http://afmsapiapp-env.eba-ssyuxjp8.ap-south-1.elasticbeanstalk.com/api/v1/auth/register/volunteer";
const REQST = "http://afmsapiapp-env.eba-ssyuxjp8.ap-south-1.elasticbeanstalk.com/api/v1/rescue/request";
const REQST1 = "http://127.0.0.1:8180/api/v1/foodmedical/request";


export const addVictimsApi = (victim) =>{

    try{
        return axios.post(API,victim).then((res)=>res.data);
    }catch(error){
        console.log("Error while calling addvictim api", error.messege);
    }
}

// export const addVictimsApi = async (victim) =>{
//     try{
//         return await axios.post(API , victim );
//     }catch(error){
//         console.log("Error while calling addVictim api" , error.messege );
//     }
// }  


export const addOrganizationNgoApi = async (org) =>{
    try{
        return await axios.post(API3, org );
    }catch(error){
        console.log("Error while calling addOrganization api" , error.messege );
    }
} 



export const addVolunteerApi = async (volunteer) =>{
    try{
        return await axios.post(API4 , volunteer );
    }catch(error){
        console.log("Error while calling addVolunteer api" , error.messege );
    }
} 

export const getVictimsApi = async (id) => {
    id= id  || "";
    try{
        return await axios.get(`${API_URL}/victims/${id}`);
    }catch(error){
        console.log("Error while calling getVictims api ", error.messege);
    }
}

export const getOrganizationApi = async () => {
    try{
        return await axios.get("http://afmsapiapp-env.eba-ssyuxjp8.ap-south-1.elasticbeanstalk.com/ngos");
    }catch(error){
        console.log("Error while calling getOrganization api ", error.messege);
    }
}

export const getVolunteerApi = async () => {
    try{
        return await axios.get("http://afmsapiapp-env.eba-ssyuxjp8.ap-south-1.elasticbeanstalk.com/volunteer");
    }catch(error){
        console.log("Error while calling getVolunteer api ", error.messege);
    }
}



// { /*forlogincheck*/}
// export const getLoginApi = async (login)  =>{
//     try{
//         //localhost:9087/victims/
//         // return await axios.get(`${test}/victims/?vUserName=${e.loginUserName}&vPassword=${e.loginPassword}`);
//         return await axios.post(API2,login);
//     }catch(error){
//         console.log("Error while calling login api get",error.messege);
//     }
// }

export const getLoginApi = (login) =>{
    return axios.post(API2,login).then((res)=>res.data)
}




export const addRescueRequest = (inputs) =>{
        
            return axios
            .post(
                REQST, inputs).then((res)=> res.data)
                
      
    }  ;
    export const addRelief = (inputs) =>{
        
        return axios
        .post(
            REQST1, inputs).then((res)=> res.data)
            
  
}  ;

// export const addRescueRequest =  (inputs) =>{
//         try{
//             return privateAxios.axios.post(`http://localhost:8180/api/v1/rescue/request` , inputs );
//         }catch(error){
//             console.log("Error while calling rescue request  api" , error.messege );
//         }
//     }  



export const Adddonator = async (data) => {
    try {
       return await axios.post(`http://localhost:8085/api/v1/donations`, data);
    }
    catch (error) {
       console.log("error with my side", error.message);
    }
 
 }