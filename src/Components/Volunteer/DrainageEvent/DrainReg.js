import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory
 } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import NavBar from '../../Home/NavBar/NavBar';



import './DrainReg.css';



const DrainReg = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory()
  const [regInfo, setRegInfo] = useState({
    fullName:' ',
    email:' ',
    number: ' ' ,
    description:' ',
    event:' '
  });
  const handleOnBlur = e => {
    e.preventDefault();
    const field = e.target.id;
    const value = e.target.value;
    const newInfo = { ...regInfo };
    newInfo[field] = value;
    setRegInfo(newInfo);
}

  const onNewSubmit = e =>  {
    
    const newSubmit = {...regInfo};
    fetch('https://secret-shore-03641.herokuapp.com/drainReg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({newSubmit})
      })
      .then(res => res.json())
      .then(data => {
        
            history.push('/drain-event ')
        
      });
      
      

  }
 return (
   <div>
   <NavBar/>
     <div className="jtext text-center"> 
       <h2>Registration</h2>
     </div>
  <div className="registration-form" >
    <form onSubmit={handleSubmit(onNewSubmit)}>
      <input name="fullName"  id="fullName"  value={regInfo.fullName}  placeholder="Full Name" onChange={handleOnBlur} />
    
     
      <input name="email"  id="email"  value={regInfo.email}   placeholder=" Email" onChange={handleOnBlur}/>
     
      <input name="number" id="number"  value={regInfo.number}  placeholder="Phone Number" onChange={handleOnBlur} />
     
      <input name="description" id="description"  value={regInfo.description}   placeholder="Self-description" onChange={handleOnBlur}/>
      <input   name="event" id="event"   placeholder="Event Name" value={regInfo.event} onChange={handleOnBlur}/>
     <input type="submit" />
    </form>
  </div>
  <Footer></Footer>
  </div>
    );
};

export default DrainReg;