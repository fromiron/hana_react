import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import Header from './header';
import MainSlider from "./slider";
import Service from "./sevice";
import Use from "./use";


ReactDOM.render(
    <>
        <Header/>
        <MainSlider/>
        <Service/>
        <Use/>
    </>
    ,
    document.getElementById('root')
);


serviceWorker.unregister();
