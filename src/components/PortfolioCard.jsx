import React from 'react';
import '../assets/css/portfoliocard.css';
import portfolio_1 from '../assets/images/about-page-img/portfolio-1.png'
import portfolio_2 from '../assets/images/about-page-img/portfolio.2.png'
import portfolio_3 from '../assets/images/about-page-img/portfolio-3.png'
import portfolio_4 from '../assets/images/about-page-img/portfolio-4.png'
import portfolio_5 from '../assets/images/about-page-img/portfolio-5.png'

const PortfolioCard = () => {
  return (
    <div className='fm-portfolio-card'>
      <div className="container">
        <div className='fm-portfolio-card-head pb-5'>
          <h5>Portfoliomuz:</h5>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className='card'>
              <div className='text-center '>
                <img src={portfolio_1} alt="" />
                <div className='pt-4'>
                  <h5>Şirvanşahlar Residence</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className='card'>
              <div className='text-center '>
                <img src={portfolio_2} alt="" />
                <div className='pt-4'>
                  <h5>ASPERA</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className='card'>
              <div className='text-center '>
                <img src={portfolio_3} alt="" />
                <div className='pt-4'>
                  <h5>LORD Tumları</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className='card'>
              <div className='text-center '>
                <img src={portfolio_4} alt="" />
                <div className='pt-4'>
                  <h5>021 Ayıq Sürücü xidməti</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center py-5'>
          <a className='fm-portfolio-link' href="#">Daha çox</a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard