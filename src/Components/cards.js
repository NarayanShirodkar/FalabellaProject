import React, {Component} from 'react'
import {Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg} from 'reactstrap';
import s1 from './img/img1.png';
import s2 from './img/img2.png';
import s3 from './img/img3.png';
import { userData } from "./records"

function Cards(props) {
    return ( 
        <div>
            <div className='cards-div'>
                <h1>Exciting offers and discounts!</h1>
                

                <div class="container">
  <div class="row">
    <div class="col">
        <Card style={{width:'25rem' }}>
            <CardImg style={{width:'25rem' }} variant="top" src={s1} />
                <CardBody>
                <CardTitle><strong>
                {props.data.offerDetails.heading1}
                    </strong> </CardTitle>
                    <CardText>
                    {props.data.offerDetails.des1}
                     </CardText>
                    <a href="#" class="btn btn-primary">
                    {props.data.offerDetails.button1}
                    </a>
                </CardBody>
         </Card>                    
    </div>
    <div class="col">
        <Card style={{width:'25rem' }}>
            <CardImg style={{width:'25rem' }} variant="top" src={s2}/>
                <CardBody>
                <CardTitle><strong>
                {props.data.offerDetails.heading2}
                    </strong> </CardTitle>
                    <CardText>
                    {props.data.offerDetails.des2}
                     </CardText>
                    <a href="#" class="btn btn-primary">
                    {props.data.offerDetails.button2}
                    </a>
                </CardBody>
         </Card>                    
    </div>
    <div class="col">
        <Card style={{width:'25rem' }}>
            <CardImg style={{width:'25rem' }} variant="top" src={s3} />
                <CardBody>
                <CardTitle><strong>
                {props.data.offerDetails.heading3}
                    </strong> </CardTitle>
                    <CardText>
                    {props.data.offerDetails.des3}
                     </CardText>
                    <a href="#" class="btn btn-primary">
                    {props.data.offerDetails.button3}
                    </a>
                </CardBody>
         </Card>                    
    </div>
</div>
</div>

            </div>
        </div>
     );
}

export default Cards;
