import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Card,Container,Image,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../../Home/NavBar/NavBar';
import './DustEvent.css'
import Footer from '../../Footer/Footer';

function DrainageEvent() {
    
    const [loadTeventData, setTeventLoadData] = useState([]);
useEffect(()=>{
   fetch('https://secret-shore-03641.herokuapp.com/dust')
   .then(res => res.json())
  .then(data => setTeventLoadData(data))
}, [])

    

 return (
     <div>
         <NavBar/>
         <Container >
     <div className=" head line-head text-center" > 
         <h2> Clean Dust,Save Locality From Odor Pollution</h2>
     </div>
     </Container>
     <Container >
     <div className="  d-flex justify-content-between  flex-xl-wrap
" >
         { 
           loadTeventData.map(data=>
            <div  className=" cinfo-text text-center">
             <Card >
                 <Card.Body>
                     <Card.Title>{data.title}</Card.Title>
                     
                     <Card.Text> 
                         <small> Place: {data.place}</small>
                         <br/>
                         <small>Date: {data.date}</small>
                         <br/>
                         <small> Community: {data.community}</small>
                         <br/>
                         <small>Activities :{data.activities}</small>

                         </Card.Text>
                     <Link to ="/dust-reg">
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
export default DrainageEvent;
