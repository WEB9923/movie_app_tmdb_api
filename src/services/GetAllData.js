import axios from "axios";
import {BASE_URL} from "./BASE_URL.js";
import {API_TOKEN} from "./API_TOKEN.js";

export const getAllData = async (route , listType ) => {
   try {
      const response = await axios.get(`${BASE_URL}/${route}/${listType}`,{
         params:{
            api_key: API_TOKEN
         }
      });
      return response.data;
   } catch (err) {
      throw new Error(err.response.data);
   }
}


