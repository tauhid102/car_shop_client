import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import picture from '../../../images/login.jpg';
const Login = () => {
    const { googleSignIn, loginUser } = useAuth();
    const [loginData, setLoginData] = useState({});


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }
    const location = useLocation();
    const history = useHistory();


    const handleLoginSubmit = (e) => {
        console.log('press login')
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn=()=>{
        googleSignIn(location, history)
    }
    return (
            <div className='container'>
                <div className='row row-cols-1 row-cols-sm-2'>
                    <div className="col picutre">
                        <img src={picture} alt="" />
                    </div>
                    <div className="col">
                        <div className='w-100 m-auto mt-5'>
                            <h3 className=''>Sign In With</h3>
                            <div>
                                <form class="row g-3" onSubmit={handleLoginSubmit}>
                                    <div class="col-12">
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <input type="email" name="email" onBlur={handleOnBlur} class="form-control" id="inputEmail4" />
                                    </div>
                                    <div class="col-12">
                                        <label for="inputPassword4" class="form-label">Password</label>
                                        <input type="password" name="password" onBlur={handleOnBlur} class="form-control" id="inputPassword4" />
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-dark">Sign in</button>
                                    </div>
                                </form>
                                <p>Not a Member?<Link to='/register'>Sign up Now</Link> </p>
                            </div>
                            <div>
                                <button className='btn btn-dark' onClick={handleGoogleSignIn}>Google Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;