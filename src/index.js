import React from 'react';
import ReactDOM from 'react-dom/client';
import Main_menu from './Navigation/Nav';
import Banner from './Banner/Banner';
import About from './About/About';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Main_menu/>

        <Banner/>

        <About/>
    </>
);