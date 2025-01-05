import axios from "axios";
import { ENV_VARS } from './../config/envVars.js';

//the benefit of creating this function separatly is becuse 
//we dont really need to create these "optiions" object at all end points 
//if we want to fetch data from popular movies tu hamin differeent optiions ka object
//use karn aha or ager latest movies kiapi open karon gi tu uski options alga hogi that why 
//humna ya overalla aik function bana diya ha
export const fetchFromTMDB = async(url)=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer '+ENV_VARS.TMDB_API_KEY
        }
      };
     
    //   const res = await fetch("url goes here");
    //   const data = await res.json();
    //   return data;
    //the above commented work can be done like this
    const response=await axios.get(url,options)
    if(response.status !== 200)
        {
            throw new Error("falied to fetch data from TMDB" + response.statusText);
        }  
    
    return response.data;
}