import React, { useContext, useState } from 'react';
import '../assets/css/blog.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';

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

  return (
    <div className='fm-blog'>
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
          {
            records.filter((item)=>{
              return search.toString().toLowerCase() === '' ? item : item.title.toString().toLowerCase().includes(search);
            }).map((item) => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 " key={item.id}>
                  <NavLink to={`/blogDetail/${item.id}`} className='card'>
                    <img src={item.image} alt="" className="d-block mx-lg-auto img-fluid w-100" />
                    <div className='text'>
                      <h5>{item.title}</h5>
                    </div>
                  </NavLink>
                </div>
              ))
            }

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

export default Blog