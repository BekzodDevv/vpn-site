import React from 'react'
import FooterKere from './FooterKere'
import {
    Container, Row,  NavbarBrand
} from 'reactstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Footer1 = () => {
    return (
        <div>
            <section className="footerr">
                <Container>
                    <Row>
                        <div className="col-md-12 col-lg-6 col-xl-6 zzz">
                            <div className="kere pt-2 pl-5">
                                <div class="d-flex">
                                    <div class="sub">Subscribe Now for <br /> Get Special Features!
                                 <div className="with mt-2">Let's subscribe with us and find the fun.</div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="te col-md-12 col-lg-6 col-xl-6 mt-3 zzzz">
                            <div class="pt-3 pr-4">
                                <button type="button" className="btn bbbbbbb">
                                    Subscribe Now
                                    </button>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>





            <Router>
                <section className="footer2">
                    <div className="container">
                        <div className="row">
                            <div className="trrr  col-lg-6 col-xl-6 col-md-6 ">
                                <div className="content1">

                                    <NavbarBrand >
                                        <Link to="/" className="d-flex logo" > <img src="/assets/logo.svg" alt="" />
                                            <div className="ne my-auto ml-2">LaslesVPN</div></Link>
                                    </NavbarBrand>

                                    <div className="">
                                        <div className="vir mt-2">LaslesVPN is a private virtual
                                         network that  <br/>   has unique features
                                          and has high security.</div>
                                    </div>

<div className="icons mt-4">
     <span className="icon">
      <img src="/assets/Icon/location.svg" alt=""/>
     </span>
     <span className="icon mx-3">
      <img src="/assets/Icon/User.svg" alt=""/>
     </span>
     <span className="icon">
      <img src="/assets/Icon/location.svg" alt=""/>
     </span>
</div>


<div className="kom mt-4">
    <div className="">
    ©2020LaslesVPN
    </div>
</div>



                                </div>
                            </div>
                        
                            <div className="mt-2 tr trrr col-lg-2 col-xl-2 col-md-6">
                                <FooterKere 
                                proo={"Product"} 
                                down={"Download"}
                                Pricing={"Pricing"}
                                Locations={"Locations"}
                                Server={"Server"}
                                Countries={"Countries"}
                                Blog={"Blog"} 
                                />
                            </div>

                            <div className="mt-2 trrr  col-lg-2 col-xl-2 col-md-6">
                                <FooterKere 
                                proo={"Engage"} 
                                down={"LaslesVPN ? "}
                                Locations={"FAQ"}
                                Server={"Tutorials"}
                                Pricing={"About Us"}
                                Countries={"Privacy Policy"}
                                Blog={"Terms of Service"} 
                                />
                            </div>

                            <div className="mt-2 tr trrr col-lg-2 col-xl-2 col-md-6">
                                <FooterKere 
                                proo={"Earn Money"} 
                                down={"Affiliate"}
                                Locations={"Become Partner"}
                                />
                            </div>
                        
                        </div>
                    </div>
                </section>
            </Router>




        </div>
    )
}

export default Footer1
