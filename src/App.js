import React, { Component } from 'react';
import './App.css';
import './brands.css';
import DemoFunc from './Components/demo';
import Home from './Components/Home';
import $ from 'jquery'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  const operator = 0;
  return (
    <div className="App">

<Router>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/demo' element={<DemoFunc/>}/>
  </Routes>

<Link to="/home">HomePage</Link><br/>
<Link to="/demo">DemoFunction</Link>


</Router>


    </div>
  );
}

export default App;
