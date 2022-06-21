import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const ServeyItem = () => {
   
    axios({
        method:'get',
        url:'http://127.0.0.1:8000/api/getAllServeys',
        headers:{Authorization:`Bearer ${localStorage.getItem('access_token')}`,
    }}).then(function(response){
        var servs=response.data["serveys"];
        for (let i=0;i<servs.length;i++){
            var sname=servs[i]['title']
            var sid=servs[i]['id']
            var sdesc=servs[i]['description']
            // const container=document.createElement("div")
            // container.classList.add("cardContainer");
            // const div=document.createElement("div");
            // const title=document.createElement("h2");
            // const p=document.createElement("p");
            // div.classList.add("card")
            // div.appendChild(title);
            // div.appendChild(p);
            // container.appendChild(div);
        }

        return(
                <div className='serv'>
                    
                    <h2>{sname}</h2>
                    <p>{sdesc}</p>
                    
                </div>
            )})
}

export default ServeyItem