import React from 'react'

const Section31Kere = ({ imgg, plan }) => {
    return (
        <div>

            <div className="lll">
                <div className="werwerwe text-center mt-5">
                    <img src={imgg} className="img-fluid" alt="" />
                </div>

                <div className="plan text-center mt-4 mb-4">
                    {plan}
                </div>

                
            </div>

        </div>
    )
}

export default Section31Kere
