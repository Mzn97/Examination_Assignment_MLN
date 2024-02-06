import React, {useEffect, useState} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slider = () => {
    const [intervalValue, setIntervalValue] = useState(200);

    useEffect(() => {
    }, []);

    const images = [
        "src/img/photo-1553778263-73a83bab9b0c.avif",
        "src/img/photo-1431324155629-1a6deb1dec8d.avif",
        "src/img/photo-1535116574766-9a678bf80bf4.avif",
    ];

    return (
        <Slide style={{ height: 'auto', width: 'auto' }} autoplay={{enabled: true, interval: intervalValue}}>
            {images.map((image, index) => (
                <div className='homeSlidShow' key={index}>
                    <img src={image}
                         alt={`Slide ${index + 1}`}
                         style={{ height: 'auto', width: '100%'}}
                    />
                </div>
            ))}
        </Slide>
    );
};

export default Slider;