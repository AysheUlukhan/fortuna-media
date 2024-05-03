import React, { useContext } from 'react';
import '../assets/css/portfoliocard.css';
import { NavLink } from 'react-router-dom';

const PortfolioCard = ({ alldata }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
      <div className='card'>
        <div className='text-center '>
          <img src={alldata.image} alt="" />
          <div className='pt-4'>
            <NavLink to={`/portfolioDetail/${alldata.id}`}>{alldata.project_title}</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard