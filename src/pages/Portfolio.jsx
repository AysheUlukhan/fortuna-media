import React from 'react';
import '../assets/css/portfolio.css';
import portfolio_1 from '../assets/images/portfolio-page-img/portfolio-1.png'
import portfolio_2 from '../assets/images/portfolio-page-img/portfolio.2.png'
import portfolio_3 from '../assets/images/portfolio-page-img/portfolio-3.png'
import portfolio_4 from '../assets/images/portfolio-page-img/portfolio-4.png'
import portfolio_5 from '../assets/images/portfolio-page-img/portfolio-5.png'


const Portfolio = () => {
  return (
    <div className='fm-portfolio'>
      <section className='fm-hero mb-5 py-5'>
        <div className='container py-5'>
          <div className='fm-hero-content col-lg-6'>
            <h2><span>Portfelimiz -</span> <br />
              məmnun müştərilərimizdir</h2>
            <p>Məqsədi təyin etmək, hədəf auditoriyasını başa düşmək, birləşmiş identitet və mesaj yaratmaq, müvafiqliyi təmin etmək bu strateyaya daxil olan əsas mərhələlərdir. </p>
          </div>
          <div className='text-center'>
            <a className='fm-contactlink' href='#'>Müraciət et</a>
          </div>
        </div>
      </section>

      <section className='fm-portfolio-category'>
        <div className="container">
          <div className='fm-category-head scrollable-list'>
            <ul className='d-flex justify-content-between gap-3'>
              <li>Dizayn</li>
              <li>Brendinq</li>
              <li>TV& Radio Laihələr</li>
              <li>Marketinq</li>
              <li>PR &Media</li>
              <li>Veb&Mobil Dizayn</li>
            </ul>
          </div>
          <div className='py-5'>
            <div className="row row-gap-4">
              <a href='/PortfolioDetail' className='col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6 '>
                <div className='card'>
                  <div className='text-center '>
                    <img src={portfolio_1} alt="" />
                    <div className='pt-4'>
                      <h5>Şirvanşahlar Residence</h5>
                    </div>
                  </div>
                </div>
              </a>

              <a href='/PortfolioDetail' className='col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6'>
                <div className='card'>
                  <div className='text-center '>
                    <img src={portfolio_1} alt="" />
                    <div className='pt-4'>
                      <h5>Şirvanşahlar Residence</h5>
                    </div>
                  </div>
                </div>
              </a>

              <a href='/PortfolioDetail' className='col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6'>
                <div className='card'>
                  <div className='text-center '>
                    <img src={portfolio_1} alt="" />
                    <div className='pt-4'>
                      <h5>Şirvanşahlar Residence</h5>
                    </div>
                  </div>
                </div>
              </a>

              <a href='/PortfolioDetail' className='col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6'>
                <div className='card'>
                  <div className='text-center '>
                    <img src={portfolio_1} alt="" />
                    <div className='pt-4'>
                      <h5>Şirvanşahlar Residence</h5>
                    </div>
                  </div>
                </div>
              </a>

              <a href='/PortfolioDetail' className='col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6'>
                <div className='card'>
                  <div className='text-center '>
                    <img src={portfolio_1} alt="" />
                    <div className='pt-4'>
                      <h5>Şirvanşahlar Residence</h5>
                    </div>
                  </div>
                </div>
              </a>
              <a href='/PortfolioDetail' className='col-lg-3 col-xl-3 col-md-4 col-sm-6 col-6'>
                <div className='card'>
                  <div className='text-center '>
                    <img src={portfolio_1} alt="" />
                    <div className='pt-4'>
                      <h5>Şirvanşahlar Residence</h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio