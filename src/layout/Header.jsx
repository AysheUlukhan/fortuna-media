// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import logo from '../assets/images/logo/logo.png'
// import '../assets/css/header.css'
// import { AiOutlineClose } from "react-icons/ai";
// import { IoMenu } from "react-icons/io5";


// const Header = () => {

//     return (
//         <nav className='sticky-top'>
//             <div className='container py-4'>
//                 <div className='d-flex justify-content-center justify-content-between align-items-center'>
//                     <div>
//                         <NavLink to='/'><img src={logo} className='img-fluid' alt="logo" /></NavLink>
//                     </div>
//                     <div className='d-none d-lg-block d-xl-block d-xxl-block pt-2'>
//                         <ul className='d-flex'>
//                             <li>
//                                 <NavLink to="/About" className='nav-link'>Haqqımızda</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/Services" className='nav-link'>Xidmətlərimiz</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/Portfolio" className='nav-link'>Portfelimiz</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/Blog" className='nav-link'>Bloq</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="https://www.youtube.com/@FortunaMediaOfficial" className='nav-link' target='_blank'>Fortuna TV</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/Contact" className='nav-link'>Əlaqə</NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className='d-inline-block d-lg-none d-xl-none d-xxl-none d-xl-none'>

//                         <IoMenu data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" className='nav-menu' />

//                         <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
//                             <div className="offcanvas-header">
//                                 <AiOutlineClose data-bs-dismiss="offcanvas" aria-label="Close" className='nav-close' />
//                             </div>
//                             <div className="offcanvas-body">
//                                 <ul>
//                                     <li>
//                                         <NavLink to="/About" className='nav-link'>Haqqımızda</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to="/Services" className='nav-link'>Xidmətlərimiz</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to="/Portfolio" className='nav-link'>Portfelimiz</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to="/Blog" className='nav-link'>Bloq</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to="/" className='nav-link'>Fortuna TV</NavLink>
//                                     </li>
//                                     <li>
//                                         <NavLink to="/Contact" className='nav-link'>Əlaqə</NavLink>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </nav>
//     )
// }

// export default Header




import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';
import '../assets/css/header.css';
import { AiOutlineClose } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    };
    if (location.pathname !== "/404") {
        return (
            <nav className='sticky-top'>
                <div className='container py-4'>
                    <div className='d-flex justify-content-center justify-content-between align-items-center'>
                        <div>
                            <NavLink to='/'>
                                <img src={logo} className='img-fluid' alt="logo" />
                            </NavLink>
                        </div>
                        <div className='d-none d-lg-block d-xl-block d-xxl-block pt-2'>
                            <ul className='d-flex'>
                                <li>
                                    <NavLink to="/About" className='nav-link'>Haqqımızda</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Services" className='nav-link'>Xidmətlərimiz</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Portfolio" className='nav-link'>Portfelimiz</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Blog" className='nav-link'>Bloq</NavLink>
                                </li>
                                <li>
                                    <NavLink to="https://www.youtube.com/@FortunaMediaOfficial" className='nav-link' target='_blank'>Fortuna TV</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Contact" className='nav-link'>Əlaqə</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='d-inline-block d-lg-none d-xl-none d-xxl-none d-xl-none'>
                            <IoMenu onClick={() => setOpen(prevState => !prevState)} className={`nav-menu ${open ? 'open' : ''}`} />
                            {open && (
                                <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                    <div className="offcanvas-header">
                                        <AiOutlineClose data-bs-dismiss="offcanvas" aria-label="Close" className='nav-close' onClick={closeMenu} />
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul>
                                            <li>
                                                <NavLink to="/About" className='nav-link' onClick={closeMenu}>Haqqımızda</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Services" className='nav-link' onClick={closeMenu}>Xidmətlərimiz</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Portfolio" className='nav-link' onClick={closeMenu}>Portfelimiz</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Blog" className='nav-link' onClick={closeMenu}>Bloq</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://www.youtube.com/@FortunaMediaOfficial" className='nav-link' target='_blank'>Fortuna TV</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/Contact" className='nav-link' onClick={closeMenu}>Əlaqə</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        );

    }else{
        return null;
      }
};

export default Header;
