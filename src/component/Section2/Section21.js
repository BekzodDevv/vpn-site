import React from 'react'
import Section21Kere from './Section21Kere'
import { Container, Row, Col } from 'reactstrap';


const Section1 = () => {
    return (
        <div>

            <section className="section__2">
                <Container>
                    <Row>
                        <Col md="12" lg="6">
                            <div className="imagess">
                                <img src="/assets/ill2.svg" className="img-fluid center" alt="" />
                            </div>
                        </Col>
                        <Col  md="12" lg="6">
                            <div className="title">
                                <div className="besttitle px-4">
                                    We Provide Many Features You Can Use
                             </div>

                              <div className="be mt-4">
                              You can explore the features that we provide with fun and have their own functions each feature.
                              </div>



                                <div className="title1">
                                    <Section21Kere title={"Powerfull online protection."}/>
                                    <Section21Kere title={"Internet without borders."}/>
                                    <Section21Kere title={"Supercharged VPN"}/>
                                    <Section21Kere title={"No specific time limits."}/>
                                </div>
                            </div>

                        </Col>


                    </Row>
                </Container>

            </section>


        </div>
    )
}

export default Section1
