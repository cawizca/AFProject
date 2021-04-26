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
    fontSize: "13px",
    fontFamily: 'Montserrat',
    height: "50px",
    borderRadius: "8px",
    zIndex: "99"
}

const elipseOne = {
    top : "16%",
    left : "7%",
    width : "7%"
}

const elipseTwo = {
    bottom : "20%",
    right : "30%",
    width : "12%"
}

function Hero(){
    return (<div className="heroStyle" id="home">
        <Container fluid>
            <img src={PathImage} className= "pathStyle"/>
            <img src={FullElipse} className="fullElipse" style={elipseOne}/>
            <img src={FullElipse} className="fullElipse" style={elipseTwo}/>
            <Row className="wholeRow">
                <Col lg={6} sm={12} className="wholeColumn">
                    <h1 className= "h1Style" >WebName</h1>
                    <hr width="30%" align="left" className="hrStyle"/>
                    <p className= "pStyle" >WebName2021 is the first international conference organized by the Faculty of computing, SLIIT. WebName solicits research papers describing significant and innovative research contributions in all disciplines of computer science.</p>
                    <Button style={buttonStyle} > Contact us Today </Button>
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