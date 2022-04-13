import React, { Component } from 'react'
import { userData } from "./records"
import {toast,Slide, Zoom, Flip, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()


export default class Alert
 extends Component {
  render() {
    const notify = () => {
      toast('Use Code: FLAT50 for 50% off on your cart items. Happy Shopping!', {
        toastId: '001',
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 9000,
        transition: Zoom
      })
    }
    return (
      <div>

    

          {notify()}
    </div>
    )
  }
}
