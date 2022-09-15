import React from 'react'
// import {tenor.gif} from '../../assets'
import logo from '../../assets/tenor.gif'
import './Loader.scss'

const Loader = () => {
  return (
    <img src={logo} className='loader' alt="loading" />
  )
}

export default Loader