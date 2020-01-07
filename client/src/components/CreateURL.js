import React, { useState } from 'react';
import axios from 'axios';
const validUrl = require('valid-url');


const CreateURL = (props) => {

    if (!localStorage.getItem('auth-token')) {
        props.history.push('../user/login');
    }

    const [newLink, setNewLink] = useState('');
    
    const onChangeLink = e => {
        setNewLink(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(validUrl.isUri(newLink));
        if (validUrl.isUri(newLink)) {
            const link = {
                longUrl: newLink
            };
            console.log(link);
            
            const headers = {
                headers: {
                    'auth-token': localStorage.getItem('auth-token')
                }
            };

            await axios.post('/api/urls/add', link, headers )
                .then( res => props.history.push('./get'))
                // .then( res => {console.log(res); props.history.push('./');})
                .catch( err => console.error(err));
    
        } else {
            alert('Please enter a valid URL');
        }
        
    }

    return (
        <div className='container'>
            <h1 className='text-center formTitle'>Create URL</h1>
            <p className='text-center'>Enter a URL</p>
            <form className='justify-content-center' onSubmit={onSubmit} >
                <div className='form-group input-group ml-auto mr-auto urlInput'>
                    <input type='text' className='form-control w-75 text-center' placeholder='https://www.example.com' onChange={onChangeLink} />
                </div>
                <div className='form-group row justify-content-center'>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateURL;
