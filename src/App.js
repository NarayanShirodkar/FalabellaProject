import React, { Component } from 'react';
import './App.css';
import './brands.css';
import Navbar from './Components/navbar';
import Brands from './Components/brands';
import Slider from './Components/slider';
import Cards from './Components/cards';
import Footer from './Components/footer';
import Alert from './Components/alert';
import { userData } from "./Components/records"
import DemoFunc from './Components/demo';
import Home from './Components/Home';
import $ from 'jquery'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  const operator = 1;
  return (
    <div className="App">

<Router>
  <Routes>
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/demo' element={<DemoFunc/>}/>
  </Routes>

<Link to="/home">HomePage</Link>
<Link to="/demo">DemoFunction</Link>


</Router>


    </div>
  );
}

export default App;
