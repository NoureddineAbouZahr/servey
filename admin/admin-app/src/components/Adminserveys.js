
import React,{useState,Component} from 'react'
import{BrowserRouter,Route,useNavigate,Navigate}from 'react-router-dom'

import axios from 'axios';
const Adminserveys = () => {
   
    axios({
        method:'get',
        url:'http://127.0.0.1:8000/api/getserveyByadminId',
        headers:{Authorization:`Bearer ${localStorage.getItem('access_token')}`,
    }}).then(function(response){
        var servs=response.data["serveys"];
        for (let i=0;i<servs.length;i++){
            let sname=servs[i]['title']
            let sid=servs[i]['id']
            let sdesc=servs[i]['description']
            // const container=document.createElement("div")
            // container.classList.add("cardContainer");
            // const div=document.createElement("div");
            // const title=document.createElement("h2");
            // const p=document.createElement("p");
            // div.classList.add("card")
            // div.appendChild(title);
            // div.appendChild(p);
            // container.appendChild(div);
            return(
                <div className='serv'>
                    <h1>Serveys</h1>
                    <h2>{sname}</h2>
                    <p>{sdesc}</p>
                    
                </div>
            )
        }
      
    })

}

export default Adminserveys