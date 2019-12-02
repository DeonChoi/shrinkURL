import React from 'react';
import '../styles/CreateURL.css';

const CreateURL = () => {
    return (
        <div className='container'>
            <h1 className='text-center display-4'>Create URL</h1>
            <p className='text-center'>Enter a URL</p>
            <form className='justify-content-center'>
                <div className='form-group input-group ml-auto mr-auto col-6'>
                    <input type='text' className='form-control w-25' value='https://www.' disabled readOnly/>
                    <input type='url' className='form-control w-75' placeholder='example.com' />
                </div>
                <div className='form-group row justify-content-center'>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateURL;
