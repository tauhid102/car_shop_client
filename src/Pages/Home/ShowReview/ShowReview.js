import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const ShowReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-cliffs-39338.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='container'>
            <h3 className='text-center mt-4'>Customer <span className='text-danger'>Review</span></h3>
            <p className='text-danger m-auto text-center border-2 mb-3 border-bottom border-danger w-25'>Customer Feedback,Rating and Name</p>
            <Row xs={1} md={2} lg={3} className="g-4">
                {reviews.map(review => <>
                    <Col>
                        <Card border="secondary" style={{ width: '18rem' }}>
                            <Card.Header>Rating: {review.rating}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {review.comment}
                                </Card.Text>
                                <Card.Title>Name: {review.name}</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                </>)}
            </Row>
        </div>
    );
};

export default ShowReview;