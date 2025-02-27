import React, { useContext } from 'react';
import '../assets/css/portfoliodetail.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,} from "swiper/modules";
import 'swiper/css';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';

const PortfolioDetail = () => {
    const { id } = useParams();
    const { projects, services } = useContext(ApiContext);
    const portfolioId = Number(id);
    const portfolioDetails = projects.find(p => p.id === portfolioId);

    return (
        <div className='fm-portfolio-detail'>
            <section className='fm-detail-hero mb-5 py-5'>
                <div className='container py-5'>
                    <div className='fm-portfolio-detail-nav d-flex align-items-center pb-5 gap-2'>
                         <a href="/layihelerimiz">Portfoliomuz</a> / <p className='mb-0'>{portfolioDetails?.project_title}</p>
                    </div>
                </div>
            </section>

            <section className='fm-pd-category'>
                <div className="container">

                    <div className="row flex-row-reverse pt-5 fm-pd-content">
                        <div className="col-lg-6">
                            <img src={portfolioDetails?.image} alt="" className="d-block mx-lg-auto img-fluid pd-content_img" />
                        </div>
                        <div className="col-lg-6 fm-pd-content-left">
                            <div>
                                <h5>{portfolioDetails?.project_title}</h5>
                                <p className='pt-2'>{portfolioDetails?.content}</p>
                            </div>
                        </div>

                    </div>
                    <div className="fm-pd-slider pt-5">
                        <Swiper
                            grabCursor={true}
                            slidesPerView={1}
                            spaceBetween={10}
                            modules={[Autoplay]}
                            autoplay={{ delay: 1000 }}
                            speed={2000}
                            loop={true}
                            breakpoints={{
                                0: {
                                    spaceBetween: 10,
                                    slidesPerView: 2,

                                },
                                480: {
                                    spaceBetween: 10,
                                    slidesPerView: 2,
                                },
                                768: {
                                    spaceBetween: 15,
                                    slidesPerView: 2,
                                },

                                912: {
                                    spaceBetween: 15,
                                    slidesPerView: 3,
                                },
                                1280: {
                                    spaceBetween: 70,
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {portfolioDetails?.all_images.map(image => (
                                <SwiperSlide>
                                    <img key={image.id} className='fm-pd-slider' src={image.image} alt={image.project_title} />

                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PortfolioDetail