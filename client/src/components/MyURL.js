import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CreateURL.css';

const URL = props => (
    <tr className='row'>
        <td className='col-3'>
            <a href={props.thisURL.shortUrl} target='_blank' rel='noopener noreferrer'>
            {props.thisURL.shortUrl}
            </a>
        </td>
        <td className='col-6 long-url'>
            <a href={props.thisURL.longUrl} target='_blank' rel='noopener noreferrer'>
            {props.thisURL.longUrl}
            </a>
        </td>
        <td className='col-3'>
            <button href='' onClick={ ()=>{props.deleteUrl(props.thisURL._id)}} className='btn btn-primary' >Delete</button>
        </td>
    </tr>
)

const MyURL = () => {

    
    const [url, setUrl] = useState([]);

    useEffect( () => {
        getURLS();
    }, []);

    const getURLS =  async (id) => {
        await axios.get('http://localhost:3000/urls/', { headers:  {'auth-token': localStorage.getItem('auth-token') } })
        .then( res => {
            setUrl(res.data);
            console.log(res.data);
            console.log(url);
        })
        .catch( err => {
            console.log(err);
        });
        // const response = await fetch('http://localhost:3000/urls/');
        // const data = await response.json();
        // setUrl(data);
        // console.log(url, data);
    }

    const deleteUrl =  (id) => {
        axios.delete('http://localhost:3000/urls/' + id)
            .then( res => console.log(res.data));
        setUrl( url.filter( elem => elem._id !== id));

        // await fetch('http://localhost:3000/urls/' + id, {method: 'DELETE'})
        //     .then( res => res.json())
        //     .then( res => {
        //         console.log('Deleted: ', res.message)
        //     })
        //     .catch( err => console.error(err))
    };

    const urlList = () => (
        url.map( current => 
            <URL thisURL={current} deleteUrl={deleteUrl} key={current._id} />    
        )
    );

    return (
        <div className='container table-responsive'>
            <h1 className='text-center display-4'>My URLs</h1>
            <table className='table justify-content-center'>
                <thead>
                    <tr className='row'>
                        <th scope='col' className='col-3'>Short URL</th>
                        <th scope='col' className='col-6'>Long URL</th>
                        <th scope='col' className='col-3'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { urlList() }
                </tbody>
            </table>
        </div>
    )
}

export default MyURL;
