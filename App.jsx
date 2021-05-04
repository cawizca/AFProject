import React from 'react';
import LandingPageComponent from "./components/LandingPage/LandingPageComponent";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import LoginPageComponent from "./components/LoginPage/LoginPageComponent";
import WorkshopComponent from "./components/WorkshopPage/WorkshopComponent";

import Bill from "./components/Payment/Bill";
import payment from "./components/Payment/payment";
import paymentsuccess from "./components/Payment/Payment_success";
function App(){

    return (
        <Router>
             <div>
                 <Route path="/" exact component={LandingPageComponent}/>
                 <Route path="/registration" exact component={Registration}/>
                 <Route path="/signin" exact component={LoginPageComponent}/>
                 <Route path="/workshop" exact component={WorkshopComponent}/>

                 <Route path="/bill" exact component={Bill}/>
                 <Route path="/payment" exact component={payment}/>
                 <Route path="/success" exact component={paymentsuccess}/>

             </div>
        </Router>
    );
}

export default App;