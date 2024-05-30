import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo/logo.png'
import '../assets/css/header.css'
import { AiOutlineClose } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const location = useLocation();

    const handleCloseOffcanvas = () => {
        const offcanvas = document.getElementById('offcanvasWithBothOptions');
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
        bsOffcanvas.hide();
    };

    if (location.pathname !== "/404") {

        return (
            <nav className='sticky-top'>
                <div className='container py-4'>
                    <div className='d-flex justify-content-center justify-content-between align-items-center'>
                        <div>
                            <NavLink to='/'><img src={logo} className='img-fluid' alt="logo" /></NavLink>
                        </div>
                        <div className='d-none d-lg-block d-xl-block d-xxl-block pt-2'>
                            <ul className='d-flex xl_menu'>
                                <li>
                                    <NavLink to="/haqqımızda" className='nav-link'>Haqqımızda</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/xidmetlerimiz" className='nav-link'>Xidmətlərimiz</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/layihelerimiz" className='nav-link'>Layihələrimiz</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/bloq" className='nav-link'>Bloq</NavLink>
                                </li>
                                <li>
                                    <NavLink to="https://www.youtube.com/@FortunaMediaOfficial" className='nav-link' target='_blank'>Fortuna TV</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/əlaqə" className='nav-link'>Əlaqə</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='d-inline-block d-lg-none d-xl-none d-xxl-none d-xl-none sm_menu'>

                            <IoMenu data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" className='nav-menu' />

                            <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div className="offcanvas-header">
                                    <AiOutlineClose data-bs-dismiss="offcanvas" aria-label="Close" className='nav-close' />
                                </div>
                                <div className="offcanvas-body">
                                    <ul>
                                        <li>
                                            <NavLink to="/haqqımızda" className='nav-link' onClick={handleCloseOffcanvas}>Haqqımızda</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/xidmetlerimiz" className='nav-link' onClick={handleCloseOffcanvas}>Xidmətlərimiz</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/layihelerimiz" className='nav-link' onClick={handleCloseOffcanvas}>Layihələrimiz</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/bloq" className='nav-link' onClick={handleCloseOffcanvas}>Bloq</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="https://www.youtube.com/@FortunaMediaOfficial" className='nav-link' target='_blank' onClick={handleCloseOffcanvas}>Fortuna TV</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/əlaqə" className='nav-link' onClick={handleCloseOffcanvas}>Əlaqə</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        )
    } else {
        return null;
    }

}

export default Header

