import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo 1.png';
import Form from 'react-bootstrap/Form';
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../context/Context';

export default function Header(props) {
  let location = useLocation();
  const context = useContext(AppContext)
  const {showaleart} = context;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleconfirm =()=>{
    setShow(false);
    showaleart('Your Table is booked successfully', "success ")
  }
  return (
    <div className='container-fluid'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book a table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" >
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" autoFocus/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="number" placeholder="Contact Number"/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Number of Guests</Form.Label>
            <Form.Control type="number" placeholder="Number of Guests" min={1} max={15} required/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Date of event</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleconfirm}>confirm</Button>
        </Modal.Footer>
      </Modal>
      <div className='container'>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} onClick={() => props.setProgress(100)} to="/">
              <img src={logo} alt="Logo" className='img-fluid' style={{ maxHeight: '40px' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className='justify-content-around'>
              <Nav className=" my-2 my-lg-0"
                navbarScroll>
                <Nav.Link as={Link} onClick={() => props.setProgress(100)} to="/" className={`p-md-4 p-2 text-secondary ${location.pathname === "/" ? "active" : ""}`}>Home</Nav.Link>
                <Nav.Link as={Link} onClick={() => props.setProgress(100)} to="/menu" className={`p-md-4 p-2 text-secondary ${location.pathname === "/menu" ? "active" : ""}`}>Menu</Nav.Link>
                <Nav.Link as={Link} onClick={() => props.setProgress(100)} to="/blog" className={`p-md-4 p-2 text-secondary ${location.pathname === "/blog" ? "active" : ""}`}>Blog</Nav.Link>
                <Nav.Link as={Link} onClick={() => props.setProgress(100)} to="/about" className={`p-md-4 p-2 text-secondary ${location.pathname === "/about" ? "active" : ""}`}>About</Nav.Link>
                <Nav.Link as={Link} onClick={() => props.setProgress(100)} to="/contact" className={`p-md-4 p-2 text-secondary ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Nav.Link>
              </Nav>
              <div className=''>
                <Link onClick={handleShow} className='nav-btn shadow text-decoration-none text-white'>Book a table</Link>
                {/* <Link to="/contact" onClick={handleShow} onClick={() => props.setProgress(100)} className='nav-btn shadow text-decoration-none text-white'>Book a table</Link> */}
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}