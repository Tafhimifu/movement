import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import {Card, Carousel, Container,Button} from 'react-bootstrap';
import NavBar from '../Home/NavBar/NavBar';
import workshop from '../../images/workshop.jpg'
import workshop2 from '../../images/workshop2.jpg'
import workshop3 from '../../images/workshop3.jpg'
import shop1 from '../../images/shop1.jpg'
import shop2 from '../../images/shop2.jpeg'
import shop3 from '../../images/shop3.jpg'
import './WorkShop.css'
import Footer from '../Footer/Footer';



function WorkShop() {
    
    

 return (
     <div>
         <NavBar/>
         <Carousel>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 wimg"
      src={workshop}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 wimg"
      src={workshop2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100 wimg"
      src={workshop3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<div>
  <h1 className="head"> Women's Workshop is</h1>
  <div className="d-flex justify-content-start">
  <Card className="bg-dark  women-text">
  <Card.Img src={shop1} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Text>
    <h3>A programme for women to try out new ideas, new skills and to get support for next steps</h3>
    </Card.Text>
  </Card.ImgOverlay>
</Card>
<Card className="bg-white  women-text">
  <Card.Img src={shop2} alt="Card image" />
  <Card.ImgOverlay>
    
  </Card.ImgOverlay>
</Card>
<Card className="bg-dark  women-text">
  <Card.Img src={shop3}alt="Card image" />
  <Card.ImgOverlay>
    <Card.Text>
    <h3>A community space where women can meet up, use our office facilities and find out what support is available.</h3>
    </Card.Text>
  </Card.ImgOverlay>
</Card>
  </div>
</div>
    <Container>
    <Card>
  <Card.Header> <h1>FEATURED NEWS</h1></Card.Header>
  <Card.Body>
    <Card.Title>Stitches for Survival – Craftivism in Action</Card.Title>
    <Card.Text>
    This is our chance to join in with the ‘Stitches for Survival’ project leading up to the global environment conference taking place in Glasgow later this year. Here’s some information about it:

“Stitches For Survival is a group of knitters, crocheters, stitchers and crafters from across the UK and beyond with a heart-felt message to the COP26 climate talks to be held in Glasgow 1–12 November 2021.

It is time to put the Earth — the basis for our very survival — and not money, centre stage in political decisions. This is the time to take bold and binding action to stop the devastating climate havoc and ecological breakdown that is evident across the world.

This last year has shown how radically our lives can change overnight when the political will is there and people take responsibility. It is time to act with the same urgency on the climate and ecological crisis!

We are knitting, crocheting, stitching and crafting 1.5 miles of climate messages for the negotiators to urge them to take bold and binding action together. Mass-craftivism to put the Earth centre-stage at COP26!

The length of the scarf represents the 1.5°C target in the Paris Agreement.

The Stitches For Survival scarf will be used for campaigning locally and nationally in the lead up to COP26. During the conference we will display it near the SECC conference centre where the talks are taking place.”

After COP26 the scarf will be repurposed into blankets for refugee communities. Some of the more creative sections will be kept for an exhibition, and be used for ongoing campaigning.”

Read more at https://stitchesforsurvival.earth/

 So on alternate Tuesdays between now and October we will be meeting up to talk climate hange while we knit or sew our individual squares with the aim of putting them together into a 60cm by 100cm piece. Bring your blue and green wool / material along and let’s work out what we can make as our contribution and statement about the environment
    </Card.Text>
  </Card.Body>
</Card>
    </Container>
     <Container className="d-flex justify-content-around">
     <Card>
  <Card.Header>Workshop event</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Read</Button>
  </Card.Body>
</Card>
<Card>
  <Card.Header>Latest News</Card.Header>
  <Card.Body>
    <Card.Title>18 November 2021 18:00 ~ Remembering Eleanor Rathbone – Mother of Child Benefit – Crossroads Women & The Remembering Eleanor Rathbone Group – Online</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Read</Button>
  </Card.Body>
</Card>
         </Container>
     <Footer></Footer>
     
     </div>
    
     
 );
};
export default WorkShop;
