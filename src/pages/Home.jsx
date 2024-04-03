import React from 'react'
import '../assets/css/home.css'
import HomeServicesCard from '../components/HomeServicesCard'

const Home = () => {


  return (
    <div className='home'>
      <section className="mb-5 hero-page" >
        <div className='container py-5'>
          <div className='home-hero-content col-lg-6'>
            <h2>Dizayn</h2>
            <h3>istə, biz edək</h3>
            <p>Biz işinizin tələblərinə cavab vermək üçün dizayn və brendinq həlləri ilə başlayaraq təsirli rəqəmsal marketinq, PR&media, TV&Radio xidmətləri təklif edən dinamik  bir şirkətik.</p>
          </div>
          <div className='text-center'>
            <a href='#'>Müraciət et</a>
          </div>
        </div>
      </section>

      <section className='mb-5 short-about-part'>
        <div className="text-center">
          <h5>Biz kimik?</h5>
          <div className="col-lg-6 mx-auto">
            <p>Biz işinizin tələblərinə cavab vermək üçün dizayn və brendinq həlləri ilə başlayaraq təsirli rəqəmsal marketinq, PR&media, TV&Radio xidmətləri təklif edən dinamik  bir şirkətik.</p>
          </div>
        </div>
      </section>

      <section className='mb-5 short-services-part'>
        <div className='text-center services-part-head'>
          <h6>Hansı xidmətləri sizə təklif edirik?</h6>
        </div>
        <HomeServicesCard />
      </section>

      <section className='mb-5 home-why-part'>
        <div className='container'>
          <div className='text-center home-why-part-head'>
            <h5>Niyə biz?</h5>
          </div>
          <div className="row pt-4 row-gap-4">
            <div className='col-lg-3 col-xl-3 col-md-6 col-sm-6 col-12'>
              <div className='cards'>
                <h6 className='card-header'>İnnovativ Həllər:</h6>
                <p className='card-text'>Yaratıcılıq və innovasiyada uğur qazanaraq, brendinizin böyük massada fərqlənəcək unikal və çoxsadə təkliflər təmin edirik.</p>
              </div>
            </div>

            <div className='col-lg-3 col-xl-3 col-md-6 col-sm-6 col-12'>
              <div className='cards'>
                <h6 className='card-header'>Müştəri-yönümlülük: </h6>
                <p className='card-text'>Sizin uğurunuz bizim üçün prioritetdir. Biz, biznesinizi, başa düşmək üçün vaxt ayırır, xidmətlərimizi və strategiyalarımızı uyğun şəkildə təklif edirik.</p>
              </div>
            </div>

            <div className='col-lg-3 col-xl-3 col-md-6 col-sm-6 col-12'>
              <div className='cards'>
                <h6 className='card-header'>Ekspert Komanda: </h6>
                <p className='card-text'>YBizim komandamız ekspertlərdən ibarətdir, hər biri öz sahələrinə əməkdaşlıq edən bacarıqlı  mütəxəssislərdir. </p>
              </div>
            </div>

            <div className='col-lg-3 col-xl-3 col-md-6 col-sm-6 col-12'>
              <div className='cards'>
                <h6 className='card-header'>Açıq Kommunikasiya: </h6>
                <p className='card-text'>Açıq və şəffaf kommunikasiya, müştəri əlaqələrimizin əsasını təşkil edir. Hər addımda sizi xəbərdar etmək, aydınlıq və etibar təmin etmək üçün əlimizdən gələni edirik.</p>
              </div>
            </div>


          </div>
        </div>
      </section>

      
    </div>
  )
}

export default Home