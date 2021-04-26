import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";

const brandStyle = {
    color: "#5E4FA2",
    fontWeight: 700
}

const linkStyle = {
    color: "#5E4FA2",
    fontFamily: 'Montserrat',
    fontWeight: 500
}

const buttonUpStyle = {
    color: "#5E4FA2",
    backgroundColor:"#FEC949",
    fontWeight: 600,
    fontSize: "15px",
    fontFamily: 'Montserrat',
    zIndex: "99",
    marginLeft: "25px"
}

const buttonInStyle = {
    color: "#5E4FA2",
    border: "1px solid #5E4FA2",
    fontWeight: 600,
    fontSize: "15px",
    fontFamily: 'Montserrat',
    zIndex: "99",
    marginLeft: "25px"
}

const navToggleStyle = {
    zIndex: "99"
}

function AppBarComponent(){
    return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home" style={brandStyle}>WebName</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style = {navToggleStyle}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" style={linkStyle} className="mx-3">Home</Nav.Link>
                        <Nav.Link href="#link" style={linkStyle} className="mx-3">Keynotes</Nav.Link>
                        <Nav.Link href="#link" style={linkStyle} className="mx-3">Workshops</Nav.Link>
                        <Nav.Link href="#link" style={linkStyle} className="mx-3">Committie</Nav.Link>
                        <Nav.Link href="#link" style={linkStyle} className="mx-3">Past Proceeding</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outlined" style={buttonInStyle}>Sign In</Button>
                        <Button variant="outline-success" style={buttonUpStyle} >Sign Up</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default AppBarComponent;