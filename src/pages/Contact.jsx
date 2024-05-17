import React, { useContext, useState } from 'react';
import '../assets/css/contact.css';
import location from '../assets/images/contact-page-img/location_..png';
import contact_hero from '../assets/images/contact-page-img/contact-content.png';
import axios from 'axios';
import { BASE_URL } from '../api/Api';
import { ApiContext } from '../context/ApiContext';
import { Select } from 'antd';
// import image1 from '../assets/images/home-page-img/home-service-1.png'
// import image2 from '../assets/images/home-page-img/home-service-2.png'
// import image3 from '../assets/images/home-page-img/home-service-3.png'
const Contact = () => {

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    service: '',
    project: '',
  })
  const { services } = useContext(ApiContext);
  const [errors, setErrors] = useState({})
  const [valid, setValid] = useState(true)

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    let isValid = true;
    let validationError = {}
    if (formData.fullname === "" || formData.fullname === null) {
      isValid = false;
      validationError.fullname = "Adinizi ve soyadinizi yazin"
    }
    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validationError.email = "Email adresinizi yazin"
    }

    if (formData.phone === "" || formData.phone === null) {
      isValid = false;
      validationError.phone = "Telefon nomresinini yazin"
    }

    if (formData.service === "" || formData.service === null) {
      isValid = false;
      validationError.service = "Bos buraxmayin"
    }

    if (formData.project === "" || formData.project === null) {
      isValid = false;
      validationError.project = "Bos buraxmayin"
    }

    setErrors(validationError)
    setValid(isValid)

    if (Object.keys(validationError).length === 0) {
      let req = {
        fullname: formData.fullname,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        project: formData.project,

      };

      axios.post(`${BASE_URL}/contact_us/`, req)
        .then(result => {
          alert("Mesajınız gönderildi")
        })
        .catch(err => console.log(err))

      setFormData({
        fullname: "",
        email: "",
        phone: "",
        project: "",
      })
    }


  }


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
              <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2'>Ad Soyad</label>
                  <input
                    value={formData.fullname}
                    onChange={(event) => setFormData({ ...formData, fullname: event.target.value })}
                    type="text"
                    placeholder='Ad Soyad' />
                  {
                    valid ? <></> :
                      <span className='text-danger error'>
                        {errors.fullname}
                      </span>
                  }
                </div>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2' >Email</label>
                  <input
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    type="email" />
                  {
                    valid ? <></> :
                      <span className='text-danger error'>
                        {errors.email}
                      </span>
                  }
                </div>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2'>Əlaqə nömrəsi</label>
                  <input
                    value={formData.phone}
                    onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                    type="tel" />
                  {
                    valid ? <></> :
                      <span className='text-danger error'>
                        {errors.phone}
                      </span>
                  }
                </div>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2'>Xidmət</label>
                  <Select
                    defaultValue="Female"
                    className='mt-2 form_select'

                    options={[

                      { value: 'female', label: 'Female' },
                      // { value: 'Male', label: 'Male' },
                      // { value: 'Other', label: 'Other' },
                    ]}
                  />

<Select
  defaultValue="Xidmət seçin"
  value={formData.service}
  onChange={(value) => setFormData({ ...formData, service: value })}
  className='mt-2 form_select'
  options={services?.map(item => ({ value: item.service_title, label: item.service_title }))}
/>



                  <select
                    value={formData.service}
                    onChange={(event) => setFormData({ ...formData, service: event.target.value })}
                    aria-label="Default select example">
                    <option disabled selected>Xidmət seçin</option>
                    {
                      services?.map((item) => (

                        <option value={item.service_title}>{item.service_title}</option>
                      ))
                    }

                    {/* <option value="2">Two</option>
                    <option value="3">Three</option> */}
                  </select>
                  {
                    valid ? <></> :
                      <span className='text-danger error'>
                        {errors.phone}
                      </span>
                  }
                </div>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2'>Layihə</label>
                  <textarea
                    value={formData.project}
                    onChange={(event) => setFormData({ ...formData, project: event.target.value })}
                    rows="5"></textarea>
                  {
                    valid ? <></> :
                      <span className='text-danger error'>
                        {errors.project}
                      </span>
                  }
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