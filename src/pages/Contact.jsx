import React, { useContext, useState } from 'react';
import '../assets/css/contact.css';
import location from '../assets/images/contact-page-img/location_..png';
import axios from 'axios';
import { BASE_URL } from '../api/Api';
import { ApiContext } from '../context/ApiContext';
import { Select } from 'antd';
import { toast } from 'react-toastify';

const { Option } = Select;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    service: '',
    project: '',
  });
  const { services, contact_info } = useContext(ApiContext);
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  console.log(contact_info);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validationError = {};

    if (!formData.fullname) {
      isValid = false;
      validationError.fullname = "Ad və Soyad daxil edin!";
    }
    if (!formData.email) {
      isValid = false;
      validationError.email = "Emaili daxil edin!";
    }
    if (!formData.phone) {
      isValid = false;
      validationError.phone = "Telefon nömrənizi daxil edin!";
    }
    if (!formData.service) {
      isValid = false;
      validationError.service = "Servis seçin!";
    }
    if (!formData.project) {
      isValid = false;
      validationError.project = "Boş buraxmayın!";
    }

    setErrors(validationError);
    setValid(isValid);

    if (isValid) {
      const req = {
        fullname: formData.fullname,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        project: formData.project,
      };

      axios.post(`${BASE_URL}/contact_us/`, req)
        .then(result => {
          toast.success("Mesajınız göndərildi");
          setFormData({
            fullname: "",
            email: "",
            phone: "",
            service: "",
            project: "",
          });
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='fm-contact'>
      <section className='fm-contact-hero w-100 mb-5 py-5 position-relative'>
        <div className='container-fluid py-5 position-absolute bottom-0 '>
          <div className='d-flex justify-content-center flex-wrap gap-5 '>
            <div className='text-center '>
              <div className='fm-content-info py-2'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                  <img className='pb-2' src={location} alt="" />
                  <p>{contact_info[0]?.location_name}</p>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <div className='fm-content-info py-2'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                  <img src={location} alt="" className='pb-2' />
                  <a href={`tel:${contact_info[0]?.phone[0]?.phone}`} className='fs-18'>{contact_info[0]?.phone[0]?.phone}</a>
                </div>


              </div>
            </div>
            <div className='text-center'>
              <div className='fm-content-info py-2'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                  <img className='pb-2' src={location} alt="" />
                  <a href={`mailto:${contact_info[0]?.email[0]?.email}`} className='fs-18'>{contact_info[0]?.email[0]?.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='fm-contact-form'>
        <div className="container">

          <div className="row align-items-center  mt-4">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 contact_info_img">
              <div>
                <img src={contact_info[0]?.image} className="d-block mx-lg-auto img-fluid w-100" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h5 className='mb-4'>Layihən var?</h5>
              <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2'>Ad Soyad</label>
                  <input
                    value={formData.fullname}
                    onChange={(event) => setFormData({ ...formData, fullname: event.target.value })}
                    type="text"
                    placeholder='Ad Soyad'
                  />
                  {errors.fullname && <span className='text-danger error'>{errors.fullname}</span>}
                </div>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2'>Email</label>
                  <input
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    type="email"
                    placeholder='E-poçta'
                  />
                  {errors.email && <span className='text-danger error'>{errors.email}</span>}
                </div>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2'>Əlaqə nömrəsi</label>
                  <input
                    value={formData.phone}
                    onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                    type="tel"
                    placeholder='Əlaqə nömrəsi'
                  />
                  {errors.phone && <span className='text-danger error'>{errors.phone}</span>}
                </div>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2'>Xidmət</label>
                  <Select
                    value={formData.service}
                    onChange={(value) => setFormData({ ...formData, service: value })}
                    className='mt-2 form_select w-100'
                    placeholder="Xidmət seçin"
                  >
                    <Option value="">
                      Xidmət seçin
                    </Option>
                    {services?.map(item => (
                      <Option key={item.service_title} value={item.service_title}>
                        {item.service_title}
                      </Option>
                    ))}
                  </Select>
                  {errors.service && <span className='text-danger error'>{errors.service}</span>}
                </div>
                <div className='d-flex flex-column mb-3'>
                  <label className='mb-2'>Layihə</label>
                  <textarea
                    value={formData.project}
                    onChange={(event) => setFormData({ ...formData, project: event.target.value })}
                    rows="5"
                    placeholder=' İdeanızı yazın'
                  ></textarea>
                  {errors.project && <span className='text-danger error'>{errors.project}</span>}
                </div>
                <div className='d-flex justify-content-end'>
                  <button className='fm-contact-btn mt-3' type='submit'>Göndər</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;





