import React, { Component } from 'react';
import Test1 from './images/testimonial1.png';
import Test2 from './images/testimonial2.png';
import Form from 'react-bootstrap/Form';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

export class Testimonial extends Component {
    render() {
        return (
            <div className='py-5 section-3'>
                <div className='container-fluid pan'>
                    <div className='text-center py-5'>
                        <h1>{this.props.tittle}</h1>
                        <p className='text-secondary'>At Restaurant, our utmost priority is ensuring the complete satisfaction of our valued clients.  </p>
                    </div>
                    <div className='container py-5'>
                        <Swiper
                            breakpoints={{
                                300: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                            }}
                            spaceBetween={30}
                            slidesPerView={2}
                            loop={'true'}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='client px-md-5 px-4 py-md-4 py-3 bg-white'>
                                    <div className='d-flex justify-content-center'>
                                        <img src={Test1} className='img-fluid' alt='img'/>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                    </div>
                                    <p className='text-secondary py-4'>I recently had the pleasure of dining at "Restaurant" and I must say it was an exceptional culinary experience that exceeded all my expectations. From the moment I walked in, I was greeted warmly by the friendly staff, creating a welcoming and inviting atmosphere.</p>
                                    <h5 className='fw-bold text-center'>Ama Ampomah</h5>
                                    <p className='text-secondary text-center'>CEO & Founder Inc</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='client px-md-5 px-4 py-md-4 py-3 bg-white'>
                                    <div className='d-flex justify-content-center'>
                                        <img src={Test2} className='img-fluid' alt='img'/>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                    </div>
                                    <p className='text-secondary py-4'>I recently had the pleasure of dining at "Restaurant" and I must say it was an exceptional culinary experience that exceeded all my expectations. From the moment I walked in, I was greeted warmly by the friendly staff, creating a welcoming and inviting atmosphere.</p>
                                    <h5 className='fw-bold text-center'>Kweku Annan</h5>
                                    <p className='text-secondary text-center'>CEO & Founder Ind</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='client px-md-5 px-4 py-md-4 py-3 bg-white'>
                                    <div className='d-flex justify-content-center'>
                                        <img src={Test1} className='img-fluid'  alt='img'/>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                    </div>
                                    <p className='text-secondary py-4'>I recently had the pleasure of dining at "Restaurant" and I must say it was an exceptional culinary experience that exceeded all my expectations. From the moment I walked in, I was greeted warmly by the friendly staff, creating a welcoming and inviting atmosphere.</p>
                                    <h5 className='fw-bold text-center'>Ama Ampomah</h5>
                                    <p className='text-secondary text-center'>CEO & Founder Inc</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='client px-md-5 px-4 py-md-4 py-3 bg-white'>
                                    <div className='d-flex justify-content-center'>
                                        <img src={Test2} className='img-fluid' alt='img'/>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                    </div>
                                    <p className='text-secondary py-4'>I recently had the pleasure of dining at "Restaurant" and I must say it was an exceptional culinary experience that exceeded all my expectations. From the moment I walked in, I was greeted warmly by the friendly staff, creating a welcoming and inviting atmosphere.</p>
                                    <h5 className='fw-bold text-center'>Kweku Annan</h5>
                                    <p className='text-secondary text-center'>CEO & Founder Ind</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='p-md-5 p-0 container input-card d-flex justify-content-center align-items-center'>
                        <div className='px-md-5 px-2'>
                            <h1 className='text-white px-md-5 px-1 text-center mb-md-5 mb-2'>Get Or Promo Code by Subscribing To our Newsletter</h1>
                            <div className='d-flex bg-white p-2 rounded rounded-3 text-center mx-4 mb-4 mb-md-0'>
                                <Form.Control type="text" placeholder="Enter your email" className='border-0 p-0 shadow-none' />
                                <div className='subscribe p-md-3 p-2 rounded rounded-2 fw-bold btn btn-warning border-0 '>Subscribe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}