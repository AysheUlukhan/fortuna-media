import React, { useContext, useState, useEffect } from 'react';
import '../assets/css/portfolio.css';
import { ApiContext } from '../context/ApiContext';
import { Link } from 'react-router-dom';
import PortfolioCard from '../components/PortfolioCard';

const Portfolio = () => {
  const { projects, services } = useContext(ApiContext);
  const [shownData, setShownData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    setShownData(projects.slice(0, visibleCount));
  }, [projects, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount(projects.length);
  };

  const handleFilter = (serviceTitle) => {
    if (serviceTitle === 'All') {
      setShownData(projects.slice(0, visibleCount));
    } else {
      const filteredProjects = projects.filter((project) => project.service.service_title === serviceTitle);
      setShownData(filteredProjects.slice(0, visibleCount));
    }
  }

  return (
    <div className='fm-portfolio'>
      <section className='fm-hero mb-5 py-5'>
        <div className='container py-5'>
          <div className='fm-hero-content col-lg-6'>
            <h2><span>Portfelimiz</span> <br />
              məmnun müştərilərimizdir</h2>
            <p>Məqsədi təyin etmək, hədəf auditoriyasını başa düşmək, birləşmiş identitet və mesaj yaratmaq, müvafiqliyi təmin etmək bu strateyaya daxil olan əsas mərhələlərdir. </p>
          </div>
          <div className='text-center'>
            <Link to='/contact'>Müraciət et</Link>
          </div>
        </div>
      </section>

      <section className='fm-portfolio-category'>
        <div className="container">
          <div className='fm-category-head scrollable-list'>
            <ul className='d-flex justify-content-between gap-3 my-5'>
              <li>
                <a onClick={() => handleFilter('All')}>All</a>
              </li>
              {services.length > 0 && services.map((item) => (
                <li key={item.id}>
                  <a onClick={() => handleFilter(item.service_title)}>{item.service_title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='py-5'>
            <div className='fm-portfolio-card'>
              <div className="container">
                <div className='fm-portfolio-card-head pb-5'>
                  <h5>Portfoliomuz</h5>
                </div>
                <div className="row g-4">
                  {shownData.map((item) => (
                    <PortfolioCard alldata={item} key={item.id}/>
                  ))}
                </div>
                {shownData.length < projects.length && (
                  <div className='text-center py-5'>
                    <a className='fm-portfolio-link' onClick={handleLoadMore}>Daha çox</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio;
