import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {
    Container, Row, Col, Card, CardBody
} from 'reactstrap'


const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    791: { items: 1 },
    1024: { items: 3 },
};

const items = [
    <div className="item p-3" data-value="1">
        <div className="image d-flex">
            <img src="/assets/kk/Ellipse 175.svg" alt="" />
            <div className="ml-3 rob">Viezh Robert
            <div className="war">Warsaw, Poland</div>
            </div>

            <div className="ml-auto my-auto">
                <div className="im d-flex">
                    <h6 className="my-auto mr-3 son">4.5</h6>
                    <img src="/assets/kk/Vector.png" className="img-fluid yulduz" alt="" />
                </div>
            </div>
        </div>

        <div className="con">
            <div className="wow mt-2">
                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
      </div>
        </div>




    </div>,
    <div className="item p-3" data-value="2">
        <div className="image d-flex">
            <img src="/assets/kk/avatar.png" alt="" />
            <div className="ml-3 rob">Yessica Christy
            <div className="war">Shanxi, China</div>
            </div>

            <div className="ml-auto my-auto">
                <div className="im d-flex">
                    <h6 className="my-auto mr-3 son">4.5</h6>
                    <img src="/assets/kk/Vector.png" className="img-fluid yulduz" alt="" />
                </div>
            </div>
        </div>

        <div className="con pb-5">
            <div className="wow mt-2">
            “I like it because I like to travel far and still can connect with high speed.”.
      </div>
        </div>


    </div>,
    <div className="item p-3" data-value="3">
         <div className="image d-flex">
            <img src="/assets/kk/avatar2.png" alt="" />
            <div className="ml-3 rob">Kim Young Jou
            <div className="war">Seoul, South Korea</div>
            </div>

            <div className="ml-auto my-auto">
                <div className="im d-flex">
                    <h6 className="my-auto mr-3 son">4.5</h6>
                    <img src="/assets/kk/Vector.png" className="img-fluid yulduz" alt="" />
                </div>
            </div>
        </div>

        <div className="con pb-4">
            <div className="wow mt-2">
            “This is very unusual for my business that currently requires a virtual private network that has high security.”.
      </div>
        </div>


    </div>,
    <div className="item" data-value="4">4</div>,
    <div className="item" data-value="5">5</div>,
];



const Section51 = () => {
    return (
        <div>

            <section className="section__5 mt-4">
                <Container>
                    <Row>
                        <Col>
                            <div className="k text-center">
                                Trusted by Thousands of <br /> Happy Customer
                    </div>

                            <div className="text-center kk mt-3">
                                These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.
                    </div>
                        </Col>
                    </Row>
                </Container>



                <section className="section__51 mt-5">
                    <Container>
                        <AliceCarousel
                            mouseTracking
                            items={items}
                            responsive={responsive}
                        />
                    </Container>
                </section>







            </section>








        </div>
    )
}

export default Section51
