import React, {Component} from 'react'
import {Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg} from 'reactstrap';
import s1 from './img/img1.png';
import s2 from './img/img2.png';
import s3 from './img/img3.png';

export default class Cards
 extends Component {
  render() {
    return (
        <div>
            <div className='cards-div'>
                <h1>Featured Cards</h1>

                <div class="container">
  <div class="row">
    <div class="col">
        <Card style={{width:'25rem' }}>
            <CardImg style={{width:'25rem' }} variant="top" src={s1}/>
                <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                     </CardText>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </CardBody>
         </Card>
                            
    </div>
    <div class="col">
        <Card style={{width:'25rem' }}>
            <CardImg style={{width:'25rem' }} variant="top" src={s2}/>
                <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                     </CardText>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </CardBody>
         </Card>
    </div>
    <div class="col">
        <Card style={{width:'25rem' }}>
            <CardImg style={{width:'25rem' }} variant="top" src={s3}/>
                <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>
                         Some quick example text to build on the card title and make up the bulk of the card's content.
                     </CardText>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
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
