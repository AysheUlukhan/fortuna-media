import React from 'react';
import '../assets/css/services.css';
import service_card_1 from '../assets/images/service-page-img/service-card-1.png';
import service_card_2 from '../assets/images/service-page-img/service-card-2.png';
import service_card_3 from '../assets/images/service-page-img/service-card-3.png';
import service_card_4 from '../assets/images/service-page-img/service-card-4.png';
import service_card_5 from '../assets/images/service-page-img/service-card-5.png';
import service_card_6 from '../assets/images/service-page-img/service-card-6.png';

const Services = () => {
  return (
    <div className='fm-service'>
      <section className='fm-service-page mb-5 py-5'>
        <div className='container py-5'>
          <div className='fm-service-hero-content col-lg-6'>
            <h2>Xidmətlərimiz</h2>
            <p>Biz işinizin tələblərinə cavab vermək üçün dizayn və brendinq həlləri ilə başlayaraq təsirli rəqəmsal marketinq, PR&media, TV&Radio xidmətləri təklif edən dinamik  bir şirkətik.</p>
          </div>
          <div className='text-center'>
            <a href='#'>Müraciət et</a>
          </div>
        </div>
      </section>

      <section className='fm-service-card'>
        <div class="container px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-12 col-sm-12 col-lg-6 col-md-12">
              <img src={service_card_1} class="d-block mx-lg-auto img-fluid w-100" alt="Bootstrap Themes" />
            </div>
            <div class="col-lg-6 col-12 col-sm-12 col-md-12">
              <h5 className='pb-4'>Dizayn</h5>
              <p>Bizim dizayn prosesimiz, əməkdaşlıq və tökmə ilə köklənmişdir və biz sizin vizyonunuzu əhatə edərək və gücləndirərək təmin edirik. İlk konseptlərdən son təhvilatına qədər, vizual olaraq gözəl və funksional dizaynlara nail olmağa olan əməyimizlə sizi rəzdən çıxaran dizaynlara nail olmağa ümid edirik. İxtisasımız, inkişafımız və müştəri-mərkəzli yanaşmamız üçün FortunaMedia-nı seçin - birgə brendinizi yüksəldək!</p>
              <div class="d-grid gap-2 justify-content-sm-center justify-content-lg-end">
                <a href='#'>Daha çox oxu</a>
              </div>
            </div>
          </div>

          <div class="row  align-items-center g-5 py-5">
            <div class="col-12 col-sm-12 col-lg-6 col-md-12">
              <img src={service_card_2} class="d-block mx-lg-auto img-fluid w-100" alt="Bootstrap Themes" />
            </div>
            <div class="col-lg-6 col-12 col-sm-12 col-md-12">
              <h5 className='pb-4'>Brendinq</h5>
              <p>Bizim dizayn prosesimiz, əməkdaşlıq və tökmə ilə köklənmişdir və biz sizin vizyonunuzu əhatə edərək və gücləndirərək təmin edirik. İlk konseptlərdən son təhvilatına qədər, vizual olaraq gözəl və funksional dizaynlara nail olmağa olan əməyimizlə sizi rəzdən çıxaran dizaynlara nail olmağa ümid edirik. İxtisasımız, inkişafımız və müştəri-mərkəzli yanaşmamız üçün FortunaMedia-nı seçin - birgə brendinizi yüksəldək!</p>
              <div class="d-grid gap-2 justify-content-sm-center justify-content-lg-end">
                <a href='#'>Daha çox oxu</a>
              </div>
            </div>
          </div>

          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-12 col-sm-12 col-lg-6 col-md-12">
              <img src={service_card_3} class="d-block mx-lg-auto img-fluid w-100" alt="Bootstrap Themes" />
            </div>
            <div class="col-lg-6 col-12 col-sm-12 col-md-12">
              <h5 className='pb-4'>Marketinq</h5>
              <p>Bizim dizayn prosesimiz, əməkdaşlıq və tökmə ilə köklənmişdir və biz sizin vizyonunuzu əhatə edərək və gücləndirərək təmin edirik. İlk konseptlərdən son təhvilatına qədər, vizual olaraq gözəl və funksional dizaynlara nail olmağa olan əməyimizlə sizi rəzdən çıxaran dizaynlara nail olmağa ümid edirik. İxtisasımız, inkişafımız və müştəri-mərkəzli yanaşmamız üçün FortunaMedia-nı seçin - birgə brendinizi yüksəldək!</p>
              <div class="d-grid gap-2 justify-content-sm-center justify-content-lg-end">
                <a href='#'>Daha çox oxu</a>
              </div>
            </div>
          </div>

          <div class="row  align-items-center g-5 py-5">
            <div class="col-12 col-sm-12 col-lg-6 col-md-12">
              <img src={service_card_4} class="d-block mx-lg-auto img-fluid w-100" alt="Bootstrap Themes" />
            </div>
            <div class="col-lg-6 col-12 col-sm-12 col-md-12">
              <h5 className='pb-4'>PR&Media</h5>
              <p>Bizim dizayn prosesimiz, əməkdaşlıq və tökmə ilə köklənmişdir və biz sizin vizyonunuzu əhatə edərək və gücləndirərək təmin edirik. İlk konseptlərdən son təhvilatına qədər, vizual olaraq gözəl və funksional dizaynlara nail olmağa olan əməyimizlə sizi rəzdən çıxaran dizaynlara nail olmağa ümid edirik. İxtisasımız, inkişafımız və müştəri-mərkəzli yanaşmamız üçün FortunaMedia-nı seçin - birgə brendinizi yüksəldək!</p>
              <div class="d-grid gap-2 justify-content-sm-center justify-content-lg-end">
                <a href='#'>Daha çox oxu</a>
              </div>
            </div>
          </div>

          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-12 col-sm-12 col-lg-6 col-md-12">
              <img src={service_card_5} class="d-block mx-lg-auto img-fluid w-100" alt="Bootstrap Themes" />
            </div>
            <div class="col-lg-6 col-12 col-sm-12 col-md-12">
              <h5 className='pb-4'>Veb&Mobil Dizayn</h5>
              <p>Bizim dizayn prosesimiz, əməkdaşlıq və tökmə ilə köklənmişdir və biz sizin vizyonunuzu əhatə edərək və gücləndirərək təmin edirik. İlk konseptlərdən son təhvilatına qədər, vizual olaraq gözəl və funksional dizaynlara nail olmağa olan əməyimizlə sizi rəzdən çıxaran dizaynlara nail olmağa ümid edirik. İxtisasımız, inkişafımız və müştəri-mərkəzli yanaşmamız üçün FortunaMedia-nı seçin - birgə brendinizi yüksəldək!</p>
              <div class="d-grid gap-2 justify-content-sm-center justify-content-lg-end">
                <a href='#'>Daha çox oxu</a>
              </div>
            </div>
          </div>

          <div class="row  align-items-center g-5 py-5">
            <div class="col-12 col-sm-12 col-lg-6 col-md-12">
              <img src={service_card_6} class="d-block mx-lg-auto img-fluid w-100" alt="Bootstrap Themes" />
            </div>
            <div class="col-lg-6 col-12 col-sm-12 col-md-12">
              <h5 className='pb-4'>TV&Radio Layihələr</h5>
              <p>Bizim dizayn prosesimiz, əməkdaşlıq və tökmə ilə köklənmişdir və biz sizin vizyonunuzu əhatə edərək və gücləndirərək təmin edirik. İlk konseptlərdən son təhvilatına qədər, vizual olaraq gözəl və funksional dizaynlara nail olmağa olan əməyimizlə sizi rəzdən çıxaran dizaynlara nail olmağa ümid edirik. İxtisasımız, inkişafımız və müştəri-mərkəzli yanaşmamız üçün FortunaMedia-nı seçin - birgə brendinizi yüksəldək!</p>
              <div class="d-grid gap-2 justify-content-sm-center justify-content-lg-end">
                <a href='#'>Daha çox oxu</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services