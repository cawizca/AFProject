import React from "react";
import Button from "@material-ui/core/Button";

const buttonInStyle = {
    color: "#5E4FA2",
    border: "1px solid #5E4FA2",
    fontWeight: 600,
    fontSize: "15px",
    fontFamily: 'Montserrat',
    zIndex: "99",
    marginLeft: "25px"
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

function AppBarButtons(){
    return (  <div>
            <Button variant="outlined" style={buttonInStyle} href="/signin">Sign In</Button>
            <Button variant="outline-success" style={buttonUpStyle} href="/registration" >Sign Up</Button>
        </div>
        );
}

export default AppBarButtons;