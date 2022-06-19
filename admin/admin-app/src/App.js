import { useState } from "react"
import Loginform from './components/Loginform';
import axios from 'axios'



const api=axi




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
    <div className="App">
      {(user.email !="")?(
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Log out</button>
        </div>):(
          <Loginform Login={Login} error={error}/>
        
      )}
    </div>
  );
}

export default App;
