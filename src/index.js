import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./home";
import Select from './select'

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import ProgressChart from "./progress";
import Show from "./multiprogress";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/app" element={<App />} />
                {/* Add more Route components here for additional paths */}
                <Route path = "/" element={<Home/>}></Route>
                <Route path = "/progress" element={<Show/>} ></Route>
                <Route path = "/Select" element={<Select/>} ></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


reportWebVitals();
