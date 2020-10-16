import React from 'react'
import './style.css';

const Footer = (props)=> {

    // const myDisplay = {
    //      display: 'block !important' 
    //   };

    return (
        <footer>
        <div className="flex container">
            <div className="footer-about">
                <h5>About PROPERTY MOVER</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
            </div>

            <div className="footer-quick-links">
                <h5>Quick Links</h5>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>

            <div className="footer-subscribe">
                <h5>Subscribe to our Newsletter</h5>
                <div id="subscribe-container">
                    <input type="text" placeholder="Enter Email" />
                    <button className="right-rounded">Send</button>
                </div>

                <h5 className="follow-us" id="myDisplay">Follow Us</h5>
                <ul>
                    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                    <li><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                </ul>
            </div>
        </div>
    </footer>
    )
}

export default Footer;