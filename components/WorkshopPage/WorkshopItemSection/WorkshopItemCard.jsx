import React from 'react';
import "../../../public/Styles/card.css";
import Button from "@material-ui/core/Button";
import { UilTrash } from '@iconscout/react-unicons'

const buttonColor ={
    position: "absolute",
    backgroundColor:"#5E4FA2",
    color:"white",
    fontFamily: "Poppins",
    borderRadius: "12px",
    height: "60px",
    right: "2%",
    bottom:"2%"
}

function WorkshopItemCard(props){
    return(
        <div>
        <div className="card-box d-flex justify-content-center ">
            <div>
                <img src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="card-image"/>
                <h4 className="card-topic">{props.topic}</h4>
                <p className="card-text">{props.description}</p>
                <p className="card-text">Date and time</p>
                <Button type="submit" size="small" variant="contained" style={buttonColor}><UilTrash style={{width:"80%", height: "auto"}}/> </Button>
            </div>
        </div>
        </div>

    )
}

export default WorkshopItemCard;