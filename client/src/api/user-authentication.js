import { Mutation, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import createRefresh from 'react-auth-kit/createRefresh';

const API_URL = "http://localhost:7100/api";
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


export const useGet = () => {
  const { data, isLoading, isError, isLoadingError } = useQuery({
    queryKey: ["useTestData"],
    queryFn: async () => {
      try {
        await wait(2000);
        const response = await axios.get("https://httpbin.org/get");
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
  return { data, isLoading, isError };
};

export const usePost = () => {
  const { isPending,  mutateAsync,isSuccess } = useMutation({
    
    mutationFn: async ({ postData, url }) => {
      try {
        await wait(2000);
        const res = await axios.post(`${API_URL}/${url}`, postData);
        console.log(res)
        return res;
      } catch (error) {
        return error.response;
      }
    },
  });
  return { isPending,  mutateAsync,isSuccess };
};

export const refresh = createRefresh({
  interval: 10,
  refreshApiCallback: async (param) => {
     try {
       const response = await axios.post("/refresh", param, {
         headers: {
           'Authorization': `Bearer ${param.authToken}`
         }
       });
       console.log("Refreshing");
       return {
         isSuccess: true,
         newAuthToken: response.data.token,
         newAuthTokenExpireIn: 10,
         newRefreshTokenExpiresIn: 60
       };
     } catch (error) {
       console.error(error);
       return {
         isSuccess: false
       };
     }
  }
 });
 
