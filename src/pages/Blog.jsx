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
          <div className='d-flex justify-content-end py-4 blog-search'>
            <input placeholder='Axtar' className='w-25 p-3' />
          </div>

          <div className="row row-gap-4 pt-4">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
              <div className='card'>
                <img src={card_one} alt="" className="d-block mx-lg-auto img-fluid w-100" />
                <div className='text'>
                  <h5>Designing for Apple Vision Pro: Lessons Learned from Puzzling Places</h5>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card">

                <img src={card_two} alt="" className="d-block mx-lg-auto img-fluid w-100" />
                <div className='text'>
                  <h5>Ayıq sürücü xidməti</h5>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card">
                <img src={card_three} alt="" className="d-block mx-lg-auto img-fluid w-100" />
                <div className='text'>
                  <h5>Designing for Apple Vision Pro: Lessons Learned from Puzzling Places</h5>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card">
                <img src={card_four} alt="" className="d-block mx-lg-auto img-fluid w-100" />
                <div className='text'>
                  <h5>Designing for Apple Vision Pro: Lessons Learned from Puzzling Places</h5>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card">
                <img src={card_five} alt="" className="d-block mx-lg-auto img-fluid w-100" />
                <div className='text'>
                  <h5>Designing for Apple Vision Pro: Lessons Learned from Puzzling Places</h5>
                </div>
              </div>
            </div>

          </div>



          {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="card">
              <img src={card_one} alt="" className="d-block mx-lg-auto img-fluid w-100" />
              <div class="text">
                <h5>Designing for Apple Vision Pro: Lessons Learned from Puzzling Places</h5>
              </div>
            </div>
          </div> */}

        </div>
      </section>
    </div>
  )
}

export default Blog