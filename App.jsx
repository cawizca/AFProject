import React from 'react';
import LandingPageComponent from "./components/LandingPage/LandingPageComponent";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import LoginPageComponent from "./components/LoginPage/LoginPageComponent";
import WorkshopComponent from "./components/WorkshopPage/WorkshopComponent";


function App(){

    return (
        <Router>
             <div>
                 <Route path="/" exact component={LandingPageComponent}/>
                 <Route path="/registration" exact component={Registration}/>
                 <Route path="/" exact component={LandingPageComponent}/>
                 <Route path="/signin" exact component={LoginPageComponent}/>
                 <Route path="/" exact component={LandingPageComponent}/>
                 <Route path="/workshop" exact component={WorkshopComponent}/>

             </div>
        </Router>
    );
}

export default App;