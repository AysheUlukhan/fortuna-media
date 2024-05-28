import React, { useContext, useEffect, useState } from 'react';
import '../assets/css/servicedetail.css';
import { LuChevronLeft } from "react-icons/lu";
import services_work from '../assets/images/service-page-img/services-work-list.png'
import PortfolioCard from '../components/PortfolioCard';
import { ApiContext } from '../context/ApiContext';
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from '../api/Api';
import axios from 'axios';

const ServicesDetail = () => {
    const { projects, services } = useContext(ApiContext);
    const [cardDetail, setCardDetail] = useState([]);
    const [relatedServices, setRelatedServices] = useState([]);

    const { id } = useParams();
    const serviceId = Number(id);
    const serviceDetails = services.find(p => p.id === serviceId);

    useEffect(() => {
        const fetchCardData = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/service_cards/`);
                setCardDetail(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchCardData();
    }, []);

    useEffect(() => {
        if (cardDetail.length && serviceDetails) {
            const filteredServices = cardDetail.filter(item => item.service.id === serviceDetails.id);
            setRelatedServices(filteredServices);
        }
    }, [cardDetail, serviceDetails]);

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='fm-services-detail'>
            <section className='fm-service-detail-hero mb-5 py-5'>
                <div className='container py-5'>
                    <div className='fm-service-detail-nav d-flex align-items-center pb-5 gap-3'>
                        <LuChevronLeft /> <Link to="/services">Xidmətlərimiz</Link> <div className='fm-point'></div> <p className='mb-0'>{serviceDetails?.service_title}</p>
                    </div>
                    <div className='fm-service-detail-hero-content col-lg-6'>
                        <h2>{serviceDetails?.service_title}</h2>
                        <p>Biz işinizin tələblərinə cavab vermək üçün dizayn və brendinq həlləri ilə başlayaraq təsirli rəqəmsal marketinq, PR&media, TV&Radio xidmətləri təklif edən dinamik bir şirkətik.</p>
                    </div>
                    <div className='text-center'>
                        <Link to='/Contact' className='fm-service-detail-contactlink' href='#'>Müraciət et</Link>
                    </div>
                </div>
            </section>

            <section className='fm-service-detail-header'>
                <div className="container">
                    <div className="row">
                        <h5>{serviceDetails?.service_title}</h5>
                        <div className="col-lg-11">
                            <p>{serviceDetails?.description}</p>
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
                                {relatedServices.length > 0 && (
                                    <div className='accordions'>
                                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                            {relatedServices.map((item, index) => (
                                                <div className="accordion-item" key={item.id}>
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${index + 1}`} aria-expanded="false" aria-controls={`flush-collapse-${index + 1}`}>
                                                            {item.service_card_title}
                                                        </button>
                                                    </h2>
                                                    <div id={`flush-collapse-${index + 1}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.service_card_content }} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
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

            <section className='py-5'>
                <div className='fm-portfolio-card'>
                    <div className="container">
                        <div className='fm-portfolio-card-head pb-5'>
                            <h5>Portfoliomuz</h5>
                        </div>
                        <div className="row g-4">
                            {projects.map((item) => (
                                <PortfolioCard alldata={item} key={item.id} />
                            ))}
                        </div>
                        <div className='text-center py-5'>
                            <Link to='/Portfolio' className='fm-portfolio-link'>Daha çox</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesDetail;
