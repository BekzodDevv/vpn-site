import React from 'react'
import Section31Kere from './Section31Kere'
import {
  Container, Row, Col, Card, Button, CardDeck, CardBody, CardGroup, CardFooter
} from 'reactstrap'
import Section21Kere from '../Section2/Section21Kere'
import Section311Kere from './Section311Kere'

const Section31 = () => {
  return (
    <div>

      <section className="section__3 pb-5">
        <Container>
          <Row>
            <Col className="text-center">
              <div className="titlee">
                Choose Your Plan
         </div>
              <div className="qwe mt-3 mb-4">
                Let's choose the package that is best for you and <br />  explore it happily and cheerfully.
         </div>
            </Col>
          </Row>
          <div className="erw"></div>
        </Container>



        <Container>
          <Row>
            <Col md="12" sm="12">
              <CardDeck>
                <Card className="mt-4">
                  <Section31Kere imgg={"/assets/Illustration/Free.svg"} plan={"Free Plan"} />
                  <CardBody>
                    <Section311Kere ktitle={"Unlimited Bandwitch"} />
                    <Section311Kere ktitle={"Encrypted Connection"} />
                    <Section311Kere ktitle={"No Traffic Logs"} />
                    <Section311Kere ktitle={"Works on All Devices"} />
                  </CardBody>
                  <CardFooter className="mx-auto  text-center">
                    <h3 className="free mb-4">Free
                   </h3>
                    <Button>
                      Select
                   </Button>
                  </CardFooter>
                </Card>
                <Card className="mt-4">
                  <Section31Kere imgg={"/assets/Illustration/Standard.svg"} plan={"Standard Plan"} />
                  <CardBody>
                    <Section311Kere ktitle={"Unlimited Bandwitch"} />
                    <Section311Kere ktitle={"Encrypted Connection"} />
                    <Section311Kere ktitle={"Yes Traffic Logs"} />
                    <Section311Kere ktitle={"Works on All Devices"} />
                    <Section311Kere ktitle={"Connect Anyware"} />
                  </CardBody>
                  <CardFooter className="mx-auto  text-center">
                    <h3 className="free mb-4">$9
                   <span className="text-muted"> / mo</span>
                    </h3>
                    <Button>
                      Select
                   </Button>
                  </CardFooter>
                </Card>
                <Card className="mt-4">
                  <Section31Kere imgg={"/assets/Illustration/Premium.svg"} plan={"Premium Plan"} />
                  <CardBody>
                    <Section311Kere ktitle={"Unlimited Bandwitch"} />
                    <Section311Kere ktitle={"Encrypted Connection"} />
                    <Section311Kere ktitle={"Yes Traffic Logs"} />
                    <Section311Kere ktitle={"Works on All Devices"} />
                    <Section311Kere ktitle={"Connect Anyware"} />
                    <Section311Kere ktitle={"Get New Features"} />
                  </CardBody>
                  <CardFooter className="mx-auto  text-center">
                    <h3 className="free mb-4">$12
                   <span className="text-muted"> / mo</span>
                    </h3>
                    <Button>
                      Select
                   </Button>
                  </CardFooter>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </section>






    </div>
  )
}

export default Section31
