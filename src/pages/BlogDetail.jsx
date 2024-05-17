import React, { useContext } from 'react';
import { LuChevronLeft } from "react-icons/lu";
import '../assets/css/blogdetail.css';
import { NavLink, useParams } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';

const BlogDetail = () => {
    const { blog } = useContext(ApiContext);
    const { id } = useParams();
    const blogId = Number(id);
    const blogDetails = blog.find(p => p.id === blogId);

    
    const latestBlogs = blog.slice(-3).reverse();

    return (
        <div className='fm-blog-detail'>
            <section className='fm-bd-hero mb-5 py-5'>
                <div className='container py-5'>
                    <div className='fm-bd-nav d-flex align-items-center pb-5 gap-3'>
                        <LuChevronLeft /> <a href="/blog">Bloq</a> <div className='fm-point'></div> <p className='mb-0'>{blogDetails?.title} </p>
                    </div>
                </div>
            </section>

            <section className='fm-bd-card'>
                <div className="container">
                    <div className="row g-lg-5 py-5">
                        <div className="col-lg-7 col-xl-7 col-sm-12 col-12">
                            <article className="fm-blog-post">
                                <img src={blogDetails?.image} className="w-100 d-block mx-lg-auto img-fluid dblog-img" alt="" />
                                <div className="py-3">
                                    <span>{blogDetails?.show_date}</span>
                                    <h2 className="pt-4">{blogDetails?.title}</h2>
                                    <p dangerouslySetInnerHTML={{ __html: blogDetails?.content }}></p>
                                </div>
                            </article>
                        </div>

                        <div className='col-lg-4 col-xl-4 col-sm-12 col-12 left-related-posts'>
                            <div>
                                <div className="related-posts pb-3">
                                    <h4>Ən son xəbərlər</h4>
                                </div>
                                <ul>
                                    {latestBlogs.map((latestBlog) => (
                                        <NavLink to={`/blogDetail/${latestBlog.id}`} className="text-decoration-none" key={latestBlog.id}>
                                            <div className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                                                <img src={latestBlog.image} className="d-block mx-lg-auto img-fluid latest-img" alt="" />
                                                <div className="col-lg-10">
                                                    <small className="text-body-secondary">
                                                        <span>{latestBlog.show_date}</span>
                                                    </small>
                                                    <h6 className="mb-0">{latestBlog.title}</h6>
                                                </div>
                                            </div>
                                        </NavLink>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogDetail;
