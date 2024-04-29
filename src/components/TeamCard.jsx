import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
const TeamCard = () => {

    const { team } = useContext(ApiContext);
    return (
        <div className="container ">
            <div className="g-5 py-5">
                <div className="">
                    <h5 className="main-title pb-4">FortunaMedia <br /> komandası:</h5>
                </div>
                <div className="row g-3">
                    {
                        team?.map((item) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={item.id}>
                                <div className='card'>
                                    <div className='text-center '>
                                        <img src={item.image} className="d-block mx-lg-auto img-fluid" class="card-img-top"  alt="" />
                                        <div className='pt-4'>
                                            <h5>{item.fullname}</h5>
                                            <p>{item.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='text-center'>
                <a className='team-link' href="#">Daha çox</a>
            </div>
        </div>
    )
}

export default TeamCard
