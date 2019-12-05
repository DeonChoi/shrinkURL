import React, { useState } from 'react';
import axios from 'axios';
const validUrl = require('valid-url');


const CreateURL = (props) => {

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
    
            
            // await fetch('http://localhost:3000/urls/add', {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: { "link": newLink }
            // })
                // .then( res => res.json())
                // .then( res => {
                //     console.log('Created: ', res.message)
                // })
                // .catch( err => console.error(err))
            
             axios.post('http://localhost:3000/urls/add', link)
                .then( res => console.log(res.data))
                .catch( err => console.error(err));
    
           
            props.history.push('/urls/');
        } else {
            alert('Please enter a valid URL');
        }
        
    }

    return (
        <div className='container'>
            <h1 className='text-center display-4'>Create URL</h1>
            <p className='text-center'>Enter a URL</p>
            <form className='justify-content-center' onSubmit={onSubmit} >
                <div className='form-group input-group ml-auto mr-auto col-6'>
                    {/* <input type='text' className='form-control w-25' value='https://' disabled readOnly/> */}
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
