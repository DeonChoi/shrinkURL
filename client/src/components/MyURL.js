import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import '../styles/Home.css';


const URL = props => (
    <tr>
        <td>{props.thisURL.link}</td>
        <td>{props.thisURL.link}</td>
        <td>
            <button href='' onClick={ ()=>{props.deleteUrl(props.thisURL._id)}} className='btn btn-primary' >Delete</button>
        </td>
    </tr>
)

const MyURL = () => {

    const [url, setUrl] = useState([]);

    useEffect( () => {
        getURLS();
    }, []);

    const getURLS = async () => {
        // axios.get('http://localhost:3000/urls/')
        // .then( res => {
        //     setUrl(res.data);
        //     console.log(res.data);
        //     console.log(url);
        // })
        // .catch( err => {
        //     console.log(err);
        // });
        const response = await fetch('http://localhost:3000/urls/');
        const data = await response.json();
        setUrl(data);
        console.log(url, data);
    }

    const deleteUrl = async (id) => {
        // axios.delete('http://localhost:3000/urls/' + id)
        //     .then( res => console.log(res.data));
        // setUrl( url.filter( elem => elem._id !== id));

        await fetch('http://localhost:3000/urls/' + id, {method: 'DELETE'})
            .then( res => res.json())
            .then( res => {
                console.log('Deleted: ', res.message)
            })
            .catch( err => console.error(err))
    };

    const urlList = () => (
        url.map( current => 
            <URL thisURL={current} deleteUrl={deleteUrl} key={current._id} />    
        )
    );

    return (
        <div className='container'>
            <h1 className='text-center display-4'>My URLs</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Short URL</th>
                        <th scope='col'>Long URL</th>
                        <th scope='col'>Delete</th>
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
