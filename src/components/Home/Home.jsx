import React from 'react';
import home from '../../images/home.jpeg';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <img src={`${home}`} alt='home'/>
        </div>
    );
};

export default Home;