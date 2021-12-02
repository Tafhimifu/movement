import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Card} from 'react-bootstrap';
import NavBar from '../../Home/NavBar/NavBar';
import './OurCommunity.css'
import bodyImage from "../../../images/ourCommunity.jpg"
import Footer from '../../Footer/Footer';
function OurCommunity() {
    const [loadTeam1LoadData, setTeam1LoadData] = useState([]);
useEffect(()=>{
   fetch('https://secret-shore-03641.herokuapp.com/team1Data')
   .then(res => res.json())
  .then(data => setTeam1LoadData(data))
}, [])
const [loadTeam2LoadData, setTeam2LoadData] = useState([]);
useEffect(()=>{
   fetch('https://secret-shore-03641.herokuapp.com/team2Data')
   .then(res => res.json())
  .then(data => setTeam2LoadData(data))
}, [])
const [loadTeam3LoadData, setTeam3LoadData] = useState([]);
useEffect(()=>{
   fetch('https://secret-shore-03641.herokuapp.com/team3Data')
   .then(res => res.json())
  .then(data => setTeam3LoadData(data))
}, [])
    return (
        <div>
         <NavBar/>
         
         <img className="boImg" src={bodyImage}/>
         <h4  className="headtext">Our Managing Team</h4>
     <div className="d-flex justify-content-between">
         
         { 
           loadTeam1LoadData.map(data=>
             
             <Card className="card-info">
                 <Card.Img variant="top" style={{ maxWidth: "286px" }} src={data.image} />
                 <Card.Body>
                     <Card.Title>{data.title}</Card.Title>
                     <Card.Title>{data.designation}</Card.Title>
                  </Card.Body>
             </Card>
             
             )
         }
     
     </div>
     <h4  className="headtext">Our Support Team</h4>
     <div className=" d-flex justify-content-between">
         { 
           loadTeam2LoadData.map(data=>
             
             <Card className="card-info">
                 <Card.Img variant="top" style={{ maxWidth: "286px" }} src={data.image} />
                 <Card.Body>
                     <Card.Title>{data.title}</Card.Title>
                     <Card.Title>{data.designation}</Card.Title>
            
                 </Card.Body>
             </Card>
             
             )
         }
     
     </div>
     <h4 className="headtext">Our Technical Team</h4>
     <div className="d-flex justify-content-between">
         { 
           loadTeam3LoadData.map(data=>
             
             <Card className="card-info">
                 <Card.Img variant="top" style={{ maxWidth: "286px" }} src={data.image} />
                 <Card.Body>
                     <Card.Title>{data.title}</Card.Title>
                     <Card.Title>{data.designation}</Card.Title>
            
                 </Card.Body>
             </Card>
             
             )
         }
     
     </div>
     <Footer></Footer>
     </div>
     
 );
};

export default OurCommunity
