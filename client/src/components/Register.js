import React from 'react';
// import '../styles/Home.css';

const Register = () => {
    return (
        <div className='container'>
            <h1 className='text-center display-4'>Register</h1>
            <form className='justify-content-center'>
                <div className='form-group col-4 ml-auto mr-auto'>
                    <input type='email' className='form-control' placeholder='Email Address' />
                </div>
                <div className='form-group col-4 ml-auto mr-auto'>
                    <input type='password' className='form-control' placeholder='Password' />
                </div>
                <div className='form-group row justify-content-center'>
                    <button type="submit" className='btn btn-primary'>Register</button>
                </div>
            </form>
    </div>
    )
}

export default Register;
