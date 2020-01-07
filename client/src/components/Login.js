import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = e => {
        setEmail(e.target.value);
    };

    const onChangePassword = e => {
        setPassword(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const userLogin = {
            email,
            password
        };
        await axios.post('/api/user/login', userLogin)
                .then( res => {console.log(res); console.log('Logged In'); localStorage.setItem('auth-token', res.data); props.history.push('../urls/add'); window.location.reload();})
                .catch( err => console.error(err));
        // console.log(localStorage.getItem('auth-token'));
    };

    return (
        <div className='container'>
            <h1 className='text-center formTitle'>Login</h1>
            <form className='justify-content-center' onSubmit={onSubmit} >
                <div className='form-group ml-auto mr-auto formInput'>
                    <input type='email' className='form-control' placeholder='Email Address' onChange={onChangeEmail} />
                </div>
                <div className='form-group ml-auto mr-auto formInput'>
                    <input type='password' className='form-control' placeholder='Password' onChange={onChangePassword} />
                </div>
                <div className='form-group row justify-content-center'>
                    <button type="submit" className='btn btn-primary'>Login</button>
                </div>
            </form>
    </div>
    )
}

export default Login;
