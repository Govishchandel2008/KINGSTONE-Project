import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Modal from 'react-modal';
import React, { useEffect, useRef, useState } from 'react';
import './Service.css';

export const Service = () => {


  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-animation');

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add('scroll-animation-visible');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
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


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',

    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="service-page">

      <div className='control '>
        <div className="service-container">
          <div className='head'>
            <h2>Professional Services <br /> for Car</h2>
            <ul>
              <li>
                <h3>Car & Experienced Team of Experts</h3>
              </li>
              <li>
                <h4>Simple to complex car issues</h4>
              </li>
              <li>
                <h4>Cost-Efficient Services at your doorstep</h4>
              </li>
            </ul>
          </div>
          <img src="src/assets/servicesff.png" alt="" />
        </div>

      </div>


      <div className="norway scroll-animation" >
        <h5>Most Utilized Free Services</h5>
        <div className="card-container">
          <div className="card">
            <img src="src/assets/car wash.avif" alt="" />
            <h6>Car Wash</h6>
            <p>
              Get your car washed with our expert team Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Tempora error sequi aliquid
              quos corporis. Cumque sunt sint{' '}
            </p>
            <a href="#" className='bt'>Read More</a>
          </div>
          <div className="card">
            <img src="src/assets/Car Interior Cleaning.webp" alt="" />
            <h6> Car Interior Cleaning</h6>
            <p>
              Get your car washed with our expert team Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Tempora error sequi aliquid
              quos corporis. Cumque sunt sint{' '}
            </p>
            <a href="#" className='bt'>Read More</a>
          </div>
          <div className="card">
            <img src="src/assets/Car Testing drive.jpg" alt="" />
            <h6> Car Testing drive </h6>
            <p>
              Get your car washed with our expert team Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Tempora error sequi aliquid
              quos corporis. Cumque sunt sint{' '}
            </p>
            <a href="#" className='bt'>Read More</a>
          </div>
        </div>
      </div>


      <div className="cas scroll-animation">
        <h5>Customized By Car And Repair</h5>
        <div class="kan">
          <div className="car-image-container">
            <img src="src\assets\demo car.png" alt="" className='car-image' />
            <div className="dot" style={{ top: "35%", left: "25%" }} title='dent paint' data-description='adffffffffffffffffffffffffffffffffffffffffffff' > </div>
            <div className="dot" style={{ top: "43%", left: "12%" }} title='Oil / Lube / Filters'> </div>
            <div className="dot" style={{ top: "40%", left: "32.5%" }} title='Diagnostics'></div>
            <div className="dot" style={{ top: "45%", left: "60%" }} title='Detailing'></div>
            <div className="dot" style={{ bottom: "50%", left: "77%" }} title='Suspension'></div>
            <div className="dot" style={{ top: "70%", left: "76.5%" }} title='Brakes'></div>
          </div>

          <div className="Govish">
            <div className="image-container">
              <img src="src/assets/dot6.jpeg" alt="Image 6" />
              <div className="overlay"><span>  Detailing</span> <p>
                AutoMechanica offers professional car detail services at an affordable price. Our interior cleaning, detailing, and restoration services can help you recapture that new car look and smell.
              </p></div>
            </div>
            <div className="image-container">
              <img src="src/assets/dot1.jpeg" alt="Image 1" />
              <div className="overlay"> <span> Brakes</span><p>The brake system consists of different parts that can be fixed individually. A detailed quote is given to you after we perform our systematic brake evaluation.</p></div>
            </div>
            <div className="image-container">
              <img src="src/assets/dot2.jpeg" alt="Image 2" />
              <div className="overlay"><span>Dent & Paint</span><p>AutoMechanica specializes in car dent repair and car painting services for a range of models.</p></div>
            </div>
            <div className="image-container">
              <img src="src/assets/dot3.jpeg" alt="Image 3" />
              <div className="overlay"> <span>
                Diagnostics</span><p>If your car needs a mobile diagnostic check done at your home or office, let AutoMechanica come to you.</p></div>
            </div>
            <div className="image-container">
              <img src="src/assets/dot5.jpeg" alt="Image 5" />
              <div className="overlay"><span>Suspension </span><p>The suspension system of your vehicle protects you from bouncing up and down due to the bad road conditions and bumps in the road.</p></div>
            </div>
            <div className="image-container">
              <img src="src/assets/dot4.jpeg" alt="Image 4" />
              <div className="overlay"><span>Oil/Lube/Filters</span> <p>AutoMechanica proudly serves the Lube, Oil & Filter change needs of customers' vehicle performance while extending the life of your vehicle.</p></div>
            </div>

          </div>

        </div>
      </div>
      <div className="slider scroll-animation">
        <h4>Best Engineering Service </h4>
        <div className="slider-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><div className="oak">
              <img src="src\assets\zoro.jpg" alt="" />
              <div className="you">
                <h6>Zoro</h6>
                <p>
                  Get your car washed with our expert team Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora error sequi aliquid
                  quos corporis. Cumque sunt sint{' '}
                </p>
                <a href="#" className='wick'>Read More</a>
              </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="oak">
              <img src="src\assets\sanji.jpg" alt="" />
              <div className="you">
                <h6>Sanji</h6>
                <p>
                  Get your car washed with our expert team Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora error sequi aliquid
                  quos corporis. Cumque sunt sint{' '}
                </p>
                <a href="#" className='wick'>Read More</a>
              </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="oak">
              <img src="src\assets\ggg.jpg" alt="" />
              <div className="you">
                <h6>Sukuna</h6>
                <p>
                  Get your car washed with our expert team Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora error sequi aliquid
                  quos corporis. Cumque sunt sint{' '}
                </p>
                <a href="#" className='wick'>Read More</a>
              </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="oak">
              <img src="src\assets\ffff.jpg" alt="" />
              <div className="you">
                <h6>kakashi</h6>
                <p>
                  Get your car washed with our expert team Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora error sequi aliquid
                  quos corporis. Cumque sunt sint{' '}
                </p>
                <a href="#" className='wick'>Read More</a>
              </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="oak">
              <img src="src\assets\levitttt.jpg" alt="" />
              <div className="you">
                <h6>Levi</h6>
                <p>
                  Get your car washed with our expert team Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora error sequi aliquid
                  quos corporis. Cumque sunt sint{' '}
                </p>
                <a href="#" className='wick'>Read More</a>
              </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="oak">
              <img src="src\assets\Ryoh_Grantz_777.jpg" alt="" />
              <div className="you">
                <h6>Ryu</h6>
                <p>
                  Get your car washed with our expert team Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora error sequi aliquid
                  quos corporis. Cumque sunt sint{' '}
                </p>
                <a href="#" className='wick'>Read More</a>
              </div>
            </div></SwiperSlide>
            <SwiperSlide>

              <div className="oak">
                <img src="src\assets\ncs.png" alt="" />
                <div className="you">
                  <h6>Luffy</h6>
                  <p>
                    Get your car washed with our expert team Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Tempora error sequi aliquid
                    quos corporis. Cumque sunt sint{' '}
                  </p>
                  <a href="#" className='wick'>Read More</a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="gallery scroll-animation">
        <h2>Gallery</h2>
        <div className="row">
          <div className="column">
            <a href="src\assets\song 1.jpg" rel="magnific" className="inited">
              <img src="src\assets\song 1.jpg" alt="Image 1" className="hover-shadow cursor" />
            </a>
          </div>
          <div className="column">
            <a href="src\assets\song 2.jpg" rel="magnific" className="inited">
              <img src="src\assets\song 2.jpg" alt="Image 2" className="hover-shadow cursor" />
            </a>
          </div>
          <div className="column">
            <a href="src\assets\song 3.jpg" rel="magnific" className="inited">
              <img src="src\assets\song 3.jpg" alt="Image 3" className="hover-shadow cursor" />
            </a>
          </div>
          <div className="column">
            <a href="src\assets\song 4.jpg" rel="magnific" className="inited">
              <img src="src\assets\song 4.jpg" alt="Image 3" className="hover-shadow cursor" />
            </a>
          </div>
          <div className="column">
            <a href="src\assets\song 5.jpg" rel="magnific" className="inited">
              <img src="src\assets\song 5.jpg" alt="Image 3" className="hover-shadow cursor" />
            </a>
          </div>
          <div className="column">
            <a href="src\assets\song 6.jpg" rel="magnific" className="inited">
              <img src="src\assets\song 6.jpg" alt="Image 3" className="hover-shadow cursor" />
            </a>
          </div>
          <div className="column">
            <a href="src\assets\song 7.jpg" rel="magnific" className="inited">
              <img src="src\assets\song 7.jpg" alt="Image 3" className="hover-shadow cursor" />
            </a>
          </div>
          <div className="column">
            <a href="src\assets\song 8.jpg" rel="magnific" className="inited">
              <img src="src\assets\song 8.jpg" alt="Image 3" className="hover-shadow cursor" />
            </a>
          </div>
        </div>
      </div>

      <div className="vermax scroll-animation">
        <h3>How It Works</h3>
        <h4>Book Car Service online in 3 simple steps</h4>
        <div className="payment">

          <div className="hok">
            <img src="src/assets/repair.jpg" alt="Select Services" />
            <div className="lor">
              <h5>Select Desired Services</h5>
            </div>
          </div>
          <span><i class="fas fa-long-arrow-alt-right    "></i></span>

          <div className="hok">
            <img src="src\assets\calendar.avif" alt="Select Services" />
            <div className="lor">
              <h5>Choose Date & Time</h5>
            </div>
          </div>
          <span><i class="fas fa-long-arrow-alt-right    "></i></span>
          <div className="hok">
            <img src="src\assets\payment.png" alt="Select Services" />
            <div className="lor">
              <h5>Select Payment Option</h5>
            </div>
          </div>
        </div>
        <div className='model'>
          <button onClick={openModal}>Request A Call Back</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Login Modal"
          >

            <div className='goha'>
              <button onClick={closeModal}>✕</button>
              <div className="div">
                <h2>GET FREE QUOTATION FOR YOUR CAR</h2>
                <h3>Fill in your details below to request a call back</h3>
              </div>
              <div className='chandel'>
                <div className="sage">
                  <img src="src\assets\banner.png" alt="" />
                  <br />
                  <img src="src\assets\sample.jpeg" alt="" />
                </div>


                <div className='Govishs'>
                  <div className="login">
                    <label htmlFor="Name">Name</label>
                    <input type="text" id="Name" name="Name" placeholder='Name' />
                  </div>

                  <div className="login">
                    <label htmlFor="Phone">Phone</label>
                    <div className="phone-input">
                      <select id="country-code">
                        <option value="+1">🇺🇸 +1 (United States) </option>
                        <option value="+1">🇨🇦 +1 (Canada)</option>
                        <option value="+44">🇬🇧 +44 (United Kingdom)</option>
                        <option value="+91">🇮🇳  +91 (India)</option>
                      </select>
                      <input type="tel" id="Phone" name="Phone" placeholder="Phone number" />
                    </div>
                  </div>

                  <div className="login">
                    <label htmlFor="Content">What are you looking for? (Optional)</label>
                    <select class="form-select" fdprocessedid="ck1141">

                      <optio>Click to select </optio>

                      <option value="car-wash">Car Wash</option>

                      <option value="insurance">Car Insurance</option>

                      <option value="workshop">Garage / Workshop</option>

                      <option value="parts">Car Parts</option>

                      <option value="others">Other</option>

                    </select>
                  </div>

                </div>

              </div>
              <div className='call'>
                <button > <i class="fa-solid fa-phone"></i>Request A Call Back</button>
              </div>

            </div>

          </Modal>
        </div>
      </div>
      <footer>
        <div className="Aces scroll-animation">
          <div className="Sabos">
            <div className="Luffys">
              <div className="cols">
                <h2 className='ttles'>Racing</h2>
                <a href="">Ferrari Driver Academy</a>
                <a href="">Scuderia Ferrari HP</a>
                <a href="">Carlos Sainz</a>
                <a href="">Charles Leclerc</a>
                <a href="">Hypercar</a>
                <a href="">Esports</a>
                <a href="">Gtx</a>
              </div>
              <div className="cols">
                <h2 className='ttles'>Sports Cars</h2>
                <a href="">Configure your Ferrari</a>
                <a href="">Recall information</a>
                <a href="">MyFerrari</a>
                <a href="">Pre-owned</a>
                <a href="">TechInfo</a>
                <a href="">Dealers</a>
                <a href="">Range</a>
              </div>
              <div className="cols">
                <h2 className='ttles'>Experiences</h2>
                <a href="">Ferrari World Abu Dhabi</a>
                <a href="">Ferrari Land Barcelona</a>
                <a href="">Ferrari Esports Series</a>
                <a href="">Ristorante Cavallino</a>
                <a href="">Ferrari Museums</a>
                <a href="">Corse Clienti</a>
                <a href="">Quality</a>
              </div>
              <div className="cols">
                <h2 className='ttles'>NEWSROOM</h2>
                <a href="">Thought leadership</a>
                <a href="">Press releases</a>
                <a href="">Media library</a>
                <a href="">Overview</a>
              </div>
              <div className="cols">
                <h2 className='ttles'>CAREERS</h2>
                <a href="">Openings @ TXT☠RAFA</a>
                <a href="">Life @ TXT☠RAFA</a>
                <a href="">Overview</a>
                <a href="">FAQs</a>
              </div>
            </div>
          </div>

          <div className="nines">
            <h2>SOCIAL MEDIA</h2>
            <div className="icons">
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
                <h4>Develop By - Rishikesh Chandel,Govish Chandel</h4>
                
            </div>
    </div >
  );

};



export default Service;
