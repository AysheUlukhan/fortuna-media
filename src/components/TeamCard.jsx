import React from 'react'
const TeamCard = ({ alldata }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className='card'>
                <div className='text-center team-card'>
                    <img src={alldata.image} className="d-block mx-lg-auto img-fluid card-img-top" alt={alldata.fullname} />
                    <div className='pt-4'>
                        <h5>{alldata.fullname}</h5>
                        <p>{alldata.position}</p>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default TeamCard
