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
                    Experience the best in soccer at MLNK - where passion meets excellence!
                    At MLNK, we're not just a store; we're a community united by a shared love for the beautiful game.
                    Step into our world and discover a treasure trove of top-tier soccer jerseys, footballs, and accessories meticulously curated to elevate your game and style.
                    At MLNK, we're committed to providing you with unparalleled quality, style, and service, because when it comes to soccer, excellence is our standard. </p>
                <a href="./Products" className="shop-now-button">SHOP NOW</a>
            </div>
        </div>
    );
};

export default Home;
