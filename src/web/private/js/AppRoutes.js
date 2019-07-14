import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import store from './store.js';
// views
import Home from './Views/Home.jsx';
function AppRoutes(){
    return (
        <Provider store={store}>
            <Router>
                <Route path="/" exact component={Home} />
            </Router>
        </Provider>
    )
}
export default AppRoutes;