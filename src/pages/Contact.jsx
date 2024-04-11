import React from 'react';
import '../assets/css/contact.css';
import location from '../assets/images/contact-page-img/location_..png';
import contact_hero from '../assets/images/contact-page-img/contact-content.png';
// import image1 from '../assets/images/home-page-img/home-service-1.png'
// import image2 from '../assets/images/home-page-img/home-service-2.png'
// import image3 from '../assets/images/home-page-img/home-service-3.png'
const Contact = () => {
  return (
    <div className='fm-contact'>
      <section className='fm-contact-hero w-100 mb-5 py-5 position-relative'>
        <div className='container py-5 position-absolute bottom-0 '>
          <div className='d-flex justify-content-center flex-wrap gap-5 '>
            <div className='text-center '>
              <div className='fm-content-info py-2'>
                <img className='pb-2' src={location} alt="" />
                <p>Bakı,Azərbaycan <br /> Səbail ray.,ISR Plaza</p>
              </div>

            </div>
            <div className=' text-center'>
              <div className='fm-content-info py-2'>
                <img src={location} alt="" className='pb-2' />
                <p className='mb-0'>+994 51 123 45 56</p>
                <p className='mb-0'>+994 51 123 45 78</p>
              </div>

            </div>
            <div className=' text-center'>
              <div className='fm-content-info py-2'>
                <img className='pb-2' src={location} alt="" />
                <p>office@fortunamedia.az</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='fm-contact-form'>
        <div className="container">
          <h5>Layihən var?</h5>
          <div className="row g-5 mt-4">
            <div className="col-lg-6">
              <form>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2'>Ad Soyad</label>
                  <input type="text" placeholder='Ad Soyad' />
                </div>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2'>Email</label>
                  <input type="email" />
                </div>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2'>Əlaqə nömrəsi</label>
                  <input type="tel" />
                </div>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2'>Xidmət</label>
                  <input type="text" />
                </div>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2'>Layihə</label>
                  <textarea name="" id="" rows="5"></textarea>
                </div>
                <div className='d-flex justify-content-end'>
                  <button className='fm-contact-btn mt-3'>Göndər</button>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <div>
                <img src={contact_hero} className="d-block mx-lg-auto img-fluid w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact