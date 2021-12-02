import React from 'react'
import { useState,useEffect } from 'react';
import { Card,Button,Container} from 'react-bootstrap'
import Footer from '../../../Footer/Footer'
import Planting from '../Planting/Planting'
import './Nursery.css'

function Nursary() {
const [nurseryDataLoad,setNurseryData]=useState([])
const [shopDataLoad,setShopData]=useState([])
useEffect(()=>{
   fetch('https://secret-shore-03641.herokuapp.com/nurseriesData')
   .then(res => res.json())
  .then(data => setNurseryData(data))
}, [])
useEffect(()=>{
   fetch('https://secret-shore-03641.herokuapp.com/shopData')
   .then(res => res.json())
  .then(data => setShopData(data))
}, [])
    return (
        <div>
            <Planting></Planting>
<Container className=" d-flex justify-content-around">
    <div >
    { 
           nurseryDataLoad.map(data=>
    <div className="crd  d-flex justify-content-around">
    <img className="cimg" src={data.image}  />
<div  className=" ctxt">
<h3>{data.name}</h3>
    <strong>
        {data.location}
    </strong>
    <br/>
    <Button>Trees list</Button>
    </div>
    </div>
    
              )
            }
  </div>
</Container>
<Container className="nur">
              <div>
                <h4><b><u>Online Shop</u></b>  </h4>
              </div>
            <div className=" c-info d-flex justify-content-around">
            { 
          shopDataLoad.map(data=>
            <Card className="info" style={{ width: '20rem' }} >
  <Card.Img  src={data.image}/>
  <Card.Body>
    <Card.Title>{data.name}</Card.Title>
    <Card.Text>
    <a href={data.link} target="_blank">Go Shop</a>

    </Card.Text>
  </Card.Body>
</Card>
           )
   }
</div>
</Container>
<Footer></Footer>
</div>
    )
}

export default Nursary
