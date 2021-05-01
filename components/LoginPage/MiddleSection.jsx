import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import LoginImg from "url:../../src/img/Login-img.svg";
import LoginPath from "url:../../src/img/login-path.svg";

const buttonStyle = {
    backgroundColor: "#5E4FA2",
    color: "#FEC949",
    fontWeight: 700,
    fontSize: "18px",
    fontFamily: 'Montserrat',
    height: "50px",
    width: "500px",
    borderRadius: "8px",
    zIndex: "99",
    marginTop: "5%"
}

const buttonSignUp = {
    color: "#5E4FA2",
    fontWeight: 700,
    fontSize: "18px",
    fontFamily: 'Montserrat',
    height: "50px",
    width: "500px",
    borderRadius: "8px",
    border: "3px solid #5E4FA2",
}

const inputBoxStyle = {
    width: "500px"
}

const hrStyle = {
    marginBottom: "10%",
    marginTop: "10%",
    border: "1px solid #5E4FA2",
    opacity: "23%"
}

const imgStyle = {
    margin: "8% 25% 5%",
    width: "50%",
    height: "auto"
}

const h1Style = {
    color: "#5E4FA2",
    fontSize: "45px",
    fontWeight: "600",
    fontFamily: "Montserrat"
}

const pStyle = {
    color: "#5E4FA2",
    fontSize: "25px",
    fontWeight: "400"
}

const loginPathImg ={
    position: "absolute",
    width: "14%",
    height: "auto",
    fontFamily: "Montserrat sans-serif"
}

function MiddleSection(){
    return(<div className="heroStyle" id="home">
        <Container fluid>
            <Row>
                <img src={LoginPath} style={loginPathImg}/>
                <Col lg={6} sm={12} className="wholeColumn">
                        <div className="container">

                            <h1 className= "h1Style" >Sign In</h1>
                            <hr width="20%" align="left" className="hrStyle"/>
                            <p className= "pStyle" >
                                Welcome back to ICAF. Please insert your login details to admit the system.
                            </p>

                            <form >

                                <div className="form-group">
                                    <label htmlFor="age" className="form-label">Email : </label>
                                    <input style={inputBoxStyle} type="text" className="form-control" id="age" placeholder="Insert your email address"
                                           onChange={(event)=>{
                                               setAge(event.target.value)
                                           }}/>

                                </div>

                                <div className="form-group">
                                    <label htmlFor="age" className="form-label">Password : </label>
                                    <input style={inputBoxStyle} type="password" className="form-control" id="age" placeholder="Insert your password"
                                           onChange={(event)=>{
                                               setAge(event.target.value)
                                           }}/>

                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Remember me.
                                    </label>
                                </div>

                                <br/>

                                <Button style={buttonStyle} type="submit">Sign In</Button>
                                <br />
                                <hr width="70%" align="left" style={hrStyle}/>
                                <br />
                                <Button style={buttonSignUp} >Sign Up</Button>
                            </form>
                        </div>
                </Col>
                <Col lg={6} sm={12} style = {{backgroundColor: "#ECE6F2", paddingTop: "5%"}}>
                    <p className= "text-center" style={pStyle}>
                        Welcome back to
                    </p>
                    <h2 className="text-center" style={h1Style}>International Conference <br />
                        on <br />
                        Application Frameworks</h2>
                   <img src={LoginImg} style = {imgStyle} />
                </Col>
            </Row>
        </Container>
    </div>);
}

export default MiddleSection;