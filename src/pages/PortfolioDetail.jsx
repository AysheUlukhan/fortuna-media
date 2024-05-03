import React, { useContext } from 'react';
import '../assets/css/portfoliodetail.css';
import { LuChevronLeft } from "react-icons/lu";
import pd_content_img from "../assets/images/portfolio-page-img/portfolio-detail-contentimg.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import pd_slider_oneimg from '../assets/images/portfolio-page-img/portfolio-detiail-slider-1.png';
import pd_slider_twoimg from '../assets/images/portfolio-page-img/portfolio-detail-slider-2.png';
import pd_slider_threeimg from '../assets/images/portfolio-page-img/portfolio-detail-slider-3.png';
import 'swiper/css';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';

const PortfolioDetail = () => {
    const { id } = useParams();
    const { projects, services } = useContext(ApiContext);
    const portfolioId = Number(id);
    const portfolioDetails = projects.find(p => p.id === portfolioId);

    const handleFilter = (serviceTitle) => {
        const filteredProjects = projects.filter((project) => project.service.service_title === serviceTitle);
        setShownData(filteredProjects.slice(0, visibleCount));
      }
    return (
        <div className='fm-portfolio-detail'>
            <section className='fm-detail-hero mb-5 py-5'>
                <div className='container py-5'>
                    <div className='fm-portfolio-detail-nav d-flex align-items-center pb-5 gap-3'>
                        <LuChevronLeft /> <a href="/portfolio">Portfoliomuz</a> <div className='fm-point'></div> <p className='mb-0'>{portfolioDetails?.project_title}</p>
                    </div>
                </div>
            </section>

            <section className='fm-pd-category'>
                <div className="container">
                    <div className='fm-pd-category-head scrollable-list'>
                        <ul className='d-flex justify-content-between gap-3'>
                        {services.length > 0 && services.map((item) => (
                <li key={item.id}>
                  <span onClick={() => handleFilter(item.service_title)}>{item.service_title}</span>
                </li>
              ))}
                        </ul>
                    </div>

                    <div className="row flex-row-reverse pt-5 fm-pd-content">
                        <div className="col-lg-6">
                            <img src={portfolioDetails?.image} alt="" className="d-block mx-lg-auto img-fluid" />
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
                            slidesPerView={4}
                            spaceBetween={10}
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
                            {
                                projects?.all_images?.map((item) => (

                                    <SwiperSlide>
                                        <div>
                                            <img src={item.image} alt="" />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                            {/* <SwiperSlide>
                                <div>
                                    <img src={pd_slider_twoimg} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={pd_slider_threeimg} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={pd_slider_oneimg} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={pd_slider_oneimg} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={pd_slider_oneimg} alt="" />
                                </div>
                            </SwiperSlide> */}

                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PortfolioDetail