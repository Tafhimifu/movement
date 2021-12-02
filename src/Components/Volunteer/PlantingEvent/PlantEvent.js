import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Card,Container,Image,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../../Home/NavBar/NavBar';
import plant from '../../../images/plant.jpg'
import './PlantEvent.css'
import Footer from '../../Footer/Footer';

function PlantEvent() {
    
    const [loadTeventData, setTeventLoadData] = useState([]);
useEffect(()=>{
   fetch('https://secret-shore-03641.herokuapp.com/treeData')
   .then(res => res.json())
  .then(data => setTeventLoadData(data))
}, [])

    

 return (
     <div>
         <NavBar/>
         <Container >
     <div className=" head" > 
         <h1>Ongoing Plant Events, Do Registration, Grow Greener Locality</h1>
     </div>
     <div >
         <Image className="himg" src={plant} roundedCircle/>
     </div>
     </Container>
     <Container >
     <div className="  d-flex justify-content-between  flex-xl-wrap
" >
         { 
           loadTeventData.map(data=>
            <div  className=" cinfo text-center">
             <Card >
                 <Card.Img variant="top" style={{ maxWidth: "300px" }} src={data.image} />
                 <Card.Body>
                     <Card.Title>{data.title}</Card.Title>
                     
                     <Card.Text>
                        
                             <h6>Motto: {data.motto}</h6>      
                         <small> Place: {data.place}</small>
                         <br/>
                         <small>Date: {data.date}</small>
                         <br/>
                         <small> Community: {data.community}</small>
                         <br/>
                         <small>Activities :{data.activities}</small>
                            <br/>
                         <small> Registration Deadline: {data.regdate}</small>

                         </Card.Text>
                     <Link to ="/plant-reg">
                     <Button >Join</Button>
                     </Link>
                 </Card.Body>
             </Card>
             </div>
             )
         }
     
     </div>
     </Container>
     <Footer></Footer>

     </div>
     
 );
};
export default PlantEvent;
