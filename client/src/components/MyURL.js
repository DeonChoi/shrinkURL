import React from 'react';
// import '../styles/Home.css';

const MyURL = () => {
    return (
        <div className='container'>
            <h1 className='text-center display-4'>My URLs</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Short URL</th>
                        <th scope='col'>Long URL</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyURL;
