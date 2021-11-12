import React, { useEffect, useState } from 'react';

const ManageReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const handleDeleteReview = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/reviews/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Cancel Successfully');
                        const restReview = reviews.filter(order => order._id !== id);
                        setReviews(restReview);
                    }
                })
        }
    }
    return (
        <div>
            <h3 className='mt-5 mb-3'>Manage Customer <span className='text-danger'>Review</span></h3>
            <div className="table-responsive-sm">
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Comment</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Remove Review</th>
                        </tr>
                    </thead>
                    {
                        reviews.map(review => <>

                            <tbody>
                                <tr>
                                    <td>{review.name}</td>
                                    <td>{review.email}</td>
                                    <td>{review.comment}</td>
                                    <td>{review.rating}</td>
                                    <td> <button onClick={() => handleDeleteReview(review._id)} className="btn btn-danger b-0">Remove</button></td>

                                </tr>
                            </tbody>

                        </>)
                    }
                </table>
            </div>

        </div>
    );
};

export default ManageReview;