import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "./Card";
import "../../../public/style.css"




function CardComponent(){
    return <div className="heroStyle">
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