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
                        <LuChevronLeft /> <a href="/services">Xidmətlərimiz</a> <div className='fm-point'></div> <p className='mb-0'>{serviceDetails?.service_title}</p>
                    </div>
                    <div className='fm-service-detail-hero-content col-lg-6'>
                        <h2>{serviceDetails?.service_title}</h2>
                        <p>Biz işinizin tələblərinə cavab vermək üçün dizayn və brendinq həlləri ilə başlayaraq təsirli rəqəmsal marketinq, PR&media, TV&Radio xidmətləri təklif edən dinamik  bir şirkətik.</p>
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
                                {/* {
                                    relatedServices?.map((item, index) => (
                                        <div key={index} className='d-flex flex-column fm-work-list-item pb-4'>

                                            <h6>{item.service_card_title}</h6>
                                            <ul className='list-group'>
                                                <div className='d-flex align-items-center gap-2'>
                                                    <div className='point'></div>
                                                    <li dangerouslySetInnerHTML={{ __html: item.service_card_content }} />
                                                </div>
                                            </ul>
                                        </div>
                                    ))
                                } */}

                                <div className='accordions'>
                                    <div class="accordion accordion-flush" id="accordionFlushExample">

                                        {
                                            relatedServices?.map((item, index) => (

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${index + 1}`} aria-expanded="false" aria-controls="flush-collapseOne" autofocus={false}>
                                                            {item.service_card_title}
                                                        </button>
                                                    </h2>
                                                    <div id={`flush-collapse-${index + 1}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                        <div class="accordion-body" dangerouslySetInnerHTML={{ __html: item.service_card_content }} />
                                                    </div>
                                                </div>
                                            ))
                                        }


                                    </div>
                                </div>

                                {/* <div class="accordion accordion-flush" id="accordionFlushExample">
                                    {
                                        relatedServices?.map((item, index) => (

                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${index + 1}`}aria-expanded="false" aria-controls="flush-collapseOne">
                                                        What shipping methods are availbale?
                                                    </button>
                                                </h2>
                                                <div id={`flush-collapse-${index + 1}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body">Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.</div>
                                                </div>
                                            </div>
                                        ))

                                    }



                                </div> */}



                                {/* <div className="accordion">
                                    {relatedServices?.map((item, index) => (
                                        <div key={index} className="accordion-item">
                                            <div
                                                className={`accordion-title d-flex justify-content-between align-items-center ${activeIndex === index ? 'active' : ''}`}
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                <p className='mb-0'>{item.service_card_title}</p>
                                                 <span>{activeIndex === index ? '-' : '+'}</span>
                                            </div>
                                            <div
                                                className={`accordion-content ${activeIndex === index ? 'active' : ''}`}
                                                dangerouslySetInnerHTML={{ __html: item.service_card_content }}
                                            />
                                        </div>
                                    ))}
                                </div> */}




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

            {/* <section className='fm-choice'>
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
            </section> */}

            <section className='py-5'>
                <div className='fm-portfolio-card'>
                    <div className="container">
                        <div className='fm-portfolio-card-head pb-5'>
                            <h5>Portfoliomuz</h5>
                        </div>
                        <div className="row g-4">
                            {
                                projects.map((item) => (

                                    <PortfolioCard alldata={item} key={item.id} />
                                ))
                            }
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

export default ServicesDetail