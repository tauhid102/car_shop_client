import React, { useState } from 'react';
// import useAuth from '../../hooks/useAuth';
import picture from '../../../images/addproduct.jpg';
const AddProduct = () => {
    const [addProduct, setAddProduct] = useState({});
    const [confirm, setConfirm] = useState(false);
    // const { user, registerUser, isLoading, authError } = useAuth();



    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newAddData = { ...addProduct };
        newAddData[field] = value;
        setAddProduct(newAddData);
    }
    const handleAddProduct=(e)=>{
        e.preventDefault();
        const product = {
            ...addProduct
        }
        fetch('http://https://fathomless-cliffs-39338.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setConfirm(true);
                    document.getElementById("create-course-form").reset();
                }
            })
    }



    return (
        <div className="container">
                <div className="row row-cols-1 row-cols-sm-2">
                    <div className="col">
                        <h3 className='mt-5'>Please Provide<span className='text-danger'> Information </span>For Add <span className='text-danger'>Car</span></h3>
                        <form className="row g-3 w-100 inputFrom mt-2" id="create-course-form" onSubmit={handleAddProduct}>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Car Name or Model</label>
                                <input type="text" name='name' onBlur={handleOnBlur} className="form-control" id="inputAddress"/>
                            </div>
                            <div className="col-12">
                                <label for="inputEmail4" className="form-label">Car Price</label>
                                <input type="text" name='price' onBlur={handleOnBlur} className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                                <label for="inputPassword4" className="form-label">Details</label>
                                <input type="text" name='details' onBlur={handleOnBlur} className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-12">
                                <label for="inputPassword4" className="form-label">Image Url</label>
                                <input type="text" name='img' onBlur={handleOnBlur} className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-dark">Add Product</button>
                            </div>
                            {
                                confirm && <div class="alert alert-success" role="alert">
                                    Add Car Successfully
                                </div>
                            }
                        </form>
                        
                    </div>
                    <div className="col picutre">
                    <img src={picture} alt="" />
                </div>
                </div>
            </div>
    );
};

export default AddProduct;