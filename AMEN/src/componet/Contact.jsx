import React from 'react';
import './Contact.css'; // Assuming you'll keep your styles in a separate file

const Contact = () => {
  return (
    <div className='head-body'>
      <div className="contact-container">
        <div className="contact-form-section">
          <div className="form">
            <div className="contact-info">
              <h2 className="title">Contact Us</h2>
              <p className="text">
                We would love to hear from you. Please fill out the form to get in touch with us.
              </p>
              <div className="information">
                <i className="icon fas fa-map-marker-alt"></i>
                <p>123 Main Street, City, Country</p>
              </div>
              <div className="information">
                <i className="icon fas fa-envelope"></i>
                <p>email@example.com</p>
              </div>
              <div className="information">
                <i className="icon fas fa-phone-alt"></i>
                <p>+123 456 7890</p>
              </div>
              <div className="social-media">
                <p>Connect with us:</p>
                <div className="social-icons">
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2 className="title">Send Us a Message</h2>
              <div className="input-container">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="input-container">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="input-containers">
                <label htmlFor="message">Your Message</label>
                {/* <textarea id="message" rows="4" required></textarea> */}
                <input type="Text" id="message" required />
              </div>
              <button className="btn">Send Message</button>
            </div>
          </div>
        </div>

        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202424.13969392914!2d126.90580398002929!3d37.5579572906607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2012d5c39cf%3A0x7e11eca1405bf29b!2sSeoul%2C%20South%20Korea!5e0!3m2!1sen!2sin!4v1726921201995!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
      <footer className='footerx'>
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
    </div>
  );
};

export default Contact;
