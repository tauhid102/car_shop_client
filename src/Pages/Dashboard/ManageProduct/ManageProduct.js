import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ManageProduct = () => {
    const [products,setProduct]=useState([]);

    useEffect(() => {
        fetch('https://fathomless-cliffs-39338.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const handleDeleteProduct=(id)=>{
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://fathomless-cliffs-39338.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Cancel Successfully');
                        const restBooking = products.filter(order => order._id !== id);
                        setProduct(restBooking);
                    }
                })
        }
    }
    return (
        <div>
            <h3 className='mt-5 mb-3'>Manage Product and <span className='text-danger'>Remove</span></h3>
            <Row xs={1} md={2} lg={4} className="g-4">
                {products.map(product => <>
                    <Col>
                        <Card border="secondary" style={{ width: '16rem' }}>
                            <Card.Header><h6>Car Name:</h6> {product.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <span className='text-bold'>Details:</span> {product.details}
                                </Card.Text>
                                <Card.Text>
                                   Price: ${product.price}
                                </Card.Text>
                                <Card.Text>
                                <img src={product.img} alt="" style={{width:'100px'}} srcset="" />
                                </Card.Text>
                            </Card.Body>
                            <button onClick={() => handleDeleteProduct(product._id)} className="btn btn-danger b-0">Delete Product</button>
                        </Card>
                    </Col>
                </>)}
            </Row>
            {/* <img src={product.img} alt="" style={{width:'100px'}} srcset="" /> */}
        </div>
    );
};

export default ManageProduct;