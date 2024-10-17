/*import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/userAction"; // Corrected path
import toast from "react-hot-toast";
import img from "../assets/login.png"; // Ensure this path is correct

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loading, error, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(formData));
    navigate("/profile");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, message, dispatch]);

  return (
    <div>
      <div className="header">
        <h1> Login</h1>
        <span>
          <Link to="/">Home</Link> <small>&#8250;</small> Login
        </span>
      </div>
      <div className="login">
        <div className="login-intro">
          <h2>Login</h2>
          <img src={img} alt="login" />
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button disabled={loading} type="submit" className="btn-primary">
            {loading ? "Loading..." : "Login"}
          </button>
          <div className="login-action">
            <p>
              Not a member?
              <Link to="/signup" className="signup-link">
                {" "}
                SignUp{" "}
              </Link>
              here
            </p>
            <p>
              <Link to="/forgetpassword" className="forgot-password-btn">
                Forgot Password?
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// export default Login;*/




<div className="container">
  <div className="container-first">
    <img src="src\assets\audi-logoooo.jpg" alt="errr" />
    <img src="src\assets\Rolls logo.jpg" alt="errr" />
    <img src="src\assets\Bmw logo.jpg" alt="errr" />
    <img src="src\assets\Mercedes logo.jpg" alt="errr" />
  </div>
  <div className="container-second">
    <img src="src\assets\toyota-logo.jpg" alt="errr" />
    <img src="src\assets\car logo.jpg" alt="errr" />
    <img src="src\assets\hyunai logo.png" alt="errr" />
    <img src="src\assets\new tata logo.jpg" alt="errr" />
  </div>
</div>



// .home {
//   width: 98.2%;
//   height: 100%;
//   padding: 0.5rem 1rem;
//   display: flex;
//   justify-content: end;
//   /* Center content horizontally */
//   align-items: center;
//   background-color: rgb(255, 255, 255);
// }

// .image {
//   justify-content: end;
//   align-items: center;
//   display: flex;
// }
// .image h2{
//   font-size: 3rem;
//   /* padding: 1rem 4rem; */
//   margin: auto;
//   /* margin: 9rem; */
//   padding-right: 22rem;
// }

// .image img{
//   width: 55rem;
//   height: 35rem;
//   padding-top: 9rem;
//   align-items: center;
// }

/* @media (max-width: 633px){
/* .home{
    width: 100rem;
} */
/* }  */

/* Medium devices (tablets, 768px and up) */
/* @media (max-width: 720px) {
  .home {
    width: 60rem;
    background-size: cover;
    background-position: center;
  }

  .image h2 {
    font-size: 2.5rem;
  }

  .image h3 {
    font-size: 1.2rem;
  }

  .image img {
    height: 180px;
    width: 180px;
  }

  .button {
    padding: 0.5rem 1.8rem;
    font-size: 0.9rem;
  }
} */

/* Large devices (desktops, 992px and up) */
/* @media (max-width: 992px) {
  .image h2 {
    font-size: 2.8rem;
    background-size: cover;
    background-position: center;
  }

  .image h3 {
    font-size: 1.3rem;
  }

  .image img {
    height: 190px;
    width: 190px;
  }

  .button {
    padding: 0.55rem 1.9rem;
    font-size: 0.95rem;
  }
} */

/* Extra large devices (large desktops, 1200px and up) */
/* @media (max-width: 1200px) { */
  /* .home{ */
  /* width: 10em; */
  /* } */
  /* .image h2 {
    font-size: 3rem;
  }

  .image h3 {
    font-size: 1.4rem;
  }

  .image img {
    height: 200px;
    width: 200px;
  }

  .button {
    padding: 0.6rem 2rem;
    font-size: 1rem;
  }
} */

/* *********Tab******* */
/* @media only screen and (min-width: 768px) and (max-width: 991px) {
} */

/* ********Mobile********* */
/* @media only screen and (min-width: 320px) and (max-width: 767px) {
} */
/* small devices (tablets, 576px and up) */
/* @media (max-width: 570px) {
  .home {
    width: 250%;
    background-size: cover;
    background-position: center;
  }

  .image h2 {
    font-size: 2rem;
  }

  .image h3 {
    font-size: 1rem;
    font-size: 1rem;
  }

  .image img {
    height: 150px;
    width: 150px;
  }

  .button {
    padding: 0.4rem 1.5rem;
    font-size: 0.8rem;
  }
} */


  /* General Container Styles */
.control {
  display: flex;
  flex - direction: column;
  align - items: center;
  justify - content: center;
  padding: 2rem;
  background: linear - gradient(rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.7));
  height: 90vh;
}

/* Service Container */
.service - container {
  width: 100 %;
  max - width: 1200px;
  background - color: #d3d3d3;
  border - radius: 12px;
  box - shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify - content: space - between;
  align - items: center;
  padding: 2rem;
  margin - bottom: 2rem;
  flex - wrap: wrap;
  opacity: 0; /* Initially hidden */
  transform: translateY(50px); /* Start position for animation */
  transition: all 0.6s ease -in -out;
}

.vermithor.visible.service - container {
  opacity: 1; /* Fade in */
  transform: translateY(0); /* Slide to the original position */
}
/* Image Styling */
.service - container img {
  width: 50 %;
  border - radius: 12px;
  object - fit: cover;
  filter: saturate(8);
}

.head {
  flex: 1;
  padding: 2rem;
  color: #333;
}

.head h2 {
  font - size: 2.9rem;
  margin - bottom: 1.5rem;
  color: #2c3e50;
  font - weight: bold;
  line - height: 1.2;
}

.head ul {
  list - style - type: disc;
  padding - left: 1.5rem;
}

.head ul li {
  font - size: 1.3rem;
  margin - bottom: 1rem;
  color: #555;
}

/* Responsive Design */
@media(max - width: 1024px) {
  .service - container {
    flex - direction: column;
    align - items: center;
    text - align: center;
  }

  .service - container img {
    width: 100 %;
    margin - bottom: 1rem; /* Add margin for spacing */
  }

  .head {
    padding: 1rem;
  }

  .head h2 {
    font - size: 2.5rem;
  }

  .head ul li {
    font - size: 1.2rem;
  }
}

@media(max - width: 768px) {
  .head h2 {
    font - size: 2rem;
  }

  .head ul li {
    font - size: 1.1rem;
  }
}

@media(max - width: 480px) {
  .service - container {
    padding: 1rem;
  }

  .head h2 {
    font - size: 1.8rem;
  }

  .head ul li {
    font - size: 1rem;
  }
}

/* Norway Section */
.norway {
  background - color: #f5f5f5;
  padding: 1rem 2rem;
  border - radius: 8px;
  box - shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin - bottom: 1.5rem;
  opacity: 0; /* Initially hidden */
  transform: translateY(50px); /* Start position for animation */
  transition: all 0.6s ease -in -out;
}

.norway.visible {
  opacity: 1; /* Fade in */
  transform: translateY(0); /* Slide to the original position */
}
.norway h5 {
  font - size: 1.8rem;
  color: #2c3e50;
  margin: 0;
  font - weight: bold;
  text - align: center;
}

.card - container{
  display: flex;
  justify - content: center;
  flex - wrap: wrap;
  margin - top: 4rem;
  gap: 8rem;
}
.card{
  width: 325px;
  background - color: #f0f0f0;
  border - radius: 1rem;
  overflow: hidden;
  box - shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 20px;
}

.card img{
  width: 100 %;
  height: auto;
}
.card - content{
  padding: 2rem;
}
.card h6{
  font - size: 1.5rem;
  margin - bottom: 8px;
  padding: 0.5rem 8px;
}
.card p{
  color: rgb(53, 42, 29);
  font - size: 1.3rem;
  line - height: 1.3;
  padding: 0rem 1rem;
}

.bt{
  display: inline - block;
  padding: 8px 16px;
  background - color: rgb(255, 145, 0);
  text - decoration: none;
  border - radius: 4px;
  margin - top: 16px;
  color: aqua;
}

/* Rest of your styles */

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
































import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className='xc'>
      cofddff
      <div className="containerm">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />

        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
                <img src="img/location.png" className="icon" alt="Location" />
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <img src="img/email.png" className="icon" alt="Email" />
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <p>123-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="#" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label htmlFor="name">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label htmlFor="email">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label htmlFor="phone">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label htmlFor="message">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;
































































.containerm {
  width: 100 %;
  height: 100vh;
  display: flex;
  justify - content: center;
  align - items: center;
  position: relative;
  overflow: hidden;
}

.big - circle {
  position: absolute;
  width: 500px;
  height: 500px;
  background - color: rgba(0, 123, 255, 0.15);
  border - radius: 50 %;
  top: 50 %;
  left: 50 %;
  transform: translate(-50 %, -50 %);
  z - index: 1;
}

.square {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 30px;
  right: 30px;
  z - index: 2;
  opacity: 0.2;
}

/* Form Section Styling */
.form {
  width: 80 %;
  max - width: 900px;
  background - color: #fff;
  border - radius: 10px;
  box - shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  overflow: hidden;
  z - index: 10;
}

/* Contact Info Section */
.contact - info {
  width: 50 %;
  padding: 2rem;
  background - color: #0a74da;
  color: white;
  /* display: flex; */
  flex - direction: column;
  justify - content: center;
} 

.contact - info.title {
  font - size: 2rem;
  font - weight: 600;
}

.contact - info.text {
  margin: 1rem 0;
  font - size: 1rem;
  line - height: 1.6;
}

.information {
  display: flex;
  align - items: center;
  margin - bottom: 1rem;
}

.information.icon {
  width: 24px;
  margin - right: 1rem;
}
.information i{
  color: rgb(0, 0, 0);
}
.social - media {
  margin - top: 1rem;
}

.social - media p {
  font - size: 1rem;
}

.social - icons {
  display: flex;
  gap: 10px;
}

.social - icons a {
  color: white;
  font - size: 1.2rem;
  transition: 0.3s;
}

.social - icons a:hover {
  color: #ffd700;
}

/* Contact Form Section */
.contact - form {
  width: 50 %;
  padding: 2rem;
  position: relative;
}

.contact - form.circle {
  position: absolute;
  border - radius: 50 %;
  background - color: rgba(0, 123, 255, 0.15);
}

.circle.one {
  width: 150px;
  height: 150px;
  top: 50px;
  right: -75px;
}

.circle.two {
  width: 100px;
  height: 100px;
  bottom: 50px;
  left: -50px;
}

.contact - form.title {
  font - size: 1.8rem;
  font - weight: 600;
  margin - bottom: 1.5rem;
  color: #333;
}

/* Input Field Styling */
.input - container {
  position: relative;
  margin - bottom: 1.5rem;
}

.input - container input,
.input - container textarea {
  width: 100 %;
  padding: 0.8rem;
  background - color: #f0f0f0;
  border: 2px solid transparent;
  border - radius: 8px;
  font - size: 1rem;
  outline: none;
  transition: 0.3s;
}

.input - container input: focus,
.input - container textarea:focus {
  border - color: #0a74da;
}

.input - container label {
  position: absolute;
  top: -10px;
  left: 15px;
  background - color: white;
  padding: 0 5px;
  font - size: 0.9rem;
  color: #333;
}

.input - container span {
  position: absolute;
  top: 50 %;
  left: 15px;
  transform: translateY(-50 %);
  pointer - events: none;
  font - size: 0.9rem;
  color: #999;
}

/* Button Styling */
.btn {
  width: 100 %;
  padding: 0.8rem;
  background - color: #0a74da;
  color: white;
  font - size: 1rem;
  border: none;
  border - radius: 8px;
  cursor: pointer;
  transition: background - color 0.3s ease;
}

.btn:hover {
  background - color: #005bb5;
}































import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className="contact">
      <div className="containerm">
        <span className="big-circle"></span>
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
                <i class="fa-solid fa-location-dot"></i>
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <i class="fa-solid fa-envelope"></i>
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <p>123-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="#" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" placeholder='username' />
                <label htmlFor="name">Username</label>
                {/* <span>Username</span> */}
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" placeholder='email' />
                <label htmlFor="email">Email</label>
                {/* <span>Email</span> */}
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" placeholder='phone' />
                <label htmlFor="phone">Phone</label>
                {/* <span>Phone</span> */}
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" placeholder='message'></textarea>
                <label htmlFor="message">Message</label>
                {/* <span>Message</span> */}
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
      <div className='responsive-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202424.13969392914!2d126.90580398002929!3d37.5579572906607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2012d5c39cf%3A0x7e11eca1405bf29b!2sSeoul%2C%20South%20Korea!5e0!3m2!1sen!2sin!4v1726921201995!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  )
}
export default Contact;







import React from 'react'
import './Home.css'
import { useState, useEffect, useRef } from 'react';
const Home = () => {
  const vermithorRef = useRef(null);



  const [isVermithorVisible, setIsVermithorVisible] = useState(false);



  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === vermithorRef.current) {
            setIsVermithorVisible(true);
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

    return () => {
      if (vermithorRef.current) observer.unobserve(vermithorRef.current);

    };
  }, []);
  return (
    <div className='Home-container'>
      <div
        className={`vermithor ${isVermithorVisible ? 'visible' : ''}`}
        ref={vermithorRef}
      >
        <div className='parent'>
          <div className='child'>
            <h4>Welcome to TxT RAFA</h4>
            <h1>Autovent Event and Showroom</h1>
            <p>Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore id do eiusmod. Lorem ipsum non labore.</p>
            <button>Explore</button>
          </div>
          <img src="src/assets/ford2.png" alt="" />
        </div>
      </div>



      <div className="cal ">
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

      <div className='gallery-container '>
        <div className="gallery-wrap">
          <img src="src\assets\back.png" alt="Back Button" />
          <img src="src\assets\next btn.png" alt="Next Button" />
        </div>
        <div className="gallery">
          <div>
            <span><img src="src\assets\z1.jpg" alt="Car 1" /></span>
            <span><img src="src\assets\z2.jpg" alt="Car 2" /></span>
            <span><img src="src\assets\z3.jpg" alt="Car 3" /></span>
          </div>
          <div>
            <span><img src="src\assets\z4.jpg" alt="Car 4" /></span>
            <span><img src="src\assets\z5.jpg" alt="Car 5" /></span>
            <span><img src="src\assets\z6.jpg" alt="Car 6" /></span>
          </div>
        </div>
      </div>
      <div className="boss ">
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

      <div className='taes '>
        <img src="src\assets\work1.jpg" alt="" />
        <div className='Sangs'>
          <h4>  <span>Advanced <span className='spans'> Aerodynamics</span></span> </h4>

          <p> Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id  cillum tempor cupidatat qui nisi proident nostrud dolore id do eiusmod. Lorem ipsum non labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, perspiciatis! <img src="src\assets\Arrow1.png" alt="" /> </p>
        </div>

      </div>
      <div className="cost ">
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
      <footer className='footerxz '>
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
        <h4>Develop By - Govish Chandel</h4>
      </div>
    </div>
  )
}

export default Home
