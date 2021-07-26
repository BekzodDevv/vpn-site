import React, { memo } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import {
    Container, Row, Col, Card, CardBody
  } from 'reactstrap'

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};

const Section41 = ({ setTooltipContent }) => {
    return (
        <>
            <div className="section__4 mt-5">
                <div className="container">
                    <div className="map">
                        <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                            <ZoomableGroup>
                                <Geographies geography={geoUrl}>
                                    {({ geographies }) =>
                                        geographies.map(geo => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                onMouseEnter={() => {
                                                    const { NAME, POP_EST } = geo.properties;
                                                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                                }}
                                                onMouseLeave={() => {
                                                    setTooltipContent("");
                                                }}
                                                style={{
                                                    default: {
                                                        fill: "#D6D6DA",
                                                        outline: "none",
                                                        width: "100%",
                                                        height: "60vh"
                                                    },
                                                    hover: {
                                                        fill: "#F53838",
                                                        outline: "none"
                                                    },
                                                    pressed: {
                                                        fill: "#E42",
                                                        outline: "none"
                                                    }
                                                }}
                                            />
                                        ))
                                    }
                                </Geographies>
                            </ZoomableGroup>
                        </ComposableMap>
                    </div>
            
            </div>


                <Container>
                    <Row>
                        <div className="offset-1 col-xl-2 col-lg-2 col-md-6">
                           <Card>
                               <CardBody className="mx-auto">
                                   <img src="/assets/kk/bir.svg" className="img-fluid  bir" alt=""/>
                               </CardBody>
                           </Card>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-6">
                           <Card>
                               <CardBody className="mx-auto">
                               <img src="/assets/kk/ikki.svg" className="img-fluid pt-3 ikki" alt=""/>
                               </CardBody>
                           </Card>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-6">
                           <Card>
                               <CardBody className="mx-auto">
                                   <img src="/assets/kk/uch.svg" className="img-fluid uch" alt=""/>
                               </CardBody>
                           </Card>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-6">
                           <Card>
                               <CardBody className="mx-auto">
                                   <img src="/assets/kk/tort.svg" className="img-fluid tort pt-3" alt=""/>
                               </CardBody>
                           </Card>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-12">
                           <Card>
                               <CardBody className="mx-auto">
                                   <img src="/assets/kk/besh.svg" className="img-fluid besh pt-3" alt=""/>
                               </CardBody>
                           </Card>
                        </div>

                    </Row>
                </Container>








            </div>
        </>
    );
};

export default memo(Section41);
