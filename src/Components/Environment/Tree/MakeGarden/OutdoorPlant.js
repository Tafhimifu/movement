import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import Footer from '../../../Footer/Footer';

import Planting from '../Planting/Planting'
import './OutdoorPlant.css'
function OutdoorPlant() {
const [loadData, setLoadData] = useState([]);
useEffect(()=>{
   fetch('https://secret-shore-03641.herokuapp.com/outdoorData')
   .then(res => res.json())
  .then(data => setLoadData(data))
}, [])
 return (
     <div>
         <Planting/>
         <h3 className="sug">suggested outdoor plants for your yield</h3>
     <Container className=" d-flex justify-content-around">
    <div >
    { 
         loadData.map(data=>
            <div className=" plantCd d-flex justify-content-around border-bottom">
            <Row>
       <Col xm={4}> <img className="plantImg" src={data.image} /></Col>
<Col xm={8}><div>
<h3>{data.title}</h3>
<h6   className="mainText "><b>Attribute:</b></h6>
<small>{data.attribute} </small>

    <h6   className="mainText "><b>Care Procedure:</b></h6>
    <small>{data.care}</small>
    </div>
   </Col>
    </Row>
    </div>
              )
            }
  </div>
</Container>
<Footer></Footer>
     </div>
     
 );
};
export default OutdoorPlant
