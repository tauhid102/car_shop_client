import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import picture from '../../../images/login.jpg';
import './Register.css';
const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory()

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...registerData };
        newLoginData[field] = value;
        setRegisterData(newLoginData);
        console.log(registerData);
    }
    const handleRegister = (e) => {

        console.log('Press button');
        registerUser(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault();

    }
    return (
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2">
                    <div className="col">
                        <h3 className='mt-5'>New To Shop BD? <span className='text-danger'>Register</span></h3>
                        <form className="row g-3 w-100 inputFrom mt-2" onSubmit={handleRegister}>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Name</label>
                                <input type="text" name='name' onBlur={handleOnBlur} className="form-control" id="inputAddress"/>
                            </div>
                            <div className="col-12">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" name='email' onBlur={handleOnBlur} className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                                <label for="inputPassword4" className="form-label">Password</label>
                                <input type="password" name='password' onBlur={handleOnBlur} className="form-control" id="inputPassword4" />
                            </div>
                            <p>Alrealdy Have An Account <Link to='/login'>Sign In</Link></p>
                            <div className="col-12">
                                <button type="submit" className="btn btn-dark">Sign in</button>
                            </div>
                        </form>
                        {
                            authError && <div className="alert alert-danger" role="alert">
                                {authError}
                            </div>
                        }
                    </div>
                    <div className="col picutre">
                        <img src={picture} alt="" />
                    </div>
                </div>
            </div>
    );
};

export default Register;