import React from 'react';
import HomeImage from '../images/homeImage.png';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className='container home-container'>
            <div className='row justify-content-center flex-column align-items-center home-row'>
                <h1 className='font-weight-normal text-center'>Create short, secure, links in the blink of an eye</h1>
                <img src={HomeImage} alt='Home' />                
            </div>
        </div>
    )
}

export default Home;
