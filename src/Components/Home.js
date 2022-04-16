import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './navbar';
import Brands from './brands';
import Slider from './slider';
import Cards from './cards';
import Footer from './footer';
import Alert from './alert';
import { userData } from "./records"
import DemoFunc from './demo';
import $ from 'jquery'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function Home() {
    const operator = 0;
    return ( 
        <div>


<Navbar data={userData[operator]} />

{/* 
{userData.map(userData=>userData)[operator].comp1}
{userData.map(userData=>userData)[operator].comp2}
{userData.map(userData=>userData)[operator].comp3} 
*/}

{/* {userData.map(comp1=>comp1.comp1)}
{userData.map(comp2=>comp2.comp2)}
{userData.map(comp3=>comp3.comp3)} */}

{(userData[0].sliderVisible)?<Slider data={userData[operator]} />:null}
{(userData[0].brandsVisible)?<Brands data={userData[operator]} />:null}
{(userData[operator].cardsVisible)?<Cards data={userData[operator]} />:null}


<Footer data={userData[operator]} />


{(userData[operator].alertVisible)?<Alert/>:null}






        </div>
     );
}

export default Home;