import React, { useContext } from 'react';
import footer_logo from '../assets/images/logo/logo.png';
import '../assets/css/footer.css'
import facebook from '../assets/images/icons/facebook.png'
import instagram from '../assets/images/icons/Instagram.png'
import whatsapp from '../assets/images/icons/whatsapp.png'
import { Link, useLocation } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';

const Footer = () => {
  const location = useLocation();
  const  {contact_info } = useContext(ApiContext);

  if (location.pathname !== "/404") {
    
    return (
      <footer className='mt-5 border-top'>
        <div className='container '>
          <div className='d-flex flex-column'>
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <img src={footer_logo} alt="footerLogo" className='d-block mx-lg-auto img-fluid pt-3' />
              </div>
              <div className='d-flex gap-2'>
              <Link to={contact_info[0]?.facebook} target="_black"><img src={facebook} alt="facebook" className='d-block mx-lg-auto img-fluid icons' /></Link>
              <Link to={contact_info[0]?.instagram} target="_black"><img src={instagram} alt="instagram" className='d-block mx-lg-auto img-fluid icons' /></Link>
                
              <a href={`tel:${contact_info[0]?.phone[0]?.phone}`}  target="_black"><img src={whatsapp} alt="whatsapp" className='d-block mx-lg-auto img-fluid icons' /></a>
                
              </div>
            </div>
            <div className='d-flex justify-content-end'>
              <p><span>Fortuna Media</span> © 2024. All rights reserved.</p>
            </div>
          </div>
  
        </div>
      </footer>
    )
  }else{
    return null;
  }
}

export default Footer