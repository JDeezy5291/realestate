import React from 'react'
import './style.css';

const Description = (props)=> {
    return (
        <section id="desc">
        <div className="flex container">
            <img src="https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Property 1" />
            <div>
                <h2>We Are the Best Real Estate Company</h2>
                <p className="large-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit Quo suscipit omnis iste velit maxime.</p>
                <ul>
                    <li>Placeat maxime animi minus</li>
                    <li>Placeat maxime animi minus</li>
                    <li>Placeat maxime animi minus</li>
                    <li>Placeat maxime animi minus</li>
                    <li>Placeat maxime animi minus</li>
                </ul>
                <button className="rounded">Learn More</button>
            </div>
        </div>
    </section>  
    )
}

export default Description