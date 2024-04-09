import React from 'react';
import '../assets/css/blog.css';
import card_one from '../assets/images/blog-page-img/blog-card-one.png';
import card_two from '../assets/images/blog-page-img/blog-card-2.png';
import card_three from '../assets/images/blog-page-img/blog-card-3.png';
import card_four from '../assets/images/blog-page-img/blog-card-4.png';
import card_five from '../assets/images/blog-page-img/blog-card-5.png';

const Blog = () => {
  return (
    <div className='fm-blog'>
      <section className='fm-hero mb-5 py-5'>
        <div className='container py-5'>
          <div className='fm-hero-content col-lg-6'>
            <h2>Bloqlarımız ilə</h2>
            <p>Təcrübələrimizi sizinlə paylaşırıq</p>
          </div>
        </div>
      </section>

      <section className='fm-blog-card'>
        <div className="container">
          <div className='fm-blog-card-head'>
            <h5>Bloqlar:</h5>
          </div>
          
          <div className="row row-gap-5">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div>
                <img src={card_one} alt="" />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div>
                <img src={card_two} alt="" />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div>
                <img src={card_three} alt="" />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div>
                <img src={card_four} alt="" />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div>
                <img src={card_five} alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog