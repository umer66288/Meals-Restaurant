import React from 'react'
import Hero from './hero'
import Section1 from './section-1'
import Setion2 from './section-2'
import { Testimonial } from './section-3'

export default function Home(props) {
    return (
        <>
            <Hero setProgress={props.setProgress} />
            <Section1 setProgress={props.setProgress} tittle='Our Special Dishes' tittle2='Wecome to Our Restaurant' />
            <Setion2 setProgress={props.setProgress} tittle='Our Expects Chef' />
            <Testimonial tittle='Our Happy Customers' />
        </>
    )
}