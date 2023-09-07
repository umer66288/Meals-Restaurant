import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import chef from './images/chef 1.png';
import { Link } from 'react-router-dom'

export default function Setion2(props) {
   const ourchef = [
        {
            id: 1,
            description: "Years of training and experience of dishes."
        },
        {
            id: 2,
            description: "Years of training and experience of dishes."
        },
        {
            id: 3,
            description: "Years of training and experience of dishes."
        }
    ]
    // constructor() {
    //     super();
    //     this.state = {
    //         ourchef: this.ourchef,
    //         loading: false
    //     }
    // }
    // render() {
    return (
        <div className='section2 py-5'>
            <div className='container pt-5 mt-5'>
                <Row>
                    <Col md={6} className='flex-column d-flex justify-content-around mb-5'>
                        <div>
                            <h1 className='justify-content-center justify-content-md-start d-flex'>{props.tittle}</h1>
                            <div className='d-md-flex d-block'>
                                <div>
                                    {ourchef.map((e) => {
                                        return <div className='d-flex my-3 justify-content-center justify-content-md-start' key={e.id}>
                                            <div className='tick'><i className="fa-solid fa-check"></i></div><p className='text-secondary px-2'>
                                                {e.description}
                                            </p>
                                        </div>
                                    })}
                                </div>
                                <div>
                                    {ourchef.map((e) => {
                                        return <div className='d-flex my-3 justify-content-center justify-content-md-start' key={e.id}>
                                            <div className='tick'><i className="fa-solid fa-check"></i></div><p className='text-secondary px-2'>
                                                {e.description}
                                            </p>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center justify-content-md-start'>
                            <Link to="/menu" onClick={() => props.setProgress(100)} className='mx-2 ba text-decoration-none'>Menu</Link>
                            <Link to="/contact" onClick={() => props.setProgress(100)} className='mx-2 nav-btn text-decoration-none'>Book a table</Link>
                        </div>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center align-items-center'>
                        <img src={chef} className='img-fluid' alt='img' />
                    </Col>
                </Row>
            </div>
        </div>
    )
    // }
}