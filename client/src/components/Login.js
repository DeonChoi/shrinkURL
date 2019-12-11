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
        axios.post('http://localhost:3000/user/login', userLogin)
                .then( res => {console.log(res); localStorage.setItem('auth-token', res.data); props.history.push('../urls/add')})
                .catch( err => console.error(err));
        console.log(localStorage.getItem('auth-token'));
    };

    return (
        <div className='container'>
            <h1 className='text-center display-4'>Login</h1>
            <form className='justify-content-center' onSubmit={onSubmit} >
                <div className='form-group col-4 ml-auto mr-auto'>
                    <input type='email' className='form-control' placeholder='Email Address' onChange={onChangeEmail} />
                </div>
                <div className='form-group col-4 ml-auto mr-auto'>
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
