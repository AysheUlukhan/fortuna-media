import React from 'react'
import imageOne from '../assets/images/home-page-img/home-service-1.png'
import imageTwo from '../assets/images/home-page-img/home-service-2.png'
import imageThree from '../assets/images/home-page-img/home-service-3.png'
import imageFour from '../assets/images/home-page-img/home-service-4.png'
import imageFive from '../assets/images/home-page-img/home-service-5.png'
import imageSix from '../assets/images/home-page-img/home-service-6.png'
import '../assets/css/homeservicecard.css'

const HomeServicesCard = () => {
    return (
        <div className='pt-4 service-card'>
            <div className='container'>
                <div className="row row-gap-4">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 banner-card">
                        <img src={imageOne} alt="" className="d-block mx-lg-auto img-fluid w-100" />
                        <div className='banner-text'>
                            <h6>Dizayn</h6>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 banner-card">
                        <img src={imageTwo} alt="" className="d-block mx-lg-auto img-fluid w-100" />
                        <div className='banner-text'>
                            <h6>Brendinq</h6>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 banner-card">
                        <img src={imageThree} alt="" className="d-block mx-lg-auto img-fluid w-100" />
                        <div className='banner-text'>
                            <h6>Marketinq</h6>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 banner-card">
                        <img src={imageFour} alt="" className="d-block mx-lg-auto img-fluid w-100" />
                        <div className='banner-text'>
                            <h6>PR&Media</h6>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 banner-card">
                        <img src={imageFive} alt="" className="d-block mx-lg-auto img-fluid w-100" />
                        <div className='banner-text'>
                            <h6>Veb&Mobil dizayn</h6>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 banner-card">
                        <img src={imageSix} alt="" className="d-block mx-lg-auto img-fluid w-100" />
                        <div className='banner-text'>
                            <h6>TV&Radio Layihələr</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeServicesCard