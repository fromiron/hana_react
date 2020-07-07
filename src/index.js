import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './Components/serviceWorker';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './Screens/App';


ReactDOM.render(
    <>
        <BrowserRouter>
            <App/>
        </BrowserRouter>

    </>
    ,
    document.getElementById('root')
);


serviceWorker.unregister();
