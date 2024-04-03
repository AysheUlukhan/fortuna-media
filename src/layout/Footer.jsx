import React from 'react';
import footer_logo from '../assets/images/logo/logo.png';
import '../assets/css/footer.css'
import facebook from '../assets/images/icons/facebook.png'
import instagram from '../assets/images/icons/Instagram.png'
import whatsapp from '../assets/images/icons/whatsapp.png'

const Footer = () => {
  let date = new Date();
  return (
    <footer className='mt-5 border-top'>
      <div className='container '>
        <div className='d-flex flex-column'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <img src={footer_logo} alt="footerLogo" className='d-block mx-lg-auto img-fluid pt-3' />
            </div>
            <div className='d-flex gap-2'>
              <img src={facebook} alt="facebook" className='d-block mx-lg-auto img-fluid icons' />
              <img src={instagram} alt="instagram" className='d-block mx-lg-auto img-fluid icons' />
              <img src={whatsapp} alt="whatsapp" className='d-block mx-lg-auto img-fluid icons' />
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <p><span>Fortuna Media</span> © {date.getFullYear()}. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer