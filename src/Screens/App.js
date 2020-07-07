import React from 'react';
import '../index.css';
import {Route} from 'react-router-dom';
import HomePage from './HomePage'
import PricePage from "./PricePage";
import ServicePage from "./ServicePage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";

function App() {
    return (

        <div>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path='/service' component={ServicePage}/>
            <Route exact path='/price' component={PricePage}/>
            <Route exact path='/contact' component={ContactPage}/>
        </div>
    );
}

export default App;



