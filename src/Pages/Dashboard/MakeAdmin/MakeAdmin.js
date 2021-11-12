import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }

            })
        e.preventDefault();
    }
    return (
        <div>
            <h3>Make An Admin</h3>
            <div>
                <form className="row g-3" onSubmit={handleMakeAdmin}>
                    <div className="col-12">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" name="email" onBlur={handleOnBlur} className="form-control w-50" id="inputEmail4" />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-dark">Sign in</button>
                    </div>
                    {
                                success && <div className="alert alert-success w-50" role="alert">
                                    Make Admin Successfully
                                </div>
                            }
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;