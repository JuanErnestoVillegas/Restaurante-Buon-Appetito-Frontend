import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../config/axiosClient";
export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState(null);
    const [password, setPassword] = useState(null); 
    const navigate = useNavigate();    
    
    const login = async (values)=>{
      try {
        const {data} = await axiosClient.post('/users/login',values);
        setToken(data.token);
        setAuth(true);
        localStorage.setItem('token', data.token);
        } catch (error) {
        console.log(error);
        setAuth(false);
        if(localStorage.getItem('token')){
          localStorage.removeItem('token');
        }
      }
    }


    const getAuth = async()=>{
      const token = localStorage.getItem('token');
      if(token){
        axiosClient.defaults.headers.common['x-auth-token'] = token;
      }else{
        delete axiosClient.defaults.headers.common['x-auth-token']
      }
      try {
        const response = await axiosClient.get('/users/auth');
        setUser(response.data.user); 
        localStorage.setItem('user', response.data.user.name);
        setAuth(true);
        console.log(response.data.user.name); 
      } catch (error) {
        console.log(error);
        logout();
      }      
    }

    // const getPassword = async(values)=>{
    const getPassword = async(values)=>{
      try {
         const response = await axiosClient.get('/users/',values);
        // const response = await axiosClient.get("/users/", values);   FUNCA
        // const response = await axiosClient.get("/user");
        // const {response} = await axiosClient.get("/user/:email");
        console.log(response.data);
        // setPassword(response.data.user.password); 
      } catch (error) {
        console.log(error);
      }      
    }

    const logout = ()=>{
      setAuth(false);
      setToken(null);
      setUser(null);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/');
    }
 
    return (
      <UserContext.Provider value={{
          user,          
          setUser,
          login,
          auth,
          getAuth,
          logout,          
          getPassword
        }}>
        {children}
      </UserContext.Provider>
    );
  }
  
  export default UserProvider;


