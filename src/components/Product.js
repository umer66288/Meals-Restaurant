import Col from 'react-bootstrap/Col';

export function Products(props) {
    return (
        <Col lg={3} md={6} key={props.id}>
            <div className='dishes border border-white p-md-4 p-5 shadow'>
                <div className='text-center'>
                    <img src={props.image} alt="dish" className='img-fluid' />
                    <h5>{props.tittle}</h5>
                    <div className="m-0 p-0 overflow-hidden">
                    <p className='text-secondary'>{props.description}</p>
                    </div>
                </div>
            </div>
        </Col>
    )
}