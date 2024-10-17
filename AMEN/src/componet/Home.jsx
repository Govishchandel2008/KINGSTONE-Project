import React from 'react'
import './Home.css'
import { useState, useEffect } from 'react';
// import { FaArrowAltCircleLeft, FaRegArrowAltCircleRight} from 'react-icons/fa';

import img1 from '../assets/z1.jpg';
import img2 from '../assets/z2.jpg';
import img3 from '../assets/z3.jpg';
import img4 from '../assets/z4.jpg';
import img5 from '../assets/z5.jpg';
import img6 from '../assets/z6.jpg';
const Home = () => {
    const imgArray = [img1, img2, img3, img4, img5, img6];
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = imgArray.length;

    const handlePrev = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? totalImages - 3 : currentIndex - 3;
        setCurrentIndex(newIndex >= 0 ? newIndex : 0);
    };

    const handleNext = () => {
        const isLastImage = currentIndex + 3 >= totalImages;
        const newIndex = isLastImage ? 0 : currentIndex + 3;
        setCurrentIndex(newIndex);
    };
    useEffect(() => {

        const scrollElements = document.querySelectorAll('.scroll-animation');
        const Govishelment = document.querySelectorAll('.scroll-no');
        const elementInView = (el, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
            );
        };

        const displayScrollElement = (element) => {
            element.classList.add('scroll-animation-visible');
            element.classList.add('scroll-no-visible');
        };

        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                }
            });
        };
        const handleScrollAnimatio = () => {
            Govishelment.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                }
            });
        };

        window.addEventListener('scroll', handleScrollAnimation);


        handleScrollAnimation();

        return () => {
            window.removeEventListener('scroll', handleScrollAnimation);
        };

    }, []);
    return (
        <div className='Home-container'>
            <div className='parent scroll-animation'>
                <div className='child  '>
                    <h4>Welcome to Astafol</h4>
                    <h1>Autovent Event and Showroom </h1>
                    <p>Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id  cillum tempor cupidatat qui nisi proident nostrud dolore id do eiusmod. Lorem ipsum non labore.</p>
                    <button>Explore</button>
                </div>
                <img src="src\assets\ford2.png" alt="" />

            </div>
            <div className="cal scroll-animation">
                <h2>THE FEATURE</h2>
                <div className='arraxs'>
                    <div className="pops">
                        <h4>Powerfull Engine+</h4>
                        <p>Adipisicing pariatur dolor pariatur officia aliqua ex irure aliqua ut exercitation nulla exercitation esse duis do commodo exercitation sed exercitation aliquip fugiat.</p>

                    </div>
                    <div className="pops">
                        <h4>Advanced Aerodynamics</h4>
                        <p>Adipisicing pariatur dolor pariatur officia aliqua ex irure aliqua ut exercitation nulla exercitation esse duis do commodo exercitation sed exercitation aliquip fugiat.</p>

                    </div>
                    <div className="pops">
                        <h4>Lightweight Construction</h4>
                        <p>Adipisicing pariatur dolor pariatur officia aliqua ex irure aliqua ut exercitation nulla exercitation esse duis do commodo exercitation sed exercitation aliquip fugiat.</p>

                    </div>
                    <div className="pops">
                        <h4>High Speed and Acceleration</h4>
                        <p>Adipisicing pariatur dolor pariatur officia aliqua ex irure aliqua ut exercitation nulla exercitation esse duis do commodo exercitation sed exercitation aliquip fugiat.</p>

                    </div>
                    <div className="pops">
                        <h4>Precision Handling</h4>
                        <p>Adipisicing pariatur dolor pariatur officia aliqua ex irure aliqua ut exercitation nulla exercitation esse duis do commodo exercitation sed exercitation aliquip fugiat.</p>

                    </div>
                    <div className="pops">
                        <h4>Luxurious Interiors</h4>
                        <p>Adipisicing pariatur dolor pariatur officia aliqua ex irure aliqua ut exercitation nulla exercitation esse duis do commodo exercitation sed exercitation aliquip fugiat</p>

                    </div>
                </div>

            </div>
            <div className='gallery-containerz'>
                <div className='galleryz'>
                    {imgArray.slice(currentIndex, currentIndex + 3).map((image, index) => (
                        <span key={index}>
                            <img src={image} alt={`image-${index}`} />
                        </span>
                    ))}
                </div>
                <div className='gallery-wrapz'>
                    <span onClick={handlePrev}>
                        <i class="fas fa-arrow-left    "></i>
                        {/* <FaArrowAltCircleLeft /> */}
                        {/* <FaRegArrowAltCircleLeft /> */}
                    </span>
                    <span onClick={handleNext}>
                        {/* <FaRegArrowAltCircleRight /> */}
                        {/* <i class="fa-light fa-arrow-right"></i> */}
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div className="boss scroll-animation">
                <div className="image-top"></div>
                <img src="src\assets\boss.jpg" alt="" />
                <div className="image-bottom"></div>
            </div>
            <div className='tae scroll-animation'>
                <img src="src\assets\work.jpg" alt="" />

                <div className='Sang'>
                    <h3>Super <span>Luxury  </span> Design </h3>

                    <p>   <img src="src\assets\Arrow.png" alt="" />  Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id  cillum tempor cupidatat qui nisi proident nostrud dolore id do eiusmod. Lorem ipsum non labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, perspiciatis!</p>
                </div>

            </div>

            <div className='taes scroll-animation'>
                <img src="src\assets\work1.jpg" alt="" />
                <div className='Sangs'>
                    <h4>  <span>Advanced <span className='spans'> Aerodynamics</span></span> </h4>

                    <p> Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id  cillum tempor cupidatat qui nisi proident nostrud dolore id do eiusmod. Lorem ipsum non labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, perspiciatis! <img src="src\assets\Arrow1.png" alt="" /> </p>
                </div>

            </div>
            <div className="cost scroll-animation">
                <h6>Specifications</h6>
                <div className="Acess">
                    <div className="Saboss">
                        <div className="Luffyss">
                            <div className="colss">
                                <h2 className='ttless'>Engine</h2>
                                <div className="hoho">
                                    <h6>EngineType<p>twin-turbocharged and <br /> intercooled Miller-capable V-6,  aluminum block br can also Govish <br /> and heads</p> </h6>
                                    <h6>Displacement <p>213 cu in, 3497 cc</p></h6>

                                    <h6>Power <p>647 hp @ 6250 rpm</p></h6>

                                    <h6>Torque <p>550 lb-ft @ 5900 rpm</p></h6>

                                </div>
                            </div>
                            <div className="colss">
                                <h2 className='ttless'>Dimension</h2>
                                <div className="hoho">
                                    <h6>Wheelbase   <p>106.7 in</p></h6>

                                    <h6>Length <p>187.5 in</p></h6>

                                    <h6>Width <p>78.9</p></h6>

                                    <h6>Height<p>43.7 in</p></h6>
                                    <h6>Passenger volume <p>43.7 in</p></h6>

                                    <h6>Cargo volume <p>0.4 cu ft</p></h6>
                                    <h6>Curb weight  <p>3381 lb</p></h6>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <footer className='footerxz scroll-animation'>
                <div className="Acesz">
                    <div className="Sabosz">
                        <div className="Luffysz">
                            <div className="colsz">
                                <h2 className='ttlesz'>Racing</h2>
                                <a href="">Ferrari Driver Academy</a>
                                <a href="">Scuderia Ferrari HP</a>
                                <a href="">Carlos Sainz</a>
                                <a href="">Charles Leclerc</a>
                                <a href="">Hypercar</a>
                                <a href="">Esports</a>
                                <a href="">Gtx</a>
                            </div>
                            <div className="colsz">
                                <h2 className='ttlesz'>Sports Cars</h2>
                                <a href="">Configure your Ferrari</a>
                                <a href="">Recall information</a>
                                <a href="">MyFerrari</a>
                                <a href="">Pre-owned</a>
                                <a href="">TechInfo</a>
                                <a href="">Dealers</a>
                                <a href="">Range</a>
                            </div>
                            <div className="colsz">
                                <h2 className='ttlesz'>Experiences</h2>
                                <a href="">Ferrari World Abu Dhabi</a>
                                <a href="">Ferrari Land Barcelona</a>
                                <a href="">Ferrari Esports Series</a>
                                <a href="">Ristorante Cavallino</a>
                                <a href="">Ferrari Museums</a>
                                <a href="">Corse Clienti</a>
                                <a href="">Quality</a>
                            </div>
                            <div className="colsz">
                                <h2 className='ttlesz'>NEWSROOM</h2>
                                <a href="">Thought leadership</a>
                                <a href="">Press releases</a>
                                <a href="">Media library</a>
                                <a href="">Overview</a>
                            </div>
                            <div className="colsz">
                                <h2 className='ttlesz'>CAREERS</h2>
                                <a href="">Openings @ TXT☠RAFA</a>
                                <a href="">Life @ TXT☠RAFA</a>
                                <a href="">Overview</a>
                                <a href="">FAQs</a>
                            </div>
                        </div>
                    </div>

                    <div className="ninesz">
                        <h2>SOCIAL MEDIA</h2>
                        <div className="iconsz">
                            <span><a href="https://linkedin.com"><i className="fa-brands fa-linkedin"></i></a></span>
                            <span><a href="https://facebook.com"><i className="fa-brands fa-facebook"></i></a></span>
                            <span><a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a></span>
                            <span><a href="https://x.com"><i class="fa-brands fa-x-twitter"></i></a></span>
                            <span><a href="https://google.com"><i className="fa-brands fa-google"></i></a></span>
                            <span><a href="https://telegram.com"><i className="fa-brands fa-telegram"></i></a></span>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="Copyright">
                <p>Copyright 2024 Vermithor G.C.C. - All rights reserved.</p>
                <h4>Develop By - Rishikesh Chandel / Govish Chandel</h4>
              
            </div>
        </div>
    )
}

export default Home
