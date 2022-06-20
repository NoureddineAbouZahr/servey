import { useState } from "react"
import Loginform from './components/Loginform';
import axios from 'axios'
import{BrowserRouter,Route,useNavigate}from 'react-router-dom'

import Adminserveys from "./components/Adminserveys";








function App() {
  const [user,setUser]=useState({email:""});
const [error,setError]=useState("");

const Login=details=>{
  console.log(details);
}

const Logout=()=>{
  console.log('logged out');
}


  return (
    
    <div className="App ">
      {(user.email !="")?(
        <div className='welcome'>

          <h2>Welcome, <span>{user.email}</span></h2>
          <button>Log out</button>
        </div>):(
          <Loginform error={error} onLogin={Login}/>
          
          )}
          <Adminserveys />
    </div>
  );
}

export default App;
