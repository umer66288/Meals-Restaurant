import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import menudata from './Menudata';

export class Menu extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='fw-semibold fs-1 mb-2 text-center'>{this.props.tittle}</h1>
        <div className="d-md-flex justify-content-center text-center">
          <Link to='/menu' className='mx-1 mb-2 mx-md-2 btn btn-outline-warning'>Chinese</Link>
          <Link to='/menu' className='mx-1 mb-2 mx-md-2 btn btn-outline-warning'>Italian</Link>
          <Link to='/menu' className='mx-1 mb-2 mx-md-2 btn btn-outline-warning'>Indian</Link>
          <Link to='/menu' className='mx-1 mb-2 mx-md-2 btn btn-outline-warning'>Thai</Link>
          <Link to='/menu' className='mx-1 mb-2 mx-md-2 btn btn-outline-warning'>Mexican</Link>
          <Link to='/menu' className='mx-1 mb-2 mx-md-2 btn btn-outline-warning'>Desserts</Link>
        </div>
        <div className="py-5">
          {menudata.map((e) => {
            return <div className="my-2" key={e.id}>
              <h2 className="">{e.tittle}</h2>
              <div className="d-md-flex justify-content-between ">
                <div>
                  <p className="text-muted mb-1 mx-1">
                    <b>{e.bold}</b>
                    {e.description} </p>
                </div>
                <img src={e.image} alt="img" className='img-fluid' style={{ maxHeight: '180px' }} />
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
}