
import './App.css';
import Home from './Components/Home/Home/Home';
import AuthProvider from './context/AuthProvider'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Planting from './Components/Environment/Tree/Planting/Planting';
import PlantSpecialist from './Components/Environment/Tree/PlantDoctor/PlantSpecialist';
import GardenCommunity from './Components/Environment/Tree/GardenCommunity/GardenCommunity';
import Nursary from './Components/Environment/Tree/PlantShop/Nursary';
import MakeGarden from './Components/Environment/Tree/MakeGarden/MakeGarden';
import Indoor from './Components/Environment/Tree/MakeGarden/Indoor';
import PlantEvent from './Components/Volunteer/PlantingEvent/PlantEvent';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import PrivateRoute from './Components/Login/PrivateRoute';
import Admin from './Components/Login/Admin';
import DustEvent from './Components/Volunteer/DustEvent/DustEvent';
import DrainageEvent from './Components/Volunteer/DrainageEvent/DrainageEvent';
import WorkShop from './Components/WomenEmp/WorkShop';
import OurCommunity from './Components/Home/OurCommunity/OurCommunity';
import OutdoorPlant from './Components/Environment/Tree/MakeGarden/OutdoorPlant';

import PlantReg from './Components/Volunteer/PlantingEvent/PlantReg';
import DrainReg from './Components/Volunteer/DrainageEvent/DrainReg';
import DustReg from './Components/Volunteer/DustEvent/DustReg';








function App() {
  
  return (
    <div >
    <AuthProvider>
  <Router> 
       <Switch>
       <Route exact path="/">
        <Home />
      </Route>
          <Route path='/home' >
            <Home></Home>
          </Route>
          <Route path='/planting' >
            <Planting></Planting>
          </Route>
          <Route path='/plantSpecialists' >
          <PlantSpecialist/>
          </Route>
          <Route path='/gardenCommunity'>
          <GardenCommunity/>
          </Route>
          <Route path='/nursery' >
          <Nursary/>
          </Route>
          <Route path='/makeGarden' >
          <MakeGarden/>
          </Route>
          <Route path='/indoorPlant' >
          <Indoor/>
          </Route>
          <Route path='/plantEvent'>
          <PlantEvent/>
          </Route>
          <Route path='/plant-reg'>
          <PlantReg/>
          </Route>
          <Route path='/drain-reg'>
          <DrainReg/>
          </Route>
          <Route path='/dust-reg'>
          <DustReg/>
          </Route>
          <Route path="/login">
          <Login/>
          </Route>
          <Route path='/signUp' >
          <SignUp/>
          </Route>
          
            <Route  path='/drain-event'>
          <DrainageEvent></DrainageEvent>
            </Route>
            
            <Route  path='/dust-event'>
           <DustEvent></DustEvent>
            </Route>
            <Route  path='/workshop&seminar'>
              <WorkShop></WorkShop>
            </Route>
           
            <Route  path='/outdoorPlant'>
            <OutdoorPlant></OutdoorPlant>
            </Route>
            <PrivateRoute path='/admin'>
              <Admin></Admin>
              </PrivateRoute>
            
            <Route  path='/ourCommunity'>
          <OurCommunity></OurCommunity>
            </Route>
        
        
        </Switch>  
       
    
    </Router>
    </AuthProvider>
  
    </div>
  );
}

export default App;
