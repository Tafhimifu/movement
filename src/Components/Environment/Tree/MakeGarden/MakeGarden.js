import React from 'react'
import { Card } from 'react-bootstrap'
import Planting from '../Planting/Planting'
import "./MakeGarden.css"
import indoor from '../../../../images/indoor.jpg'
import outdoor from '../../../../images/outdoor.jpg'
import { Link } from 'react-router-dom'
import Footer from '../../../Footer/Footer'

function MakeGarden() {
    return (
        <div>
            <Planting/>
            <div className="garden-head">
            <h2>You can help us make your community greener by planting a tree. Every individual contribution makes an impact.</h2> </div>
            <div className=" d-flex justify-content-around garden">
       <Link to={"/indoorPlant"} className="link" > 
        <Card className="bg-dark">
  <Card.Img src={indoor} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title><h2>Indoor Garden </h2></Card.Title>
  </Card.ImgOverlay>
</Card>
</Link>
<Link to={"/outdoorPlant"} className="link"><Card className="bg-dark">
  <Card.Img src={outdoor}alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title><h2>Outdoor Garden</h2></Card.Title>
  </Card.ImgOverlay>
</Card>
</Link>
</div>
       <Footer></Footer>     
        </div>
    )
}

export default MakeGarden
