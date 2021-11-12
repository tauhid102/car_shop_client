import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ManageAllOrder = () => {
    const [orders, setOrder] = useState([]);
    const { user } = useAuth();
    const [accepted, setAccepted] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/purchased/allorder')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [accepted]);


    const handleCancenOrder = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/purchased/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Cancel Successfully');
                        const restBooking = orders.filter(order => order._id !== id);
                        setOrder(restBooking);
                    }
                })
        }
    }
    const handleAcceptOrder = (id) => {
        const ids = { id };
        const proceed = window.confirm('Are you sure, you want to accepted?');
        if (proceed) {
            const url = `http://localhost:5000/purchased/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(ids)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.modifiedCount > 0) {
                        alert('Accepted Successfully');
                        setAccepted(false);
                    }
                })
        }
    }


    return (
        <div>
            <h3>Manage Order</h3>
            <div className="table-responsive-sm">
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Purchased</th>
                            <th scope="col">Price</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                            <th scope="col">Cancel Order</th>
                            <th scope="col">Accept Order</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order => <>

                            <tbody>
                                <tr>
                                    <th scope="row">{user?.displayName}</th>
                                    <td>{order.itemName}</td>
                                    <td>${order.itemPrice}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.status}</td>
                                    <td> <button onClick={() => handleCancenOrder(order._id)} className="btn btn-danger b-0">Cancel</button></td>
                                    <td> <button onClick={() => handleAcceptOrder(order._id)} className="btn btn-danger b-0">Accept</button></td>

                                </tr>
                            </tbody>

                        </>)
                    }
                </table>
            </div>

        </div>
    );
};

export default ManageAllOrder;