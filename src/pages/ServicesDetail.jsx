import React from 'react';
import '../assets/css/servicedetail.css';
import { LuChevronLeft } from "react-icons/lu";
import services_work from '../assets/images/service-page-img/services-work-list.png'
import PortfolioCard from '../components/PortfolioCard';


const ServicesDetail = () => {
    return (
        <div className='fm-services-detail'>
            <section className='fm-service-detail-hero mb-5 py-5'>
                <div className='container py-5'>
                    <div className='fm-service-detail-nav d-flex align-items-center pb-5 gap-3'>
                        <LuChevronLeft /> <a href="/services">Xidmətlərimiz</a> <div className='fm-point'></div> <p className='mb-0'>PR&Media</p>
                    </div>
                    <div className='fm-service-detail-hero-content col-lg-6'>
                        <h2>PR&Media</h2>
                        <p>Biz işinizin tələblərinə cavab vermək üçün dizayn və brendinq həlləri ilə başlayaraq təsirli rəqəmsal marketinq, PR&media, TV&Radio xidmətləri təklif edən dinamik  bir şirkətik.</p>
                    </div>
                    <div className='text-center'>
                        <a className='fm-service-detail-contactlink' href='#'>Müraciət et</a>
                    </div>
                </div>
            </section>

            <section className='fm-service-detail-header'>
                <div className="container">
                    <div className="row">
                        <h5>PR&Media</h5>
                        <div className="col-lg-6">
                            <p>Bizim dizayn prosesimiz, əməkdaşlıq və tökmə ilə köklənmişdir və biz sizin vizyonunuzu əhatə edərək və gücləndirərək təmin edirik. İlk konseptlərdən son təhvilatına qədər, vizual olaraq gözəl və funksional dizaynlara nail olmağa olan əməyimizlə sizi rəzdən çıxaran dizaynlara nail olmağa ümid edirik. İxtisasımız, inkişafımız və müştəri-mərkəzli yanaşmamız üçün FortunaMedia-nı seçin - birgə brendinizi yüksəldək!</p>
                        </div>
                        <div className="col-lg-6">
                            <p>Bizim dizayn prosesimiz, əməkdaşlıq və tökmə ilə köklənmişdir və biz sizin vizyonunuzu əhatə edərək və gücləndirərək təmin edirik. İlk konseptlərdən son təhvilatına qədər, vizual olaraq gözəl və funksional dizaynlara nail olmağa olan əməyimizlə sizi rəzdən çıxaran dizaynlara nail olmağa ümid edirik. İxtisasımız, inkişafımız və müştəri-mərkəzli yanaşmamız üçün FortunaMedia-nı seçin - birgə brendinizi yüksəldək!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='fm-work-list'>
                <div className='fm-work-list-hero'>
                    <div className="container py-5">
                        <div className='pb-4'>
                            <h5>Xidmətə nələr daxildir:</h5>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
                                <div className='d-flex flex-column fm-work-list-item pb-4'>
                                    <h6>Marketinq</h6>
                                    <ul className='list-group'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <div className='point'></div> <li>Brifə uyğun post-planının tərtib edilməsi</li>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <div className='point'></div> <li>Foto və video çəkiliş</li>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <div className='point'></div> <li>Tizer marketinq</li>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <div className='point'></div> <li>Müsabiqə və kampaniyaların keçirilməsi</li>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <div className='point'></div> <li>Aylıq hesabatların hazırlanması</li>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <div className='point'></div> <li>Rəqiblərin təhlil edilməsi</li>
                                        </div>
                                    </ul>
                                </div>

                                <div className='d-flex flex-column fm-work-list-item'>
                                    <h6>PR</h6>
                                    <ul className='list-group'>
                                        <div className='d-flex align-items-center gap-2'>
                                            <div className='point'></div> <li>Press-relizlərin yazılması</li>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <div className='point'></div> <li>Saytlarda bannerlərin yerləşdirilməsi</li>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <div className='point'></div> <li>Native reklamların yerləşdirilməsi</li>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <div className='point'></div> <li>Qəzetlərdə reklam</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 d-sm-none d-none d-md-block">
                                <div>
                                    <img src={services_work} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='fm-choice'>
                <div className="container pb-5">
                    <div className='fm-choice-head'>
                        <h5>Niyə PR&Media üçün bizi <br /> seçməlisiniz</h5>
                    </div>

                    <div className="row fm-choice-card pt-4">
                        <div className="col-lg-4 col-md-12">
                            <div>
                                <h5>Ekspert Qrupu</h5>
                                <p>Təcrübəli peşəkarlarımız PR və media idarəçiliyində illərlə təcrübə və təcrübə gətirirlər.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div>
                                <h5>İnnovativ Yanaşma</h5>
                                <p>Kampaniyalarınızın təzə, aktual və təsirli olmasını təmin edərək, media həllərini qabaqlayırıq.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div>
                                <h5>Nəticəyə əsaslanan</h5>
                                <p>Bizim diqqətimiz biznes məqsədlərinizə uyğun olan ölçülə bilən nəticələrin çatdırılmasına yönəlib.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <PortfolioCard/>
            </section>
        </div>
    )
}

export default ServicesDetail