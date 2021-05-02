import React from 'react';
import LandingPageComponent from "./components/LandingPage/LandingPageComponent";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import App from './src/App';



function AF(){

    return (
        <Router>
             <div>
                 <Route path="/" exact component={LandingPageComponent}/>
                 <Route path="/registration" exact component={Registration}/>
                 <Route path="/events" exact component={App}/>

             </div>
        </Router>
    );
}

export default AF;