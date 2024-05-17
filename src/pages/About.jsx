import React, { useContext, useEffect, useState } from 'react';
import '../assets/css/about.css'
import komanda_image from '../assets/images/about-page-img/komanda-pic.png'
import HomeServicesCard from '../components/HomeServicesCard';

import project_contact from '../assets/images/about-page-img/project-contact.png'
import PortfolioCard from '../components/PortfolioCard';
import TeamCard from '../components/TeamCard';
import { ApiContext } from '../context/ApiContext';
import { Link } from 'react-router-dom';

const About = () => {
  const { statistic, projects, team } = useContext(ApiContext);
  const [shownTeamData, setShownTeamData] = useState([]);
  const [visibleTeamCount, setVisibleTeamCount] = useState(2);

  useEffect(() => {
    setShownTeamData(team.slice(0, visibleTeamCount));
  }, [team, visibleTeamCount]);

  const handleLoadMoreTeam = () => {
    setVisibleTeamCount(team.length);
  };

  // const [shownProjectData, setShownProjectData] = useState([]);
  // const [visibleProjectCount, setVisibleProjectCount] = useState(2);

  // useEffect(() => {
  //   setShownProjectData(projects.slice(0, visibleProjectCount));
  // }, [projects, visibleProjectCount]);

  // const handleLoadMoreProject = () => {
  //   setVisibleProjectCount(projects.length);
  // };
  return (
    <div className='about'>
      <section className='about-page mb-5'>
        <div className='container py-5'>
          <div className='about-hero-content col-lg-6'>
            <h2>İdeyalarınızı </h2>
            <h3>reallığa çevirin</h3>
            <p>Biz işinizin tələblərinə cavab vermək üçün dizayn və brendinq həlləri ilə başlayaraq təsirli rəqəmsal marketinq, PR&media, TV&Radio xidmətləri təklif edən dinamik  bir şirkətik.</p>
          </div>
          <div className='text-center'>
          <Link to='/contact'>Müraciət et</Link>
          </div>
        </div>
      </section>

      <section className='about-content mb-5'>
        <div className="container py-5">
          <div className="row align-items-center row-gap-4 py-5">
            <div className="col-lg-6 col-12 col-sm-12">
              <h5 className="main-title pb-4">Fortuna Media</h5>
              <p className="sub-title">Biz işinizin tələblərinə cavab vermək üçün dizayn və brendinq həlləri ilə başlayaraq təsirli rəqəmsal marketinq, PR&media, TV&Radio xidmətləri təklif edən dinamik  bir şirkətik.</p>
              <p className="sub-title">Biz işimizdə peşəkarlığı, səmimi əzmləri və işə məsuliyyət hissini nümayiş etdirən şəxsləri seçdik və Azərbaycanın gələcəyində adını duyuracaq bir komanda ilə xidmət verməyə className.</p>
              <p className="sub-title">Biz başladıqda, hər bir qrupun inkişafı üçün əsas prinsip kimi müştəri razıqəliyini seçdik. Bu istiqamətdə addım atmağımız, yalnız bir təminat deyil, hər bir təşəbbüsümüzdə əla nəticələr əldə etməyə sürükləyən bir güc kimi təsir etməkdədir.</p>
            </div>
            <div className="col-12 col-sm-12 col-lg-6">
              <img src={komanda_image} className="d-block mx-lg-auto img-fluid" alt="komanda images" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className='skills-part mb-5'>
        <div className='container'>
          <div className='row mx-auto row-gap-4'>

            {
              statistic.map((item) => (
                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6' key={item.id}>
                  <div className='card border-0'>
                    <div className='card-content'>
                      <h5 className='card-text'>{item.key}</h5>
                      <p className='card-sub'>{item.value}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className='mb-5 short-about-services-part'>
        <div className='text-center about-part-head'>
          <h6>Hansı xidmətləri sizə təklif edirik?</h6>
        </div>
        <HomeServicesCard />
      </section>

      <section className='about-team mb-5'>
        <div className="container">
          <div className="g-5 py-5">
            <div className="">
              <h5 className="main-title pb-4">FortunaMedia <br /> komandası:</h5>
            </div>
            <div className="row">
              {
                shownTeamData.map((item) => (
                  <TeamCard alldata={item} key={item.id}/>
                ))
              }
            </div>
          </div>
          {shownTeamData.length < team.length ? (
            <div className='text-center py-5'>
              <a className='fm-portfolio-link' onClick={handleLoadMoreTeam}>Daha çox</a>
            </div>
          ) : null}
        </div>

      </section>

      <div className='mb-5'>
        <div className='fm-portfolio-card'>
          <div className="container">
            <div className='fm-portfolio-card-head pb-5'>
              <h5>Portfoliomuz</h5>
            </div>
            <div className="row g-4">
              {projects.slice(0,4).map((item) => (
                <PortfolioCard alldata={item} key={item.id} />
              ))}
            </div>

            
            <div className='text-center py-5'>
              <Link to={'/portfolio'} className='fm-portfolio-link'>Daha çox</Link>
            </div>
        
           
          </div>
        </div>
      </div>

      <section className='fm-project-contact'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 fm-project-contact-content">
              <div className='pt-5'>
                <h5 className='pb-5'>Layihən var?</h5>
                <Link to='/Contact' className='fm-contact-link'>Müraciət et</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div>
                <img src={project_contact} alt="" className="d-block mx-lg-auto img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About