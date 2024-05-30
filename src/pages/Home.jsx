import React, { useContext } from 'react';
import '../assets/css/home.css';
import HomeServicesCard from '../components/HomeServicesCard';
import { ApiContext } from '../context/ApiContext';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const { services } = useContext(ApiContext);

  console.log("Services:", services);

  const serviceTitles = services?.map(service => service.service_title) || [];
  const typeAnimationSequence = serviceTitles.flatMap(title => [title, 2000]);

  console.log("Type Animation Sequence:", typeAnimationSequence);

  return (
    <div className='home'>
      <section className="mb-5 hero-page">
        <div className='container py-5'>
          <div className='home-hero-content col-lg-6'>
            <h2>
              {typeAnimationSequence.length > 0 && (
                <TypeAnimation
                  sequence={typeAnimationSequence}
                  speed={50}
                  repeat={Infinity}
                />
              )}
            </h2>
            <h3>istə, biz edək</h3>
            <p>Biz işinizin tələblərinə cavab vermək üçün dizayn və brendinq həlləri ilə başlayaraq təsirli rəqəmsal marketinq, PR&media, TV&Radio xidmətləri təklif edən dinamik bir şirkətik.</p>
          </div>
          <div className='text-center'>
            <Link to='/contact'>Müraciət et</Link>
          </div>
        </div>
      </section>

      <section className='mb-5 short-about-part'>
        <div className="text-center">
          <h5>Biz kimik?</h5>
          <div className="col-lg-6 mx-auto">
            <p>Biz işinizin tələblərinə cavab vermək üçün dizayn və brendinq həlləri ilə başlayaraq təsirli rəqəmsal marketinq, PR&media, TV&Radio xidmətləri təklif edən dinamik bir şirkətik.</p>
          </div>
        </div>
      </section>

      <section className='mb-5 short-services-part'>
        <div className='text-center services-part-head'>
          <h6>Hansı xidmətləri sizə təklif edirik?</h6>
        </div>
        <HomeServicesCard />
      </section>

      <section className='mb-5 home-why-part'>
        <div className='container'>
          <div className='text-center home-why-part-head'>
            <h5>Niyə biz?</h5>
          </div>
          <div className="row pt-4 row-gap-4">
            {services?.map((item) => (
              <div className='col-lg-3 col-xl-3 col-md-6 col-sm-6 col-12' key={item.id}>
                <div className='cards'>
                  <h6 className='card-header'>{item.service_title}</h6>
                  <p className='card-text'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
