import React, { useContext } from 'react'
import '../assets/css/homeservicecard.css'
import { NavLink } from 'react-router-dom'
import { ApiContext } from '../context/ApiContext'

const HomeServicesCard = () => {
    const { services } = useContext(ApiContext);
    return (
        <div className='pt-4 service-card'>
            <div className='container'>
                <div className="row row-gap-4">
                    {
                        services.map((item) => (
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 cards' key={item.id}>
                                <NavLink to={`/servicesDetail/${item.id}`}  className="banner-card " >
                                    <img src={item.image} alt="" className="d-block mx-lg-auto img-fluid banner-img" />
                                    <div className='banner-text'>
                                        <h6>{item.service_title}</h6>
                                    </div>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeServicesCard