import React from "react";
import "../../../public/Styles/card.css";
import {Avatar} from "@material-ui/core";

function Card(){

    return (<div className="card-box d-flex justify-content-center">
        <Avatar className="avatar" src= "https://mercon.uom.lk/img/speakers/1.png" />
        <h4 className="profName">Prof. John L. Volakis</h4>
        <p className="profDesc text-center">College of Engineering and Computing, Florida International University, USA</p>

    </div>
    );
}

export default Card;