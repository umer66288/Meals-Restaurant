import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import blogdata from './Blogdata';

export class Gallery extends Component {
  render() {
    return (
      <div className='container p-md-5 p-4'>
        {blogdata.map((e) => {
          return <div className="py-md-4 py-3" key={e.id}>
            <p className="text-muted mb-1 fw-semibold "> <i class="bi bi-bookmark-heart mx-1 "></i>{e.postdate}</p>
            <Card>
              <Card.Img variant="top" src={e.postimg} />
              <Card.Body>
                <Card.Title>{e.postheading}</Card.Title>
                <Card.Text>{e.postdescription}</Card.Text>
                <Link to='/blog' className='text-dark fw-semibold'>Read More</Link>
              </Card.Body>
            </Card>
          </div>
        })}
      </div>
    )
  }
}
