import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../../../Home/NavBar/NavBar'
import './Planting.css'

export default function Planting() {
    return (
        <div>
            <NavBar></NavBar>
            <div className="plant-header">
            <h1>Planting</h1>
           <h4>Conserve the world's most important forests to sustain nature's diversity, benefit our climate, and support human well-being</h4>
            </div>
            
                <div className="plant-nav border-bottom border-success d-flex justify-content-center">
                <Link to={"/plantSpecialists"} className="link">  <h6>Plant Specialists   &nbsp;  ||  &nbsp;</h6></Link>
                <Link to={"/nursery"}  className="link">    <h6>  &nbsp; Nursery  &nbsp;  ||  &nbsp;</h6></Link>
                <Link to={"/gardenCommunity"}  className="link">  <h6> &nbsp; Garden Community   &nbsp;  ||  &nbsp;</h6></Link>
                <Link to={"/makeGarden"}  className="link">  <h6> &nbsp; Make Garden </h6></Link>
            </div>
        </div>
    )
}
