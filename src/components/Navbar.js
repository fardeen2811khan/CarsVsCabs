import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-left"><Link to ='/'>CARSvsCABS</Link></div>
        <div className="navbar-right">
            <div className="nav-item"><Link to ='/main'>All Cars</Link></div>
            <div className="nav-item"><Link to ='/contributors'>Contributors</Link></div>
            <div className="nav-item"><Link to ='/information'>Read Me</Link></div>
        </div>
    </div>
  )
}
