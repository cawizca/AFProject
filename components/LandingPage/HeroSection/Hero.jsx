import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import MainImage from "url:../../../src/img/Hero-main.svg";
import PathImage from "url:../../../src/img/Path.svg";
import HalfElipse from "url:../../../src/img/HalfElipse.svg";
import FullElipse from "url:../../../src/img/Ellipse.svg";
import "../../../public/style.css";

const buttonStyle = {
    backgroundColor: "#5E4FA2",
    color: "#FEC949",
    fontWeight: 500,
    fontSize: "15px",
    fontFamily: 'Montserrat',
    width: "20%",
    height: "8%",
    borderRadius: "8px"
}

function Hero(){
    return (<div className="heroStyle">
        <Container fluid>
            <img src={PathImage} className= "pathStyle"/>
            <img src={FullElipse} className="fullElipse"/>
            <Row className="wholeRow">
                <Col lg={6} sm={12} className="wholeColumn">
                    <h1 className= "h1Style" >WebName</h1>
                    <hr width="30%" align="left" className="hrStyle"/>
                    <p className= "pStyle" >WebName2021 is the first international conference organized by the Faculty of computing, SLIIT. WebName solicits research papers describing significant and innovative research contributions in all disciplines of computer science.</p>
                    <Button style={buttonStyle} > Join with us </Button>
                    <img src={HalfElipse} className="halfEStyle" />
                </Col>
                <Col lg={6} sm={12}>

                    <img src={MainImage} className="imageStyle" />
                </Col>
            </Row>
        </Container>
    </div>);
}

export default Hero;