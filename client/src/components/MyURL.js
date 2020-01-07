import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MyURL.css';

const URL = props => {

    const [smallScreen, setSmallScreen] = useState(false)
    useEffect( () => {
        let width = window.innerWidth;
        if (width < 768) {
        setSmallScreen(true)
    }
    }, []);

    return (
        <tr className='row'>
            <td className='col-4'>
                <a href={props.thisURL.shortUrl} target='_blank' rel='noopener noreferrer'>
                {props.thisURL.shortUrl}
                </a>
            </td>
            <td className='col-5 long-url'>
                <a href={props.thisURL.longUrl} target='_blank' rel='noopener noreferrer'>
                {props.thisURL.longUrl}
                </a>
            </td>
            <td className='col-3 text-center'>
                <button href='' onClick={ ()=>{props.deleteUrl(props.thisURL._id)}} className='btn btn-primary' >{ smallScreen ? 'X' : 'Delete'}</button>
            </td>
        </tr>
    )
};

const MyURL = (props) => {

    if (!localStorage.getItem('auth-token')) {
        props.history.push('../user/login');
    }
    
    
    
;    const [url, setUrl] = useState([]);

    useEffect( () => {
        getURLS();
    }, []);

    const getURLS =  async (id) => {
        await axios.get('/api/urls/get', { headers:  {'auth-token': localStorage.getItem('auth-token') } })
        .then( res => {
            setUrl(res.data);
            console.log(res);
            console.log(res.data);
        })
        .catch( err => {
            console.log(err);
        });
    }

    const deleteUrl =  (id) => {
        axios.delete('/api/urls/' + id)
            .then( res => console.log(res.data));
        setUrl( url.filter( elem => elem._id !== id));
    };

    const urlList = () => (
        url.map( current => 
            <URL thisURL={current} deleteUrl={deleteUrl} key={current._id} />    
        )
    );


    return (
        <div className='container'>
            <h1 className='text-center formTitle'>My URLs</h1>
                <table className='table'>
                    <thead>
                        <tr className='row'>
                            <th scope='col' className='col-4'>Short URL</th>
                            <th scope='col' className='col-5'>Long URL</th>
                            <th scope='col' className='col-3 text-center'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {urlList()}
                    </tbody>
                </table>
        </div>
        
    )
}

export default MyURL;
