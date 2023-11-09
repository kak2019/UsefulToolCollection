import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./home";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/app" element={<App />} />
                {/* Add more Route components here for additional paths */}
                <Route path = "/" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


reportWebVitals();
