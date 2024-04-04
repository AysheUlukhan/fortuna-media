import React from 'react';
import '../assets/css/about.css'
import komanda_image from '../assets/images/about-page-img/komanda-pic.png'
import HomeServicesCard from '../components/HomeServicesCard';
import team_1 from '../assets/images/about-page-img/team-1.png'
import team_2 from '../assets/images/about-page-img/team-2.png'
import team_3 from '../assets/images/about-page-img/team-3.png'
import team_4 from '../assets/images/about-page-img/team-4.png'
import team_5 from '../assets/images/about-page-img/team-5.png'
import team_6 from '../assets/images/about-page-img/team-6.png'
import team_7 from '../assets/images/about-page-img/team-7.png'
import PortfolioCard from '../components/PortfolioCard';

const About = () => {
  return (
    <div className='about'>
      <section className='about-page mb-5'>
        <div className='container py-5'>
          <div className='about-hero-content col-lg-6'>
            <h2>İdeyalarınızı </h2>
            <h3>reallığa çevirin</h3>
            <p>Biz işinizin tələblərinə cavab vermək üçün dizayn və brendinq həlləri ilə başlayaraq təsirli rəqəmsal marketinq, PR&media, TV&Radio xidmətləri təklif edən dinamik  bir şirkətik.</p>
          </div>
          <div className='text-center'>
            <a href='#'>Müraciət et</a>
          </div>
        </div>
      </section>

      <section className='about-content mb-5'>
        <div class="container py-5">
          <div class="row align-items-center row-gap-4 py-5">
            <div class="col-lg-6 col-12 col-sm-12">
              <h5 class="main-title pb-4">Fortuna Media</h5>
              <p class="sub-title">Biz işinizin tələblərinə cavab vermək üçün dizayn və brendinq həlləri ilə başlayaraq təsirli rəqəmsal marketinq, PR&media, TV&Radio xidmətləri təklif edən dinamik  bir şirkətik.</p>
              <p class="sub-title">Biz işimizdə peşəkarlığı, səmimi əzmləri və işə məsuliyyət hissini nümayiş etdirən şəxsləri seçdik və Azərbaycanın gələcəyində adını duyuracaq bir komanda ilə xidmət verməyə başladıq.</p>
              <p class="sub-title">Biz başladıqda, hər bir qrupun inkişafı üçün əsas prinsip kimi müştəri razıqəliyini seçdik. Bu istiqamətdə addım atmağımız, yalnız bir təminat deyil, hər bir təşəbbüsümüzdə əla nəticələr əldə etməyə sürükləyən bir güc kimi təsir etməkdədir.</p>
            </div>
            <div class="col-12 col-sm-12 col-lg-6">
              <img src={komanda_image} class="d-block mx-lg-auto img-fluid" alt="komanda images" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className='skills-part mb-5'>
        <div className='container'>
          <div className='row mx-auto row-gap-4'>
            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6'>
              <div className='card border-0'>
                <div className='card-content'>
                  <h5 className='card-text'>340+</h5>
                  <p className='card-sub'>Layihə</p>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6'>
              <div className='card border-0'>
                <div className='card-content'>
                  <h5 className='card-text'>30+</h5>
                  <p className='card-sub'>işçi qüvvəsi</p>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6'>
              <div className='card border-0'>
                <div className='card-content'>
                  <h5 className='card-text'>7+</h5>
                  <p className='card-sub'>il təcrübə</p>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6'>
              <div className='card border-0'>
                <div className='card-content'>
                  <h5 className='card-text'>300+</h5>
                  <p className='card-sub'>məmnun müştəri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-5 short-about-services-part'>
        <div className='text-center about-part-head'>
          <h6>Hansı xidmətləri sizə təklif edirik?</h6>
        </div>
        <HomeServicesCard />
      </section>

 <section className='about-team'>
    
        <div class="container py-5">
          <div class="d-flex flex-wrap gap-4 align-items-center g-5 py-5">
            <div class="col-lg-6 col-12 col-sm-12">
              <h5 class="main-title pb-4">FortunaMedia <br /> komandası:</h5>
              <p class="sub-title">Gündəlik 24 saat sizi üçün fəaliyyət göstərməyə həmişə hazırıq! Komandamız - dizayn, film, reklam, marketing, TV&Radio kimi sahələrdə böyük təcrübəyə sahib və diqqətli və məsuliyyətli işçilərdən ibarətdir.</p>
              <p class="sub-title">2 nəfərlə fəaliyyətə başlayan FortunaMedia Agentliyi bu gün effektiv yaradıcılıq prosesi üçün tələb olunan bütün mütəxəssislərin olduğu tam yığılmış bir rəqəmsal agentlikdir.</p>
            </div>
            <div className='card'>
              <div className='text-center '>
                <img src={team_1} alt="" />
                <div className='pt-4'>
                  <h5>Əli Suleymanov</h5>
                  <p>Təsisçi / Kreativ Direktor</p>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='text-center '>
                <img src={team_2} alt="" />
                <div className='pt-4'>
                  <h5>Fuad Aliyevv</h5>
                  <p>Təsisçi / Texniki Direktor</p>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='text-center '>
                <img src={team_3} alt="" />
                <div className='pt-4'>
                  <h5>Rauf Haciyev</h5>
                  <p>Senarist</p>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='text-center'>
                <img src={team_4} alt="" />
                <div className='pt-4'>
                  <h5>Fidan Ağayeva</h5>
                  <p>Rəqəmsal Media mütəxəssisi</p>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='text-center'>
                <img src={team_5} alt="" />
                <div className='pt-4'>
                  <h5>Rüfət Suleymanov</h5>
                  <p>Qrafik Dizayner</p>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='text-center'>
                <img src={team_6} alt="" />
                <div className='pt-4'>
                  <h5>Jalə Həsənova</h5>
                  <p>UX/UI dizayner</p>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='text-center'>
                <img src={team_7} alt="" />
                <div className='pt-4'>
                  <h5>Leyla Suleymanova</h5>
                  <p>SMM mütəxəsis</p>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center'>
            <a className='team-link' href="#">Daha çox</a>
          </div>
        </div>
      </section>

      <section>
          <PortfolioCard/>
      </section>
    </div>
  )
}

export default About