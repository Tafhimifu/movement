import React from 'react'
import './NavBar.css'
import { Navbar,Nav,NavDropdown,Container,Button, NavLink} from 'react-bootstrap'
import logo from '../../../images/logo192.png'
import { Link } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth"

function NavBar() {
  const { userData, logout } = useAuth();
    return (
        <div >
            <Navbar className="bar" bg="success" expand="lg" variant ="dark">
  <Container>
    <Navbar.Brand href=""><img className="logo" src={logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/planting">Planting</Nav.Link>
          <NavDropdown title="Women Empowerment " id="basic-nav-dropdown">
          <NavDropdown.Item href="/workshop&seminar">Workshop & Seminar</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Volunteer Community " id="basic-nav-dropdown">
          <NavDropdown.Item href="/plantEvent">Planting Events</NavDropdown.Item>
          <NavDropdown.Item href="/drain-event">Drainage Related Events</NavDropdown.Item>
          <NavDropdown.Item href="/dust-event">Trash Related Events</NavDropdown.Item>
          </NavDropdown>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/admin">
                                <Button color="inherit">Admin</Button>
                            </Link>
                            
         </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>

    )
}

export default NavBar
