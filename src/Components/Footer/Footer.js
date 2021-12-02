import React from 'react'
import { Container,Image } from 'react-bootstrap'
import './Footer.css'
import icon from "../../images/icon3.jpg"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <Container  className="d-flex justify-content-around footer">
            <div >
                <Image  className="icn"src={icon} roundedCircle/>
                <br/>
                <h5>MOVEMENT</h5>
            </div>
            <div className="links" >
                <h6> Important Link</h6>
                <Link to="/plantSpecialists" style={{ textDecoration: 'none', color: 'white' }} >Plant Specialists</Link>
                <br/>
                <Link to="/plant-Event" style={{ textDecoration: 'none', color: 'white' }} >Be Volunteer</Link>
                <br/>
                <Link to="/makeGarden" style={{ textDecoration: 'none', color: 'white' }} >Make Garden</Link>
                <br/>
                <Link to="" style={{ textDecoration: 'none', color: 'white' }} >Cultural & Sports</Link>

            </div>
            <div  className="links">
                <h6>Contact Us</h6>
                <p>Housing Estate <br/>01951100225</p>
            </div>


        </Container>
    )
}

export default Footer
