import React, { useState, useEffect } from 'react';
import axios from 'axios';
const validUrl = require('valid-url');


const CreateURL = (props) => {

    useEffect( () => {
        getUserID();
    }, []);

    const getUserID =  () => {
        axios.get('http://localhost:3000/urls/', { headers:  {'auth-token': localStorage.getItem('auth-token') } })
        .then( res => {
            console.log(res.data);
        })
        .catch( err => {
            console.log(err);
        });
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
    
            
            // await fetch('http://localhost:3000/urls/add', {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json"},
            //     body: { "longUrl": newLink }
            //     // body: JSON.stringify({ "longUrl": newLink })
            // })
            //     .then( res => res.text())
            //     .then( text => console.log(text))
            //     // .then( res => {
            //     //     console.log('Created: ', res.message)
            //     // })
            //     .catch( err => console.error(err))
            
            await axios.post('http://localhost:3000/urls/add', link, { headers:  {'auth-token': localStorage.getItem('auth-token') } } )
                .then( res => {console.log(res); props.history.push('./')})
                .catch( err => console.error(err));
    
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
