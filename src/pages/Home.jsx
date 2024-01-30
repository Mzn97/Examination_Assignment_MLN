import React from 'react';
import Slider from '../components/Slideshow.jsx';
import '../style/HomeText.css'

const Home = () => {
    return (
        <div className="home">
            <Slider />
            <h2 className="home-title">WELCOME TO MLNK</h2>
            <div className="shop-now-button-container">
                <p className="home-text">Discover top-tier soccer jerseys, footballs, and more at MLNK.
                    Elevate your game with our authentic gear that seamlessly combines quality and style.
                    Experience the best in soccer at MLNK - where passion meets excellence!</p>
                <a href="./Products" className="shop-now-button">SHOP NOW</a>
            </div>
        </div>
    );
};

export default Home;
