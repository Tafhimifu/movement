import React from 'react'
import Planting from '../Planting/Planting'
import "./PlantSpecialists.css"
import doctor from '../../../../images/doctor.jpg'
import { Col,Row,Container,Image } from 'react-bootstrap'
import Footer from '../../../Footer/Footer'

function PlantSpecialist() {
    return (
        <div>
            <Planting></Planting>
            <Container className="spec">
                <h2> Our Plant Specialists</h2>
    <Row>
        <Col sm={3} className="work">
        <Image className="wimage"src={doctor} roundedCircle/>
          <div className="work"> <h5>Jerin Akter</h5>
           <small>You can help build a future where people live in harmony with nature.</small>
        </div>
        </Col>
        <Col sm={3} className="work"><Image className="wimage"src={doctor} roundedCircle/>
        <div className="work"> <h5>Rahima Khatun</h5>
           <small>You can help build a future where people live in harmony with nature.</small>
           </div>
           </Col>
        <Col sm={3}className="work"><Image className="wimage" src={doctor}roundedCircle/>
        <div className="work"><h5>Mitu Akter</h5>
           <small>You can help build a future where people live in harmony with nature.</small>
           </div> 
           </Col>
        <Col sm={3}className="work"><Image className="wimage"src={doctor} roundedCircle/>
        <div className="work"> <h5>Mohima Niya</h5>
           <small>You can help build a future where people live in harmony with nature.</small>
           </div>
           </Col>
    </Row>
</Container>
<Footer></Footer>
        </div>
    )
}

export default PlantSpecialist
