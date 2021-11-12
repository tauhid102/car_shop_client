import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [products,setProduct]=useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const handleDeleteProduct=(id)=>{
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/services/${id}`;
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
            <div className="table-responsive-sm">
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Details</th>
                            <th scope="col">Remove Product</th>
                        </tr>
                    </thead>
                    {
                        products.map(product => <>

                            <tbody>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.details}</td>
                                    <td> <button onClick={() => handleDeleteProduct(product._id)} className="btn btn-danger b-0">Remove</button></td>

                                </tr>
                            </tbody>

                        </>)
                    }
                </table>
            </div>

        </div>
    );
};

export default ManageProduct;