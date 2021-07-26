import React from 'react'
import Sectionkere from './Sectionkere'
import { Container, Row, Col, Button } from 'reactstrap';

const Section1 = (props) => {
    return (
        <>

            <section className="section__1">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="tex">
                                <div className="lore">
                                    Want anything to be easy with LaslesVPN.
                            </div>
                                <div className="pre my-3">
                                    Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
                            </div>
                                <div className="bb">
                                    <Button size="lg px-5" className="btt mt-4">
                                        Get Started
                                </Button>
                                </div>


                            </div>
                        </Col>
                        <Col md="6">
                            <div className="images">
                                <img src="/assets/ill1.svg" className="img-fluid" alt="" />
                            </div>

                        </Col>
                    </Row>

                </Container>
            </section>


            <div className="section___1">
                <div className="container">
                    <Row>
                        <Col md="4" className="st bvb">
                            <Sectionkere rasm={"/assets/Icon/user.svg"} num={"90+"} location={"users"} />
                        </Col>
                        <Col md="4"  className="st stiv">
                            <Sectionkere rasm={"/assets/Icon/location.svg"} num={"30+"} location={"Loaction"} />
                        </Col>
                        <Col md="4" className="bvbb stiv">
                            <Sectionkere rasm={"/assets/Icon/user.svg"} num={"50+"} location={"servers"} />
                        </Col>
                    </Row>
                </div>
            </div>


      

        </>
    )
}

export default Section1
