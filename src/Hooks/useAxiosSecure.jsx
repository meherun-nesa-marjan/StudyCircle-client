import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
const axiosInstance = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials: true,


})
const useAxiosSecure = () => {
    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() =>{
        axiosInstance.interceptors.response.use(response =>{
            return response;
        } , error =>{
            if(error.status === 401 || error.status === 403 ){
                signOutUser()
                
                .then(() =>{
                    navigate('/SignIn')

                })
                .catch(error => console.log(error));

            }
            return Promise.reject(error);
        })
    },[])
   return axiosInstance;
};

export default useAxiosSecure;