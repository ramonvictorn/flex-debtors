import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// views
import Home from './Views/Home.jsx';
function AppRoutes(){
    return (
        <Router>
            <Route path="/" exact component={Home} />
        </Router>
    )
}
export default AppRoutes;