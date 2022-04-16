import React, { Component } from 'react'
import { userData } from "./records"


export default class Slider
 extends Component {
  render() {

    // {userData.map(user =>{return ( 
    //     user.bannerDetails.map(imgz=>{
    //         return (imgz.image1)
    //     })
    //  )})}

    return (

        

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require('./img/ss1.png')}  class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={require('./img/ss2.png')} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={require('./img/ss3.png')}class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




    )
  }
}

