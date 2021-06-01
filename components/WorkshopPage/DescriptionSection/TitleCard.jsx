import React from 'react';
import "../../../public/Styles/titleCard.css";

function TitleCard(props){
    return(
        <div className="d-flex justify-content-center">
            <div className="title-card d-flex justify-content-center" >
                <div className="col-lg-8" style={{marginTop:"5%", marginLeft:"10%"}}>
                    <h4 className="titleName">{props.title}</h4>
                    <p className="titleDesc">{props.description}</p>
                </div>
                <div className="col-lg-4" align="center" style={{marginTop:"1.5%",marginRight:"5%"}}>
                    <img className="imageUrl" src ={props.imgURL} />
                </div>
            </div>
        </div>
    )
}

export default TitleCard;