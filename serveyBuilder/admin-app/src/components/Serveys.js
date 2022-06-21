import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ServeyItem from './ServeyItem'
import ServeysList from './ServeysList'


const Serveys = () => {
  return (
    
      <div >
        <h1>Surveys</h1>
        <ServeysList />
        

        
        </div>
    
    
  )
}

export default Serveys