import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [orders, setOrder] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/purchased/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);
    const handleCancenOrder=(id)=>{
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
    return (
        <div>
            <h3>My Order</h3>
            <table class="table table-success table-striped table-responsive-sm">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Purchased</th>
                        <th scope="col">Price</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Status</th>
                        <th scope="col">Cancel Order</th>
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
                                
                            </tr>
                        </tbody>

                    </>)
                }
            </table>
        </div>
    );
};

export default MyOrder;