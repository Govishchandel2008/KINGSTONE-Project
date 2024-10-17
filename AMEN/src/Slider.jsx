import React from 'react'
import Marquee from "react-fast-marquee";
import './slider.css'

export const Slider = () => {
    return (
        <div className='banner'>
            <div className='swiper'>
                <Marquee>

                    <span> <img src="src\assets\car1.jpg" alt="" /></span>
                    <span> <img src=" src\assets\car2.jpg" alt="" /></span>
                    <span> <img src="   src\assets\car3.webp" alt="" /></span>
                    <span> <img src="src\assets\car4.jpg" alt="" /></span>
                    <span> <img src="src\assets\car5.webp" alt="" /></span>
                    <span> <img src="     src\assets\car6.jpg" alt="" /></span>
                    <span> <img src=" src\assets\car7.jpg" alt="" /></span>
                    <span> <img src="    src\assets\car8.jpg" alt="" /></span>
                    <span> <img src="" alt="" /></span>
                    <span> <img src=" src\assets\car9.jpg" alt="" /></span>

                </Marquee>
            </div>
        </div >
    )
}


