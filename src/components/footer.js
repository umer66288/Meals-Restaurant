import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './images/logo 1.png';
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
        <div className='container py-5 footer'>
            <Row>
                <Col md={6} className='text-center text-md-start mb-2 mb-md-0 LEAF'>
                    <img src={logo} alt="Logo" className='img-fluid' style={{ maxHeight: '40px' }} />
                    <p className='text-secondary py-4'>Immerse yourself in a journey of taste with our thoughtfully crafted tasting menus, carefully paired with an extensive selection of wines, handpicked by our knowledgeable sommeliers<Link to="/about" onClick={() => props.setProgress(100)} className=' fw-bold text-secondary foot-link'>Learn more</Link> </p>
                </Col>
                <Col md={3} className='text-center mb-4 mb-md-0'>
                    <p className='d-block py-2 text-dark fw-bold mb-0'>Navigation</p>
                    <Link to="/menu" onClick={() => props.setProgress(100)} className='text-decoration-none foot-link d-block py-1 text-secondary'>Menu</Link>
                    <Link to="/about" onClick={() => props.setProgress(100)} className='text-decoration-none foot-link d-block py-1 text-secondary'>About us</Link>
                    <Link to="/contact" onClick={() => props.setProgress(100)} className='text-decoration-none foot-link d-block py-1 text-secondary'>Contact us</Link>
                    <Link to="/menu" onClick={() => props.setProgress(100)} className='text-decoration-none foot-link d-block py-1 text-secondary'>Main dishes</Link>
                </Col>
                <Col md={3} className='text-center mb-4 mb-md-0'>
                    <p className='d-block py-2 text-dark fw-bold mb-0'>DISHES</p>
                    <Link to="/menu" onClick={() => props.setProgress(100)} className='text-decoration-none foot-link d-block py-1 text-secondary'>Fish & Viggies</Link>
                    <Link to="/menu" onClick={() => props.setProgress(100)} className='text-decoration-none foot-link d-block py-1 text-secondary'>Tofu Chili</Link>
                    <Link to="/menu" onClick={() => props.setProgress(100)} className='text-decoration-none foot-link d-block py-1 text-secondary'>Egg & Cocumber</Link>
                    <Link to="/menu" onClick={() => props.setProgress(100)} className='text-decoration-none foot-link d-block py-1 text-secondary'>Lumpia w/Suace</Link>
                </Col>
            </Row>
            <a href='/' className='text-dark fw-bold text-decoration-none justify-content-center justify-content-md-start d-flex'>OPENING HOURS</a>
            <div className='d-md-flex d-block justify-content-between align-items-end border-bottom border-bottom-secondary'>
                <div className="d-md-flex d-block text-center text-md-start">
                    <div>
                        <p className='text-secondary mb-1'>Monday - Friday</p>
                        <p className='text-secondary'>8:00 am to 9:00 pm</p>
                    </div>
                    <div className='px-3'>
                        <p className='text-secondary mb-1'>Saturday</p>
                        <p className='text-secondary'>8:00 am to 9:00 pm</p>
                    </div>
                    <div className='px-3'>
                        <p className='text-secondary mb-1'>Sunday</p>
                        <p className='text-secondary'>CLOSED</p>
                    </div>
                </div>
                <div>
                    {/* <p className='text-dark text-center fw-bold mb-2'>FOLLOW US</p>
                        <div className='d-flex justify-content-center justify-content-md-start mb-2'>
                            <Link to="/contact" className='mx-1 px-3 py-2 text-dark  text-decoration-none border rounded border-dark rounded-5 ikon'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </Link>
                            <Link to="/contact" className='mx-1 px-3 py-2 text-dark  text-decoration-none border rounded border-dark rounded-5 ikon'>
                                <i className="fa-brands fa-instagram"></i>
                            </Link>
                            <Link to="/contact" className='mx-1 px-3 py-2 text-dark  text-decoration-none border rounded border-dark rounded-5 ikon'>
                                <i className="fa-brands fa-twitter"></i>
                            </Link>
                        </div> */}
                </div>
            </div>
            <div className='pt-4 d-md-flex d-block text-center text-md-start justify-content-between'>
                <div>
                    <p className='text-secondary mb-0'> <i className="fa-regular fa-copyright"></i> 2022 Restaurants. All Right Reserved. Designed by <b>Umer</b> </p>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='mx-2'>
                        <Link to="/contact" onClick={() => props.setProgress(100)} className='text-decoration-none text-secondary foot-link'>Terms of Service</Link>
                    </div>
                    <div className='mx-2'>
                        <Link to="/contact" onClick={() => props.setProgress(100)} className='text-decoration-none text-secondary foot-link'>Privacy Policy </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}