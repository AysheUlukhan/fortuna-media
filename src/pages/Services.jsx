import React, { useContext } from 'react';
import '../assets/css/services.css';
import { ApiContext } from '../context/ApiContext';
import { Link, NavLink } from 'react-router-dom';

const Services = () => {
  const { services } = useContext(ApiContext); 

  return (
    <div className='fm-service'>
      <section className='fm-service-page mb-5 py-5'>
        <div className='container py-5'>
          <div className='fm-service-hero-content col-lg-6 mb-4 mb-lg-0'>
            <h2>Xidmətlərimiz</h2>
            <p>Biz işinizin tələblərinə cavab vermək üçün dizayn və brendinq həlləri ilə başlayaraq təsirli rəqəmsal marketinq, PR&media, TV&Radio xidmətləri təklif edən dinamik bir şirkətik.</p>
          </div>
          <div className='text-center'>
            <Link to='/contact'>Müraciət et</Link>
          </div>
        </div>
      </section>

      <section className='fm-service-card'>
        <div className="container px-4 py-5">
          <div className="row row-gap-5 align-items-center m-auto g-5 py-5">
            {services.map((item, index) => (
              <div key={index} className={`row row-gap-5 align-items-center mb-4 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="col-md-6">
                  <h5 className='pb-4'>{item.service_title}</h5>
                  <p>{item.description}</p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <NavLink to={`/servicesDetail/${item.id}`}>Daha çox oxu</NavLink> 
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <img src={item.image} className="img-fluid w-100" alt={item.service_title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
