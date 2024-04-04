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
            <div className="d-flex flex-wrap gap-4">
            <div className='card'>
              <div className='text-center '>
                <img src={portfolio_1} alt=""/>
                <div className='pt-4'>
                  <h5>Şirvanşahlar Residence</h5>
                </div>
              </div>
            </div>

            <div className='card'>
              <div className='text-center '>
                <img src={portfolio_2} alt=""/>
                <div className='pt-4'>
                  <h5>ASPERA</h5>
                </div>
              </div>
            </div>

            <div className='card'>
              <div className='text-center '>
                <img src={portfolio_3} alt=""/>
                <div className='pt-4'>
                  <h5>LORD Tumları</h5>
                </div>
              </div>
            </div>

            <div className='card'>
              <div className='text-center '>
                <img src={portfolio_4} alt=""/>
                <div className='pt-4'>
                  <h5>021 Ayıq Sürücü xidməti</h5>
                </div>
              </div>
            </div>

            <div className='card'>
              <div className='text-center '>
                <img src={portfolio_5} alt=""/>
                <div className='pt-4'>
                  <h5>DONGFENG</h5>
                </div>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioCard