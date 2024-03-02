import { Mutation, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:7100/api";
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const SignInApi = async (sData) => {
  try {
    const { email, password } = sData;
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const rData = response.json();
    const message = rData.message;
    return message;
  } catch (err) {
    console.log(err);
  }
};

export const useTest = () => {
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
export const SignUpApi = () => {
  const { isPending,  mutateAsync,isSuccess } = useMutation({
    mutationFn: async (userData) => {
      try {
        await wait(2000);
        const res = await axios.post(`${API_URL}/createuser`, userData);

        return res;
      } catch (error) {
        return error.response;
      }
    },
  });
  return { isPending,  mutateAsync,isSuccess };
};
export const usePost = () => {
  const { isPending,  mutateAsync,isSuccess } = useMutation({
    
    mutationFn: async ({ postData, url }) => {
      try {
        await wait(2000);
        const res = await axios.post(`${API_URL}/${url}`, postData);

        return res;
      } catch (error) {
        return error.response;
      }
    },
  });
  return { isPending,  mutateAsync,isSuccess };
};