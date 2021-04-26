import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "./Card";
import "../../../public/style.css"




function CardComponent(){
    return <div className="heroStyle">
        <h1 className= "cardTitle d-flex justify-content-center">Keynotes.</h1>
        <hr className="hrStyle" width="10%"/>
        <Container >
            <Row>
                <Col lg={4} sm={12}>
                    <Card />
                </Col>
                <Col  lg={4} sm={12}>
                    Card 2
                </Col>
                <Col  lg={4} sm={12}>
                    Card 3
                </Col>
            </Row>
        </Container>
    </div>

}

export default CardComponent;