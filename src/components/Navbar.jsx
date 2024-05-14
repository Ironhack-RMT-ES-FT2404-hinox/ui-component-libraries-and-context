import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';

function MyNavbar() {

  const { isDarkTheme, handleToggleTheme } = useContext(ThemeContext)
  
  return (
    <Navbar expand="lg" bg={isDarkTheme ? "dark" : "light"} data-bs-theme={isDarkTheme ? "dark" : "light"}>

    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
    <button onClick={handleToggleTheme}>☀️/🌑</button> 

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="me-auto">

      <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/book/list">Book List</Nav.Link>
      <Nav.Link as={Link} to="/book/add">Add a Book</Nav.Link>
      
      </Nav>      

    </Navbar.Collapse>
      {/* 
      <Link to="/">Home</Link>
      <Link to="/contact">Contacts</Link>
      <Link to="/about">About</Link>
      <Link to="/book/list">Book List</Link>
      <Link to="/book/add">Add a Book</Link>
      <button>☀️/🌑</button> 
      */}

    </Navbar>
  )
}

export default MyNavbar