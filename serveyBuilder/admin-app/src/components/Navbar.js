import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navContainer'>
        <nav className='navbar'>
                <ul className='ul'>
                    <li>
                        <Link to='/'>Serveys</Link>
                    </li>
                    <li>
                        <Link to='/Create'>Create Servey</Link>
                    </li>
                    <li>
                        <Link to = '/Res'>Responses</Link>
                    </li>

                </ul>
        </nav>
    </div>
  )
}

export default Navbar