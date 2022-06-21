
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch,Link ,useHistory,useNavigate} from 'react-router-dom'
import axios from 'axios'
import React from 'react'

import AdminPage from './AdminPage';


const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const onSubmit=(e)=>{
            
        if(!email || !password){
            alert('input data')
            return
        }
        e.preventDefault();


        let data =new FormData();
        data.append("email",email)
        data.append("password",password)
        console.log(data)
        console.log('email:',email);
        setEmail('')
        setPassword('')
        
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/login",
            data,
            
    
        }).then(function (response) {
            localStorage.clear();
            localStorage.setItem('access_token',response.data['access_token']);
            window.location="/admin"
            
            
        }).catch(function(error){
            alert(error)

        })
            

        
    }
  return (
    <form  action='' className='login-form container' onSubmit={onSubmit}>

        <div className="form-inner">
            <h2>Log In</h2>
            {/* Error! */}
            <div className="form-control">
                <label htmlFor="email">Email: </label>
                <input type="text" name='email' id='email' 
                placeholder='Email'
                onChange={e=>setEmail(e.target.value)}  />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' id='password' 
                placeholder='Password'
                onChange={e=>setPassword(e.target.value)}  />
            </div>
            <input type="submit" value=" Log In"  className="btn btn-block"/>
        </div>
    </form>
  )
}

export default Login