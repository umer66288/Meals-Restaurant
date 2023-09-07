import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hero from './images/hero.png';
import logo1 from './images/card-logo.png';
import { Link } from 'react-router-dom'

export default function Hero(props) {
    return (
        <div className='container-fluid'>
            <Row className='py-md-5 py-3'>
                <Col md={6} className='d-flex justify-content-center align-items-center position-relative'>
                    <div className='position-absolute log' style={{ top: '-30px', left: '50px' }}>
                        <img src={logo1} alt="Logo" className='img-fluid' style={{ maxHeight: '90px' }} />
                    </div>
                    <div className='Card'>
                        <h1 className='fw-bold'>We provide the best food for you</h1>
                        <p className='pt-md-4 text-secondary'>Welcome to our exquisite restaurant, where culinary excellence meets a warm and inviting ambiance. We take pride in crafting an unforgettable dining experience that tantalizes the senses and leaves a lasting impression on our guests.</p>
                        <div className='d-flex justify-content-center justify-content-md-start pt-3'>
                            <Link to="/menu" onClick={() => props.setProgress(100)} className='mx-2 ba text-decoration-none'>Menu</Link>
                            <Link to="/contact" onClick={() => props.setProgress(100)} className='mx-2 nav-btn text-decoration-none'>Book a table</Link>
                        </div>
                        <div className='d-flex justify-content-center justify-content-md-start pt-5 mx-4'>
                            <Link to="/contact" onClick={() => props.setProgress(100)} className='mx-1 px-3 py-2 text-dark  text-decoration-none border rounded border-dark rounded-5 ikon'>
                                <i class="fa-brands fa-facebook-f"></i>
                            </Link>
                            <Link to="/contact" onClick={() => props.setProgress(100)} className='mx-1 px-3 py-2 text-dark  text-decoration-none border rounded border-dark rounded-5 ikon'>
                                <i class="fa-brands fa-instagram"></i>
                            </Link>
                            <Link to="/contact" onClick={() => props.setProgress(100)} className='mx-1 px-3 py-2 text-dark  text-decoration-none border rounded border-dark rounded-5 ikon'>
                                <i class="fa-brands fa-twitter"></i>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col md={6} >
                    <img src={hero} alt="Logo" className='img-fluid' />
                </Col>
            </Row>
        </div>
    )
}