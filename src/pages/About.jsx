import React from 'react';
import '../style/About.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                <img src="src/img/AboutUsPics.png" alt="About Us" className="about-image" /> {/*styla img*/}
                <div className="about-text"> {/*styla text*/}
                    <p>
                        At MLNK, we're more than just a store; we're your dedicated destination for everything soccer. Immerse yourself in a world where the beautiful game comes alive through our premium selection of soccer jerseys, footballs, and gear. We pride ourselves on offering authentic, high-quality products that not only elevate your performance on the field but also reflect your love for the sport.
                    </p>
                    <p>
                        Discover the perfect blend of style and functionality as you explore our curated collection, meticulously crafted for soccer enthusiasts like you. MLNK is more than a brand; it's a celebration of the passion, skill, and camaraderie that make soccer the world's beloved sport.
                    </p>
                    <p>
                        Whether you're a seasoned player or a devoted fan, MLNK is your gateway to soccer excellence. Join us in embracing the spirit of the game, where every purchase is a step closer to realizing your soccer dreams. Welcome to MLNK – where the love for soccer meets unparalleled quality!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;