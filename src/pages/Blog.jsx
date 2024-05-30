import React, { useContext, useState } from 'react';
import '../assets/css/blog.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Helmet } from 'react-helmet-async';


const Blog = () => {
  const { blog } = useContext(ApiContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const recordsPerPage = 6;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = blog.slice(firstIndex, lastIndex);
  const npage = Math.ceil(blog.length / recordsPerPage);

  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  const filteredRecords = records.filter((item) => {
    return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
  });

  return (
    <div className='fm-blog'>
       <Helmet>
        <title>Fortuna media - bloq</title>
      </Helmet>
      <section className='fm-hero mb-5 py-5'>
        <div className='container py-5'>
          <div className='fm-hero-content col-lg-6'>
            <h2>Bloqlarımız ilə</h2>
            <p>Təcrübələrimizi sizinlə paylaşırıq</p>
          </div>
        </div>
      </section>

      <section className='fm-blog-card'>
        <div className="container">
          <div className='fm-blog-card-head'>
            <h5>Bloqlar</h5>
          </div>
          <div className='d-flex justify-content-end py-4 blog-search'>
            <input onChange={(e) => setSearch(e.target.value)} placeholder='Axtar' className='w-25 p-3' />
          </div>

          <div className="row row-gap-4 pt-4">
            {filteredRecords.length > 0 ? (
              filteredRecords.map((item) => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 " key={item.id}>
                  <div className="card">
                    <div className='card-img'>
                      <img src={item.image} className="w-100 d-block mx-lg-auto img-fluid" alt="" />
                    </div>
                    <div className='card-content pt-4'>
                      <div className='content-head'>
                        <p className='d-flex align-items-center gap-2'><FaRegCalendarAlt /><span>{item.show_date}</span></p>
                      </div>
                      <div className='content-medium pt-3'>
                        <h6>{item.title}</h6>
                        <div dangerouslySetInnerHTML={{ __html: `${item.content.slice(0, 80)}...` }} />
                        <Link to={`/blogDetail/${item.id}`} className='d-flex gap-2 align-items-center pt-3'>Daha çox <BsArrowRight /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>Məlumat tapılmadı..</p>
              </div>
            )}

            {blog.length > recordsPerPage && (
              <ul className='d-flex justify-content-center gap-4 pt-5'>
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <a
                    href='#/'
                    className={`arrow-item ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={currentPage !== 1 ? prePage : null}
                  >
                    <FaChevronLeft />
                  </a>
                </li>
                {numbers.map((n, i) => (
                  <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                    <a href='#/' className='page-link' onClick={() => changeCPage(n)}>{n}</a>
                  </li>
                ))}
                <li className='page-item'>
                  <a href='#/' className={`arrow-item ${currentPage === npage ? 'disabled' : ''}`} onClick={nextPage}><FaChevronRight /></a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog;
