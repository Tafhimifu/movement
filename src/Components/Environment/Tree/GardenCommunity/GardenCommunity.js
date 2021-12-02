import React from 'react'
import Planting from '../Planting/Planting'
import './GardenCommunity.css'
import { Col,Row,Container,Image } from 'react-bootstrap'
import doctor from '../../../../images/doctor.jpg'
import Footer from '../../../Footer/Footer'

function GardenCommunity() {
    return (
        <div>
            <Planting></Planting>
            <Container className="gd">
                <h2> Our Garden Community</h2>
    <Row>
        <Col sm={3} className="work">
        <Image className="wimage"src={doctor} roundedCircle/>
          <div className="work"> <h5>Sarkar Rahman</h5>
           <small>You can help build a future where people live in harmony with nature.</small>
        </div>
        </Col>
        <Col sm={3} className="work"><Image className="wimage"src={doctor} roundedCircle/>
        <div className="work"> <h5>Plabon Mitra</h5>
           <small>You can help build a future where people live in harmony with nature.</small>
           </div>
           </Col>
        <Col sm={3}className="work"><Image className="wimage" src={doctor}roundedCircle/>
        <div className="work"><h5>Falguni Rahman</h5>
           <small>You can help build a future where people live in harmony with nature.</small>
           </div> 
           </Col>
        <Col sm={3}className="work"><Image className="wimage"src={doctor} roundedCircle/>
        <div className="work"> <h5>Akash Hasan</h5>
           <small>You can help build a future where people live in harmony with nature.</small>
           </div>
           </Col>
    </Row>
</Container>
<Footer></Footer>
        </div>
    )
}

export default GardenCommunity
