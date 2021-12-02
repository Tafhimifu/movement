import React from 'react'
import './Home.css'
import bodyImg from "../../../images/body.png"
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import  icon1  from "../../../images/icon.jpg"
import  icon2  from "../../../images/icon2.jpg"
import  icon3  from "../../../images/icon3.jpg"
import plant from "../../../images/plant.jpg"
import women from "../../../images/women.jpg"
import dustbin from "../../../images/dustbin.jpg"
import drainage from "../../../images/drainage.jpg"
import cultural from "../../../images/cultural.png"
import charity from "../../../images/charity.jpeg"
import back from "../../../images/back1.png"
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'


function Home() {
    return (
        <div> 
            <NavBar/>
                        <div  className="body">
               <Row>
                  <Col xm={6}><img className="bimg" src={bodyImg}/></Col>
                  <Col xm={6}>
                      <div  className="ctx">
                      <h4>WHO WE ARE</h4>
                      <p>For 60 years, WWF has worked to help people and nature thrive. <br/>
 As the world’s leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.</p>
 </div>
    <div className="sup">
           <h6  className="ct"><b><u>Our Support Partner</u></b></h6>
               <Image className="ctz" src={icon1} thumbnail />
               <Image   className="ctz"src={icon2} thumbnail/>
               <Image   className="ctz"src={icon3}thumbnail/>
        
</div>
                  </Col>
              </Row>
            </div>

<div className="goal">
    <Container>
    <div className="head"> <h1>HOW WE WORK</h1></div>
    <h6 className="hd">For Nature, For People, Forever</h6>
    <p>WWF works to help local communities conserve the natural resources they depend upon; transform markets and policies toward sustainability; and protect and restore species and their habitats. Our efforts ensure that the value of nature is reflected in decision-making from a local to a global scale.

WWF connects cutting-edge conservation science with the collective power of our partners in the field, more than 1 million supporters in the United States and 5 million globally, and our partnerships with communities, companies, and governments.

Today, human activities put more pressure on nature than ever before, but it’s also humans who have the power to change this trajectory. Together, we can address the greatest threats to life on this planet and protect the natural resources that sustain and inspire us.</p>
</Container>
</div>
<Container>
    <h6 className="hd" >Our work is focused around six ambitious goals:</h6>
    <Row>
        <Col sm={2} className="work">
        <Image className="wimage"src={plant} roundedCircle/>
          <div className="work"> <h5>Planting</h5>
           <small>You can help build a future where people live in harmony with nature.</small>
        </div>
        </Col>
        <Col sm={2} className="work"><Image className="wimage"src={dustbin} roundedCircle/>
        <div className="work"> <h5>Dustbin</h5>
           <small>You can help build a future where people live in harmony with nature.</small>
           </div>
           </Col>
        <Col sm={2}className="work"><Image className="wimage" src={cultural}roundedCircle/>
        <div className="work"><h5>Cultural</h5>
           <small>You can help build a future where people live in harmony with nature.</small>
           </div> 
           </Col>
        <Col sm={2}className="work"><Image className="wimage"src={women} roundedCircle/>
        <div className="work"> <h5>Women</h5>
           <small>You can help build a future where people live in harmony with nature.</small>
           </div>
           </Col>
        <Col sm={2}className="work"><Image className="wimage" src={drainage} roundedCircle/>
        <div className="work"> <h5>Drainage</h5>
           <small>You can help build a future where people live in harmony with nature.</small></div></Col>
        <Col sm={2}className="work"><Image className="wimage" src={charity} roundedCircle/>
        <div className="work"><h5>Charity</h5>
           <small>You can help build a future where people live in harmony with nature.</small></div></Col>
    </Row>
</Container>
<Container className="d-flex justify-content-around">
    <div >
<Link to="/ourCommunity">
<Card className=" bg-dark ctxtt">
  <Image  src={back} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title> <h2>Our Community </h2></Card.Title>
  </Card.ImgOverlay>
</Card>
</Link>
</div>
<div className="quote">
    <h3>“Conservation endures as a living discipline because it is inhabited by a magnificent collection of people. Only by working together can we create solutions to the most vexing problems we face.”
    </h3>
    <strong>
        <a className=" name" href="" >Carters Roberts</a>
    </strong>
    <div>
    <em className="teg">President & CEO</em>
    </div>
    </div>
</Container>
<Footer></Footer>
        </div>
    )
}

export default Home
