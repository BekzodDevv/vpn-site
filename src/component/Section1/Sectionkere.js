import React from 'react'

const Sectionkere = ({ num, location, rasm }) => {
    return (
        <div>



            <div className="card">
                <div className="card-body mx-auto ">
                        <div className="kkkk d-flex">
                            <div className="imggg">
                                <img src={rasm} className="img-fluid" alt="" />
                            </div>
                            <div className="body">
                                {num}
                                <div className="footer">
                                    {location}
                                </div>
                            </div>
                        </div>          
                </div>
            </div>






        </div>
    )
}

export default Sectionkere
{/* <Media>
                    <Media right  href="#">
                        <img src={rasm} className="mx-auto" alt=""/>
                    </Media>
                    <Media body>
                        <Media heading>
                            {num}
                              </Media>
                                  {location}
                          </Media>
                </Media>
           */}