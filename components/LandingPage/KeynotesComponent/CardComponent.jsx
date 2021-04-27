import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "./Card";
import "../../../public/style.css";
import keynotes from "./keynotes.js";
import keynotePath from "url:../../../src/img/keynote-path.svg";
import FullElipse from "url:../../../src/img/Ellipse.svg";
import HalfElKey from "url:../../../src/img/key-halfelipse.svg"

const colStyle = {
    marginBottom: "10%"
}

const elipseStyle = {
    width: "8%",
    bottom: "-8%",
    right: "40%"
}

const halfElipseStyle = {
    width: "9%",
    bottom: "-50%",
    left: "0%"
}

function newCard(keynote) {
    return(
        <Col lg={4} sm={12} className="d-flex justify-content-center" style= {colStyle}>
            <Card
                src = {keynote.imgSrc}
                name ={keynote.name}
                position ={keynote.state}
            />
        </Col>
    );
}


function CardComponent(){
    return <div className="heroStyle" id="keynotes">

        <h1 className= "cardTitle d-flex justify-content-center">Keynotes.</h1>
        <hr className="hrStyle" width="10%"/>

        <Container >
            <img src={FullElipse} style={elipseStyle} className="fullElipse"/>
            <Row>
                {keynotes.map(newCard)}
            </Row>
        </Container>

        <img src={keynotePath} className= "keynotePath"/>
        <img src={HalfElKey} className= "fullElipse" style={halfElipseStyle} />

    </div>

}

export default CardComponent;