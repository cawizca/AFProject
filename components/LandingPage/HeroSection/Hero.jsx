import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import MainImage from "url:../../../src/img/Hero-main.svg";
import PathImage from "url:../../../src/img/Path.svg";


const heroStyle ={
    backgroundColor: "#f8f9fa"
}

const containerStyle={
    width:"100%"
}

const imageStyle = {
    height : "75%",
    widths : "auto",
    marginLeft: "30%",
}

const h1Style = {
    color: "#5E4FA2",
    fontWeight: "700",
    fontFamily: 'Montserrat',
    fontSize: "60px"
}

const pStyle = {
    color: "#5E4FA2",
    fontFamily: 'Montserrat',
    marginBottom: "5%"
}

const buttonStyle = {
    backgroundColor: "#5E4FA2",
    color:"#FEC949",
    fontWeight: 500,
    fontSize: "15px",
    fontFamily: 'Montserrat',
    width: "20%",
    height: "8%",
    borderRadius:"8px"
}

const wholeRow = {
    paddingTop: "5%"
}

const wholeColumn = {
    paddingTop: "5%",
    paddingLeft: "10%"
}

const hrStyle ={
    //width: "100px",
    marginBottom: "5%",
    border: "5px solid #FEC949",
}

function Hero(){
    return (<div style={heroStyle}>
        <Container fluid>
            <Row style={wholeRow}>
                <Col lg={6} sm={12} style={wholeColumn}>
                    <h1 style={h1Style}>WebName</h1>
                    <hr width="30%" align="left" style={hrStyle}/>
                    <p style={pStyle}>WebName2021 is the first international conference organized by the Faculty of computing, SLIIT. WebName solicits research papers describing significant and innovative research contributions in all disciplines of computer science.</p>
                    <Button style={buttonStyle}> Join with us </Button>
                </Col>
                <Col lg={6} sm={12}>
                    <img src={MainImage} style={imageStyle}/>
                </Col>
            </Row>
        </Container>
    </div>);
}

export default Hero;