import React,{useState,Component} from 'react'
import{BrowserRouter,Route,useNavigate,Navigate}from 'react-router-dom'

import axios from 'axios';

import Adminserveys from './Adminserveys'


    
    // const history=useHistory();
    // useEffect(()=>{
    //     if(localStorage.getItem('user-info')){
    //         history.push("/add")
    //     }
    // })
    

    const Loginform=({onLogin})=>{
        const [email,setEmail]=useState("");
        const [details,setDetails]=useState({email:'',password:''});
        const [password,setPassword]=useState("");

       
        
        const onSubmit=(e)=>{
            e.preventDefault()
            if(!email || !password){
                alert('input data')
                return
            }
            e.preventDefault();
            
            
            
            // let data =new FormData();
            // data.append("email",email);
            // data.append("password",password)
            // console.log(data);
         
            let data =new FormData();
            data.append("email",email)
            data.append("password",password)
            console.log(data)
            console.log('email:',email);
            onLogin({email,password})
            setEmail('')
            setPassword('')
            
       
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/login",
            data,
            
    
        }).then(function (response) {
            localStorage.clear();
            localStorage.setItem('access_token',response.data['access_token']);

            <Navigate to="/Adminserveys"  />
            

            // else if(response.data["role"]==1){
                
                
            // } 
        })
    }
    
    








//    async function login(){
//     console.warn(email,password)
//     let item={email,password}
//    let result= await fetch(" http://127.0.0.1:8000/api/login",{
//     method:'POST',
//     headers:{
//         "Content-Type":"application/json",
//         "Accept":'application/json'
//     },
//     body:JSON.stringify(item)
//    });
   
//    result=await result.json()
//    localStorage.setItem(JSON.stringify(result))
// //    history.push("/add")

//    }
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

export default Loginform;