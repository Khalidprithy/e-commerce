import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='form-container'>
            <div>
                <h4 className='form-title'>Login</h4>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to E-coma?? <Link className='form-link' to='/signup' >Create an account</Link>
                </p>
                <div className='line-container'>
                    <hr /> or <hr />
                </div>
                <div className='google-signin'>
                    <FcGoogle></FcGoogle>
                    <p>Sign in with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;