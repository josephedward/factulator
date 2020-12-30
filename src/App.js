import React from "react";
import { BrowserRouter as Router, Switch, Route, 
    // Link
 } from "react-router-dom";
import Calculator from "./Calculator";


export default function App(){
return(
    <Router>
        <Switch>
            <Route exact path="/" component={Calculator}/>
            {/* <Route exact path="/test" component={Test}/> */}
        </Switch>
    </Router>)
}