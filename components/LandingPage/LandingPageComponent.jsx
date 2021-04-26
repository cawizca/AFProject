import React from 'react';
import AppBarComponent from "./AppBar/AppBarComponent";
import Hero from "./HeroSection/Hero";
import CardComponent from "./KeynotesComponent/CardComponent";

function LandingPageComponent(){
    return <div>
        <AppBarComponent />
        <Hero />
        <CardComponent />
    </div>;
}

export default LandingPageComponent;