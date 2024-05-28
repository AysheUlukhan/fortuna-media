import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/notfound.css'

const NotFound = () => {
  return (
    <div className='fm_not_found'>
      <span className='mb-0'>404</span>
      <p className='mb-0'>Error: 404 page not found</p>
      <Link to="/">BACK TO HOME</Link>
    </div>
  )
}

export default NotFound