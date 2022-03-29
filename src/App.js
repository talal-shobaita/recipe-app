import React from 'react';
import './App.css';
import Recipes from "./Components/Recipes";
import Unauthorized from "./Components/Unauthorized";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Authenticate from "./Components/Authenticate";
import Logout from "./Components/Logout";
import Home from "./Components/Home";
import Header from "./Components/Header";

export const API_BASE_URL = 'https://d3js492udcqpdm.cloudfront.net';
export const COGNITO_BASE_URL = 'https://recipe.auth.us-east-1.amazoncognito.com';
export const APP_REDIRECT_URI = 'https://ab3.shobaita.people.aws.dev/authenticate';
export const APP_CLIENT_ID = '738coo3jhas54jm97mjh5nmnmm';

export const LOGIN_URL =  `${COGNITO_BASE_URL}/login?response_type=code&client_id=${APP_CLIENT_ID}&redirect_uri=${APP_REDIRECT_URI}`


function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/recipes">
                    <Recipes/>
                </Route>
                <Route exact path="/unauthorized">
                    <Unauthorized/>
                </Route>
                <Route exact path="/authenticate">
                    <Authenticate/>
                </Route>
                <Route exact path="/logout">
                    <Logout/>
                </Route>
                <Route path='/login' component={() => { 
                        window.location.href = LOGIN_URL; 
                        return null;
                   }}>
                </Route>    
                   
            </Switch>
        </Router>
    );
}

export default App;
