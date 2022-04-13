import React, {Component} from 'react'
import {Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg} from 'reactstrap';
import s1 from './img/img1.png';
import s2 from './img/img2.png';
import s3 from './img/img3.png';
import { userData } from "./records"

export default class Cards
 extends Component {
  render() {

    return (
        <div>
            <div className='cards-div'>
                <h1>Exciting offers and discounts!</h1>

                <div class="container">
  <div class="row">
    <div class="col">
        <Card style={{width:'25rem' }}>
            <CardImg style={{width:'25rem' }} variant="top" src={s1}/>
                <CardBody>
                <CardTitle><strong>{userData.map(user =>{return ( user.offerDetails.map(od=>{return (od.heading1)}))})} </strong> </CardTitle>
                    <CardText>
                    {userData.map(user =>{return ( user.offerDetails.map(od=>{return (od.des1)}))})}
                     </CardText>
                    <a href="#" class="btn btn-primary">{userData.map(user =>{return ( user.offerDetails.map(od=>{return (od.button1)}))})}</a>
                </CardBody>
         </Card>
                            
    </div>
    <div class="col">
        <Card style={{width:'25rem' }}>
            <CardImg style={{width:'25rem' }} variant="top" src={s2}/>
                <CardBody>
                <CardTitle><strong>{userData.map(user =>{return ( user.offerDetails.map(od=>{return (od.heading2)}))})} </strong> </CardTitle>
                <CardText>
                    {userData.map(user =>{return ( user.offerDetails.map(od=>{return (od.des2)}))})}
                     </CardText>
                    <a href="#" class="btn btn-primary">{userData.map(user =>{return ( user.offerDetails.map(od=>{return (od.button2)}))})}</a>
                </CardBody>
         </Card>
    </div>
    <div class="col">
        <Card style={{width:'25rem' }}>
            <CardImg style={{width:'25rem' }} variant="top" src={s3}/>
                <CardBody>
                <CardTitle><strong>{userData.map(user =>{return ( user.offerDetails.map(od=>{return (od.heading3)}))})} </strong> </CardTitle>
                <CardText>
                    {userData.map(user =>{return ( user.offerDetails.map(od=>{return (od.des3)}))})}
                     </CardText>
                    <a href="#" class="btn btn-primary">{userData.map(user =>{return ( user.offerDetails.map(od=>{return (od.button3)}))})}</a>
                </CardBody>
         </Card>           
    </div>
  </div>
</div>

            </div>
        </div>
    )
  }
}
