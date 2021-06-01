import React from 'react';
import AppBarComponent from "../LandingPage/AppBar/AppBarComponent";
import Items from "./WorkshopItemSection/ItemSection"
import TitleBar from "./DescriptionSection/TitleBar";

function WorkshopComponent() {
    return(
        <div>
            <AppBarComponent />
            <TitleBar />
            <Items />

        </div>
    );
}

export default WorkshopComponent;