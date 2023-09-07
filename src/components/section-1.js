import React from 'react';
import { Products } from './Product'
import contents from './Content'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dish from './images/Dish.png';
import { Link } from 'react-router-dom'

export default function Section1 (props) {
        return (
            <div className='container-fluid Dish'>
                <div className='container pt-5 leaf'>
                    <div className='py-5 mb-5'>
                        <h1 className='text-center fw-bold'>{props.tittle}</h1>
                        <p className='text-center text-secondary'>Here's some of our Special dishes you may like for their flavor,prestation and high genic nature</p>
                    </div>
                    <div>
                        <Row>
                            {contents.map(contents => (
                                <Products
                                    key={contents.id}
                                    image={contents.image}
                                    tittle={contents.tittle}
                                    description={contents.description}
                                />
                            ))}
                        </Row>
                    </div>
                    <div className='pt-md-5 pt-1'>
                        <Row className='py-md-5 py-3'>
                            <Col md={6}>
                                <div className="px-4 px-lg-0">
                                    <img src={dish} alt="Logo" className='img-fluid mb-5' id='animateimg' />
                                </div>
                            </Col>
                            <Col md={6} className='d-flex justify-content-center align-items-center onion'>
                                <div>
                                    <h1 className='fw-bold text-center'>{props.tittle2}</h1>
                                    <p className='text-secondary text-center'>Welcome to our exquisite restaurant, where culinary excellence meets a warm and inviting ambiance.</p>
                                    <div className='d-flex justify-content-center pt-3'>
                                        <Link to="/menu" onClick={() => props.setProgress(100)} className='mx-2 ba text-decoration-none'>Menu</Link>
                                        <Link to="/contact" onClick={() => props.setProgress(100)} className='mx-2 nav-btn text-decoration-none'>Book a table</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
}