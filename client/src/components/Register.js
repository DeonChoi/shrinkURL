import React, { useState } from 'react';
import axios from 'axios';


const Register = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeFirstName = e => {
        setFirstName(e.target.value);
    };

    const onChangeLastName = e => {
        setLastName(e.target.value);
    };

    const onChangeEmail = e => {
        setEmail(e.target.value);
    };

    const onChangePassword = e => {
        setPassword(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const userRegister = {
            firstName,
            lastName,
            email,
            password
        };
        await axios.post('/api/user/register', userRegister)
                .then( res => {console.log(res); props.history.push('./login')})
                .catch( err => console.error(err));
    };

    return (
        <div className='container'>
            <h1 className='text-center display-4'>Register</h1>
            <form className='justify-content-center' onSubmit={onSubmit} >
                <div className='form-group col-4 ml-auto mr-auto'>
                    <input type='text' className='form-control' placeholder='First Name' onChange={onChangeFirstName} />
                </div>
                <div className='form-group col-4 ml-auto mr-auto'>
                    <input type='text' className='form-control' placeholder='Last Name' onChange={onChangeLastName} />
                </div>
                <div className='form-group col-4 ml-auto mr-auto'>
                    <input type='email' className='form-control' placeholder='Email Address' onChange={onChangeEmail} />
                </div>
                <div className='form-group col-4 ml-auto mr-auto'>
                    <input type='password' className='form-control' placeholder='Password' onChange={onChangePassword} />
                </div>
                <div className='form-group row justify-content-center'>
                    <button type="submit" className='btn btn-primary'>Register</button>
                </div>
            </form>
    </div>
    )
}

export default Register;
