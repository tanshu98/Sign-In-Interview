// import React from 'react'
// import SignupImage from '../Images/'

import { useDispatch, useSelector } from "react-redux"
import { loginHandler } from "../redux/LoginSlice";
import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Login = () => {
    const loginData = useSelector(state => state.login);
    const dispatch = useDispatch()
    console.log(loginData);
    
    const loginChange = (e, item)=> {
        // [item] =  e.target.value
        dispatch((e)=> loginHandler(item))
    }
    
  return (
    <div>
        <div className='image-container'>
            {/* <img src='.' /> */}
        </div>
        <div>
            <h1>Login </h1>
            <form style={{display: 'flex', padding: "10px", flexDirection: 'column', gap:20}}>
                <div style={{padding: "10px", margin: "10px"}}>
                <label>Email</label>
                <input type="text" value={loginData.loginEmail}  />
                </div>
                <div>
                <label>Contact</label>
                <input type="number" value={loginData.loginContact}  />
                </div>
                {/* <button >Login</button> */}
                <Button variant="contained">Login</Button>
            </form>
        </div>
    </div>
  )
}

export default Login;