import React from 'react';
import LandingPageComponent from "./components/LandingPage/LandingPageComponent";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Registration from "./components/Registration/Registration";


function App(){

    return (
        <Router>
             <div>

                 <Route path="/" exact component={LandingPageComponent}/>
                <Route path="/registration" exact component={Registration}/>

             </div>
        </Router>
    );
}

export default App;