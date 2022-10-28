import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import '../styles/Empty.css'
import { FaCar } from 'react-icons/fa'
import {  BiTaxi } from 'react-icons/bi'
import {SlMagnifier} from 'react-icons/sl'

export default function Empty() {
  return (<>
  
    <Navbar />
    <h1 className='top'>In a confusion between buying a car or Uber forever ?</h1>

    <div className="cars-vs"><FaCar /> VS <BiTaxi style={{color:'rgb(227, 227, 19)'}} /></div>
    
    <h1>We're here to help</h1>
    <h1 className='h1-button'><Link to='/main'>Check ME<SlMagnifier /></Link></h1>
    </>
  )
}
