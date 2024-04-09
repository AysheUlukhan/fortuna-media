import React from 'react'
import team_1 from '../assets/images/about-page-img/team-1.png'
import team_2 from '../assets/images/about-page-img/team-2.png'
import team_3 from '../assets/images/about-page-img/team-3.png'
import team_4 from '../assets/images/about-page-img/team-4.png'
import team_5 from '../assets/images/about-page-img/team-5.png'
import team_6 from '../assets/images/about-page-img/team-6.png'
import team_7 from '../assets/images/about-page-img/team-7.png'
const TeamCard = () => {
    return (
        <div className="container ">
            <div className="g-5 py-5">
                <div className="">
                    <h5 className="main-title pb-4">FortunaMedia <br /> komandası:</h5>

                </div>
                <div className="row g-3">
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className='card'>
                        <div className='text-center '>
                            <img src={team_1} alt="" />
                            <div className='pt-4'>
                                <h5>Əli Suleymanov</h5>
                                <p>Təsisçi / Kreativ Direktor</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className='card'>
                        <div className='text-center '>
                            <img src={team_2} alt="" />
                            <div className='pt-4'>
                                <h5>Fuad Aliyevv</h5>
                                <p>Təsisçi / Texniki Direktor</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className='card'>
                        <div className='text-center '>
                            <img src={team_3} alt="" />
                            <div className='pt-4'>
                                <h5>Rauf Haciyev</h5>
                                <p>Senarist</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className='card'>
                        <div className='text-center'>
                            <img src={team_4} alt="" />
                            <div className='pt-4'>
                                <h5>Fidan Ağayeva</h5>
                                <p>Rəqəmsal Media mütəxəssisi</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className='card'>
                        <div className='text-center'>
                            <img src={team_5} alt="" />
                            <div className='pt-4'>
                                <h5>Rüfət Suleymanov</h5>
                                <p>Qrafik Dizayner</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className='card'>
                        <div className='text-center'>
                            <img src={team_6} alt="" />
                            <div className='pt-4'>
                                <h5>Jalə Həsənova</h5>
                                <p>UX/UI dizayner</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className='card'>
                        <div className='text-center'>
                            <img src={team_7} alt="" />
                            <div className='pt-4'>
                                <h5>Leyla Suleymanova</h5>
                                <p>SMM mütəxəsis</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className='text-center'>
                <a className='team-link' href="#">Daha çox</a>
            </div>
        </div>
    )
}

export default TeamCard
