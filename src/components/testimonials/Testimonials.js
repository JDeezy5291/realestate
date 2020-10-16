import React from 'react'
import './style.css';

const Testimonials = (props)=> {
    return (
        <section id="testimonials">
        <div className="container">
            <h2>What Our Clients Are Saying</h2>
            <div id="testimonials-slider">
                <div>
                    <blockquote>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum vitae explicabo dolore ratione. Quia iure quod ipsa blanditiis sint nulla a nam veritatis ex eos. Dicta molestiae dolorum laudantium."</p>
                    </blockquote>
                    <div className="testimonials-caption">
                        <img src="https://onclickwebdesign.com/wp-content/uploads/person_7.jpg" alt="Client 7" />
                        <p>John Doe</p>
                    </div>
                </div>

                <div>
                    <blockquote>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum vitae explicabo dolore ratione. Quia iure quod ipsa blanditiis sint nulla a nam veritatis ex eos. Dicta molestiae dolorum laudantium."</p>
                    </blockquote>
                    <div className="testimonials-caption">
                        <img src="https://onclickwebdesign.com/wp-content/uploads/person_5.jpg" alt="Client 7" />
                        <p>Joe Doe</p>
                    </div>
                </div>

                <div>
                    <blockquote>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum vitae explicabo dolore ratione. Quia iure quod ipsa blanditiis sint nulla a nam veritatis ex eos. Dicta molestiae dolorum laudantium."</p>
                    </blockquote>
                    <div className="testimonials-caption">
                        <img src="https://onclickwebdesign.com/wp-content/uploads/person_8.jpg" alt="Client 7" />
                        <p>Jane Doe</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Testimonials;