import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dish1 from './images/Dish-1.png';
import dish2 from './images/Dish-2.png';
import dish3 from './images/Dish-3.png';
import dish4 from './images/Dish-4.png';
import cardimg from './images/input-card.png';

export class About extends Component {
    render() {
        return (
            <div className='container py-5 px-4'>
                <Row>
                    <Col md={6}>
                        <h1 className='fw-semibold fs-1 mb-4'>{this.props.tittle}</h1>
                        <p className="text-muted mb-3">Welcome to <b>Restaurants!</b> We are passionate about food and dedicated to providing you with an exceptional culinary experience.</p>
                        <p className="text-muted mb-3">Our journey began with a simple love for cooking and exploring different cuisines from around the world. We believe that food is not just about nourishment; it's an art that brings people together, creates memories, and celebrates culture.</p>
                        <p className="text-muted mb-3"><b>Delectable Recipes:</b>Our team of passionate food enthusiasts and chefs work diligently to present you with tried-and-tested recipes that guarantee exceptional results. Whether you're craving comforting home-cooked meals, exquisite desserts, or healthy options, you'll find something to satisfy your appetite here.</p>
                        <p className="text-muted mb-3"><b>Cooking Tips and Techniques:</b> Want to improve your culinary skills? Look no further! Our website offers valuable cooking tips, techniques, and hacks that will take your cooking prowess to the next level.</p>
                        <p className="text-muted mb-3"><b>Foodie Articles:</b> Explore our collection of food-related articles covering everything from ingredient spotlights to food trends and cultural cuisines. Get inspired and learn about the diverse world of gastronomy.</p>
                        <p className="text-muted mb-3"><b>Community and Interaction:</b>We believe that food brings people together. Join our vibrant foodie community, where you can share your culinary experiences, exchange ideas, and connect with like-minded individuals who share your passion for food.</p>
                        <p className="text-muted mb-3">Thank you for being a part of <b>Restaurants!</b> Together, let's celebrate the joy of cooking, the pleasure of savoring delicious food, and the shared love for all things culinary.</p>
                        <h4 className="text-muted mb-2">Happy cooking!!!</h4>
                        <p className="text-muted mb-3">The <b>Restaurants!</b> Team</p>
                    </Col>
                    <Col md={6} className='bgonion d-flex align-items-center'>
                        <div>
                            <Row className='pb-4'>
                                <Col>
                                    <img src={dish1} alt="" className="img-fluid" />
                                </Col>
                                <Col>
                                    <img src={dish2} alt="" className="img-fluid" />
                                </Col>
                            </Row>
                            <img src={cardimg} alt="" className="img-fluid" />
                            <Row className='pt-4'>
                                <Col>
                                    <img src={dish3} alt="" className="img-fluid" />
                                </Col>
                                <Col>
                                    <img src={dish4} alt="" className="img-fluid" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}