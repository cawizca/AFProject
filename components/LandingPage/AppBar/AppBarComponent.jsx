import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "@material-ui/core/FormControl";
import Form from "react-bootstrap/Form";
import AppBarButtons from "./AppBarButtons";
import AppBarAvatar from "./AppBarAvatar";

const brandStyle = {
    color: "#5E4FA2",
    fontWeight: 700
}

const linkStyle = {
    color: "#5E4FA2",
    fontFamily: 'Montserrat',
    fontWeight: 500
}

const navToggleStyle = {
    zIndex: "99"
}

function AppBarComponent(){
    return(
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="#home" style={brandStyle}>ICAF</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style = {navToggleStyle}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" style={linkStyle} className="mx-3">Home</Nav.Link>
                        <Nav.Link href="#keynotes" style={linkStyle} className="mx-3">Keynotes</Nav.Link>
                        <Nav.Link href="#link" style={linkStyle} className="mx-3">Workshops</Nav.Link>
                        <Nav.Link href="#link" style={linkStyle} className="mx-3">Committie</Nav.Link>
                        <Nav.Link href="#link" style={linkStyle} className="mx-3" >Past Proceeding</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <AppBarButtons />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default AppBarComponent;