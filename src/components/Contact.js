import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'

export class Contact extends Component {
  render() {
    return (
      <>
        <div className='container py-5'>
          <h1 className='fw-semibold fs-1'>{this.props.tittle}</h1>
          <Row>
            <Col md={6}>
              <FloatingLabel controlId="floatingTextarea2" label="Enter Message">
                <Form.Control
                  className='rounded-0 contact-textarea'
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '200px' }}
                />
              </FloatingLabel>
              <Row className='py-2'>
                <Col md={6}>
                  <FloatingLabel controlId="floatingPassword" label="Enter Your full Name ">
                    <Form.Control type="text" placeholder="Enter Your full Name" className='rounded-0 mb-2 mb-md-0' />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel controlId="floatingPassword" label="Enter Your Email Adress">
                    <Form.Control type="text" placeholder="Enter Your Email Adress" className='rounded-0' />
                  </FloatingLabel>
                </Col>
              </Row>
              <FloatingLabel controlId="floatingPassword" label="Enter Subject">
                <Form.Control type="text" placeholder="Enter Subject" className='rounded-0' />
              </FloatingLabel>
              <Link to='/' class="btn btn-outline-dark rounded-0 py-md-3 py-2 fs-5 d-block  fs-md-4 mt-2 fw-semibold">Send</Link>
            </Col>
            <Col md={6} className='d-flex justify-content-center pt-5'>
              <div className="">
                <div className="d-flex py-4">
                  <div><i className="bi bi-house-fill fs-2 p-3 text-muted"></i></div>
                  <div>
                    <h4 class="m-0">
                      Buttonwood, California. </h4>
                    <div className="text-muted">Rosemead, CA 91770</div>
                  </div>
                </div>
                <div className="d-flex py-4">
                  <div><i className="bi bi-envelope-fill fs-2 p-3 text-muted"></i></div>
                  <div>
                    <h4 className="m-0">Restaurants@gmail.com</h4>
                    <div className="text-muted">Send us your query anytime!</div>
                  </div>
                </div>
                <div className="d-flex py-4">
                  <div><i className="bi bi-phone-fill fs-2 p-3 text-muted"></i></div>
                  <div>
                    <h4 className="m-0">+1 253 565 2365</h4>
                    <div className="text-muted">Mon to Fri 9am to 6pm</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}