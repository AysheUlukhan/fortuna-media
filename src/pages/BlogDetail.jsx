import React from 'react';
import { LuChevronLeft } from "react-icons/lu";
import '../assets/css/blogdetail.css';
import card_one from '../assets/images/blog-page-img/blog-card-one.png';
import card_two from '../assets/images/blog-page-img/blog-card-2.png';
import { NavLink } from 'react-router-dom';
const BlogDetail = () => {
    return (
        <div className='fm-blog-detail'>
            <section className='fm-bd-hero mb-5 py-5'>
                <div className='container py-5'>
                    <div className='fm-bd-nav d-flex align-items-center pb-5 gap-3'>
                        <LuChevronLeft /> <a href="/blog">Bloq</a> <div className='fm-point'></div> <p className='mb-0'>Designing for Apple Vision Pro: </p>
                    </div>
                    <div className='fm-hero-content col-lg-6'>
                        <h5>Designing for Apple Vision Pro: </h5>
                    </div>
                </div>
            </section>

            <section className='fm-bd-card'>
                <div className="container">
                    <div className="row g-lg-5 py-5">
                        <div className="col-lg-7 col-xl-7 col-sm-12 col-12">
                            <article className="fm-blog-post">
                                <img src={card_one} className="w-100 d-block mx-lg-auto img-fluid dblog-img" alt="" />
                                <div className="py-3">
                                    {/* <h1>{userData.blog_category?.blog_category.title}</h1> */}
                                    <span></span> | <span></span>
                                    <h2 className="pt-4">Designing for Apple Vision Pro:</h2>
                                </div>
                            </article>
                        </div>
                        <div className='col-lg-4 col-xl-4 col-sm-12 col-12 left-related-posts'>
                            <div>
                                <div className="related-posts pb-3">
                                    <h4>Əlaqədar Yazılar</h4>
                                </div>

                                <ul>
                                    <NavLink className="text-decoration-none">
                                        <div className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                                            <img src={card_two} className="d-block mx-lg-auto img-fluid dblog-img" alt="" />

                                            <div className="col-lg-10">
                                                <small className="text-body-secondary">
                                                    <span>djcsd</span> | 894
                                                    {/* <span>{item.blog_category_title}</span> */}
                                                </small>
                                                <h6 className="mb-0">Ayıq sürücü xidməti</h6>
                                            </div>
                                        </div>

                                    </NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogDetail