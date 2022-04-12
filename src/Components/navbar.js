import React, { Component } from 'react'
import { userData } from "./records"



export default class Navbar
 extends Component {
  render() {
    console.log(userData)
    return (
      <div>
        
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
          <a class="navbar-brand mb-0 h1" href="#">{userData.map(user =>{return (<span>{user.storeName}</span>)})}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {userData.map(user =>{return (<span>{user.userName}</span>)})}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Previous Orders</a></li>
                  <li><a class="dropdown-item" href="#">Profile Settings</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Logout</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Cart ({userData.map(user =>{return (<span>{user.cartValue}</span>)})})</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}
