//import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "./Navbar.css";

// const Navbar = () => {
/*const [active, setActive] = useState(false);
const [searchTerm, setSearchTerm] = useState('');

const handleSearch = (e) => {
  e.preventDefault();
  // Add your search logic here
  console.log(`Searching for: ${searchTerm}`);
// };

//return (
  /*<nav>
    <a href="/"><h1>Winter is Coming</h1></a>
    <li>
        <form onSubmit={handleSearch}>
          <div className="search-bar">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              <i className="fas fa-search search-icon"></i>
            </button>
          </div>
        </form>
      </li>
    <menu className={`${active? 'active' : ''}`}>
      <li>
        <Link to={"/home"} >Home</Link>
      </li>
      <li>
        <Link to={"/project"} >Project</Link>
      </li>
      <li>
        <Link to={"/service"} >Service</Link>
      </li>
      <li>
        <Link to={"/about"} >About</Link>
      </li>
      <li>
        <Link to={"/contact"} >Contact</Link>
      </li>
    </menu>
    <button className='btn'>Signup</button>
    <div className='hamburger' onClick={() => setActive(!active) }></div>
  // { </nav> */
// );
// };

// export default Navbar;

{/* <form>
  <div className="form-group">
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" name="username" />
  </div>

  <div className="form-group">
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" />
  </div>

  <button type="submit">Login</button>
</form>

 */}








<div>

  <label class="form-label">What are you looking for? (Optional)</label>

  <select class="form-select" fdprocessedid="ck1141">

    <option>Click to select</option>

    <option value="car-wash">Car Wash</option>

    <option value="insurance">Car Insurance</option>

    <option value="workshop">Garage / Workshop</option>

    <option value="parts">Car Parts</option>

    <option value="others">Other</option>

  </select>

</div>




import React, { useEffect } from 'react';
import './Home.css';
import Marquee from "react-fast-marquee";


import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
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

  return (
    <div className="main">
      <div className='home'>
        <div className="image">
          <img src="src/assets/skull-with-swords.jpg" alt="" />
          <h2 datatype='Car Dealer and Experience'> </h2>
          <h3>A car is a vehicle that has wheels, carries a small number <br /> of passengers, and is moved by an engine or a motor.</h3>
          <input className='button' type="submit" value=">| Explore Product" />
        </div>
      </div>
      <div className="information scroll-animation">
        <h4>Engine</h4>
        <div className="Engine">
          <div className="first">
            <img src="src/assets/kooggggg.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores porro, eius praesentium dolor ipsam labore quidem recusandae ea accusantium temporibus iure blanditiis eos in adipisci, obcaecati corrupti sapiente totam accusamus. Tenetur vel a perspiciatis dicta debitis praesentium animi nostrum.</p>
          </div>
        </div>
        <div className="Engine2 scroll-animation">
          <div className="second">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores porro, eius praesentium dolor ipsam labore quidem recusandae ea accusantium temporibus iure blanditiis eos in adipisci, obcaecati corrupti sapiente totam accusamus. Tenetur vel a perspiciatis dicta debitis praesentium animi nostrum.</p>
            <img src="src/assets/carengine3.jpg" alt="" />
          </div>
        </div>
        <div className='banner scroll-animation'>
          <h5>TXT CARS</h5>
          <Marquee>
            <span><img src="src/assets/car1.jpg" alt="" /></span>
            <span><img src="src/assets/car2.jpg" alt="" /></span>
            <span><img src="src/assets/car3.webp" alt="" /></span>
            <span><img src="src/assets/car4.jpg" alt="" /></span>
            <span><img src="src/assets/car5.webp" alt="" /></span>
            <span><img src="src/assets/car6.jpg" alt="" /></span>
            <span><img src="src/assets/car7.jpg" alt="" /></span>
            <span><img src="src/assets/car8.jpg" alt="" /></span>
            <span><img src="src/assets/car9.jpg" alt="" /></span>
          </Marquee>
        </div>
        <div className="Engine3 scroll-animation">
          <div className="third">
            <img src="src/assets/engine6.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores porro, eius praesentium dolor ipsam labore quidem recusandae ea accusantium temporibus iure blanditiis eos in adipisci, obcaecati corrupti sapiente totam accusamus. Tenetur vel a perspiciatis dicta debitis praesentium animi nostrum.</p>
          </div>
        </div>
        <div className="Engine4 scroll-animation">
          <div className="four">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores porro, eius praesentium dolor ipsam labore quidem recusandae ea accusantium temporibus iure blanditiis eos in adipisci, obcaecati corrupti sapiente totam accusamus. Tenetur vel a perspiciatis dicta debitis praesentium animi nostrum.</p>
            <img src="src/assets/engine7.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className='van scroll-animation'>
        <h5>TXT RAFA COMPANY </h5>
        <h6>HAPPY HOILDAY @TXT RAFA</h6>
        <p>Car moments and memories are what happy MODIFLY are made of! Travel makes you explore and experience new things, and helps you embark on the journey of self-discovery. So get ready to reward yourself. Allow us to be your gracious host. We promise you unforgettable holidays and memorable experiences.</p>
        <div className="container">
          <div className="container-first">
            <img src="src/assets/audi-logoooo.jpg" alt="errr" />
            <img src="src/assets/Rolls logo.jpg" alt="errr" />
            <img src="src/assets/Bmw logo.jpg" alt="errr" />
            <img src="src/assets/Mercedes logo.jpg" alt="errr" />
          </div>
          <div className="container-second">
            <img src="src/assets/toyota-logo.jpg" alt="errr" />
            <img src="src/assets/car logo.jpg" alt="errr" />
            <img src="src/assets/hyunai logo.png" alt="errr" />
            <img src="src/assets/new tata logo.jpg" alt="errr" />
          </div>
        </div>
        <h4>Newsletter</h4>
        <p>Stay up to date with the latest news from the world of TXT☠RAFA.</p>
        <div className='bin'>
          <button>SUBSCRIBE</button>
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

          <div className="nines ">
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
    </div>
  );
}

export default Home;


// .home {
//   width: 100 %;
//   height: 100vh;
//   background - image: linear - gradient(rgba(0, 0, 0, 0.7), rgba(45, 38, 38, 0.7)), url(../assets/carwallpaper.jpg);
//   background - size: cover;
//   background - position: center;

// }
// .image {
//   text - align: center;
//   padding: 2rem;
// }
// .image h2 {
//   font - size: 3rem;
//   font - weight: 300;
//   color: #000000;
//   position: relative;
//   padding - top: 2rem;
// }
// h2::before {
//   content: attr(datatype);

//   top: 0;
//   left: 0;
//   width: 100 %;
//   height: 100 %;
//   color: rgb(48, 255, 16);

//   animation: animate 1.7s linear infinite;
// }
// @keyframes animate {
//   0 %,
//     18 %,
//     20 %,
//     50.1 %,
//     60.1 %,
//     80 %,
//     90.1 %,
//     92 % {
//       color: rgb(0, 96, 78);
//       box- shadow: none;
// }
// 60.1 %,
//   80 %,
//   92 %,
//   97 % {
//     color: rgb(182, 2, 2);
//     text- shadow: none;
//   }
// }
// .image h3 {
//   margin - bottom: 2rem;
//   font - size: 1.4rem;
//   color: #ffffff;
//   margin - top: 3rem;
// }
// .image img {
//   height: 200px;
//   width: 200px;
//   opacity: 0.5;
//   background - color: #ff0000;
//   border - radius: 50 %;
//   margin - top: 3rem;
// }
// .button {
//   padding: 0.6rem 2rem;
//   background: #f70000;
//   border - radius: 1rem;
//   color: #fff;
//   font - size: 1rem;
//   cursor: pointer;
//   border: none;
//   transition: background - color 0.3s ease -in -out;
//   margin - bottom: 6rem;
// }
// .button:hover {
//   background - color: rgb(0, 255, 81);
// }
// .information {
//   width: 100 %;
//   height: 100 %;
//   margin: 1rem 0px;
// }
// .information h4 {
//   text - align: center;
//   font - size: 3rem;
//   color: rgb(162, 0, 255);
//   padding: 0rem 0;
//   font - weight: 300;
//   position: relative;
//   background - color: #000;
// }
// .Engine {
//   padding: 0rem 1rem;
//   display: flex;
//   justify - content: space - between;
//   align - items: center;
//   background - color: #5c5757;
// }
// .first {
//   display: flex;
//   justify - content: space - between;
//   align - items: center;
// }
// .first p {
//   font - size: 1.5rem;
//   text - align: center;
//   line - height: 2rem;
//   /* animation: animate 4s linear forwards; */
//   color: whitesmoke;
// }
// .Engine2 {
//   padding: 0rem 1rem;
//   display: flex;
//   justify - content: space - between;
//   align - items: center;
//   background - color: #5c5757;
// }
// .second {
//   display: flex;
//   justify - content: space - between;
//   align - items: center;
// }
// .second p {
//   font - size: 1.5rem;
//   text - align: center;
//   line - height: 2rem;
//   /* animation: animate 4s linear forwards; */
//   color: whitesmoke;
// }
// .Engine3 {
//   padding: 0rem 1rem;
//   display: flex;
//   justify - content: space - between;
//   align - items: center;
//   background - color: #5c5757;
// }
// .third {
//   display: flex;
//   justify - content: space - between;
//   align - items: center;
// }
// .third img {
//   height: 33rem;

// }
// .third p {
//   font - size: 1.5rem;
//   text - align: center;
//   line - height: 2rem;
//   /* animation: animate 4s linear forwards; */
//   color: whitesmoke;
// }
// .Engine4 {
//   padding: 0rem 1rem;
//   display: flex;
//   justify - content: space - between;
//   align - items: center;
//   background - color: #5c5757;
// }
// .four {
//   display: flex;
//   justify - content: space - between;
//   align - items: center;
// }
// .four img {
//   height: 32rem;
// }
// .four p {
//   font - size: 1.5rem;
//   text - align: center;
//   line - height: 2rem;
//   /* animation: animate 4s linear forwards; */
//   color: whitesmoke;
// }
// @keyframes animate {
//   0 % {
//     opacity: 0;
//     transform: rotateY(98deg);
//     filter: blur(10px);
//   }

//   100 % {
//     opacity: 1;
//     transform: rotateY(0deg);
//     filter: blur(0);
//   }
// } 
// .banner {
//   background: #000000;
//   height: 26rem;
//   font - family: Helvetica Neue, Helvetica, Arial, sans - serif;
//   font - size: 14px;
//   color: #000;
//   margin: 0;
//   padding: 0;
// }
// .banner h5 {
//   text - align: center;
//   color: whitesmoke;
//   font - size: 1.5rem;
//   padding: 0.5rem 0rem;
// }
// span {
//   text - align: center;
//   font - size: 18px;
//   justify - content: center;
//   align - items: center;
// }
// span img {
//   display: block;
//   padding: 3rem 2rem;
//   height: 25rem;
//   object - fit: cover;
//   animation: animate 2s alternate - reverse infinite;
// }
// .van h5 {
//   text - align: center;
//   font - size: 2.3rem;
//   padding: 1rem 0rem;
// }
// .van h6 {
//   text - align: center;
//   font - size: 1.4rem;
//   padding: 18px 0px;
// }
// .van p {
//   text - align: center;
//   margin: 0 6rem;
//   font - size: 18px;
// }
// .container {
//   border: #000 solid;
//   margin: 1rem 2rem;
//   background - color: rgb(40, 17, 17);
// }
// .container - first {
//   padding: 1rem 0rem;
//   height: auto;
//   width: 100 %;
// }
// .container - first img {
//   height: 7rem;
//   padding: 1rem 7rem;
// }
// .container - second {
//   padding: 1rem 0rem;
//   height: auto;
//   width: 100 %;
// }
// .container - second img {
//   height: 7rem;
//   padding: 1rem 7rem;
// }
// .van {
//   background - color: white;
// }
// .van h4 {
//   text - align: center;
//   font - size: 2rem;
// }
// .van p {
//   text - align: center;
//   font - size: 1.5rem;
//   padding: 2rem 0rem;
// }
// .bin {
//   align - items: center;
//   position: relative;
//   padding: 2rem;
// }
// .bin button {
//   position: absolute;
//   bottom: 10px;
//   left: 50 %;
//   transform: translateX(-50 %);
//   background - color: #333;
//   color: #fff;
//   border: none;
//   padding: 10px 20px;
//   font - size: 1.5rem;
//   cursor: pointer;
// }
// .bin button:hover {
//   background - color: #cf7cff;
// }

// .Ace {
//   max - width: 100 %;
//   margin: 0 auto;
//   background - color: #0a0a5f;
//   padding - top: 3rem;
// }
// .Sabo {
//   max - width: 1600px;
//   margin: 0 auto;
//   padding: 0px 15px;
//   height: 30rem;
// }
// .Luffy {
//   --bs - gutter - x: 1.5rem;
//   --bs - gutter - y: 0;
//   display: flex;
//   flex - wrap: wrap;
//   margin - top: calc(-1 * var(--bs - gutter - y));
//   margin - right: calc(-0.5 * var(--bs - gutter - x));
//   margin - left: calc(-0.5 * var(--bs - gutter - x));
// }
// .Ace.ttle {
//   font - size: 16px;
//   line - height: 42px;
//   color: #307fe2;
//   margin - bottom: 10px;
//   justify - content: space - between;
//   align - items: center;
//   border - bottom: 1px solid rgba(48, 127, 226, 0.2392156863);
//   text - transform: uppercase;
//   padding: 0rem 4rem;
//   font - size: 1.3rem;
//   margin - right: 3rem;
// }

// .col a {
//   color: aliceblue;
//   display: flex;
//   padding: 0.8rem 3.7rem;
//   text - align: center;
//   list - style: none;
// }
// .col a:hover {
//   color: blue;
//   transition: 0.3s;
// }
// .nine {
//   padding: 2rem 0rem;
//   width: auto;
//   height: auto;
// }
// .nine h2 {
//   color: #307fe2;
//   text - align: center;
//   font - size: 2rem;
//   padding: 1rem 0rem;
// }
// .icon {
//   display: flex;
//   justify - content: center;
//   flex - direction: row;
//   align - items: baseline;
// }
// .icon span {
//   font - size: 1.7rem;
//   padding: 10px 2rem;
// }
// .icon span a {
//   color: #ff0000;
// }
// .icon span:hover {
//   scale: 1.3;
//   transition: color 0.4s ease -in -out;
//   color: blue;
// }

// @keyframes scale {
//   0 % {
//     transform: scale(1);
//   }

//   100 % {
//     transform: scale(1.1);
//   }
// }

// @media only screen and(min - width: 150px) and(max - width: 940px) {
//   .image img{
//     background - image: none;
//     background: none;
//     background - size: none;

//   }
// }


















/* CSS for Scroll Animation */
@keyframes slideIn {
  0 % {
    transform: translateY(50px);
    opacity: 0;
  }
  100 % {
    transform: translateY(0);
    opacity: 1;
  }
}

.scroll - animation {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease - out, transform 0.6s ease - out;
}

.scroll - animation - visible {
  animation: slideIn 0.6s forwards;
}
<a href=""><input type="text" name="" id="" /></a>









































import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import 'swiper/css/navigation';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
// import { Model } from './components/Model';
import Modal from 'react-modal';









  const vermithorRef = useRef(null);
  const norwayRef = useRef(null);
  const casRef = useRef(null);

  const [isVermithorVisible, setIsVermithorVisible] = useState(false);
  const [isNorwayVisible, setIsNorwayVisible] = useState(false);
  const [isCasVisible, setIsCasVisible] = useState(false);
  const [modelsIsopen, setmodelsIsopen] = useState(false);

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
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }



  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === vermithorRef.current) {
            setIsVermithorVisible(true);
          } else if (entry.target === norwayRef.current) {
            setIsNorwayVisible(true);
          } else if (entry.target === casRef.current) {
            setIsCasVisible(true);
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      threshold: 0.1, // Element is considered visible when 10% of it is in view
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (vermithorRef.current) observer.observe(vermithorRef.current);
    if (norwayRef.current) observer.observe(norwayRef.current);
    if (casRef.current) observer.observe(casRef.current);

    return () => {
      if (vermithorRef.current) observer.unobserve(vermithorRef.current);
      if (norwayRef.current) observer.unobserve(norwayRef.current);
      if (casRef.current) observer.unobserve(casRef.current);
    };
  }, []);

  return (
    <div className="service-page">
      <div
        className={vermithor ${isVermithorVisible ? 'visible' : ''}}
        ref={vermithorRef}
      >
        <div className='control'>
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
      </div>
      <div
        className={norway ${isNorwayVisible ? 'visible' : ''}}
        ref={norwayRef}
      >
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

      <div
        className={cas ${isCasVisible ? 'visible' : ''}}
        ref={casRef}
      >
        <div className="cas">
          <h5>Most Utilized Free Services</h5>
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
      <div className="slider">
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

      <div className="gallery">
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

      <div className="vermax">
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
                {/* <button onClick={closeModal}>✖</button> */}
              </div>
              {/* <button onClick={closeModal}>✖</button> */}

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
    </div>
  










