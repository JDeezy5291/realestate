import React from 'react'
import './style.css';

const Services = (props)=> {
    return (
        <section id="services">
        <div className="container">
            <h2>Services</h2>
            <div className="flex">
                <div>
                    <div className="fas fa-home"></div>
                    <div className="services-card-right">
                        <h3>Search Property</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <a href="#">Learn More</a>
                    </div>
                </div>

                <div>
                    <div className="fas fa-dollar-sign"></div>
                    <div className="services-card-right">
                        <h3>Buy Property</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <a href="#">Learn More</a>
                    </div>
                </div>

                <div>
                    <div className="fas fa-chart-line"></div>
                    <div className="services-card-right">
                        <h3>Investing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <a href="#">Learn More</a>
                    </div>
                </div>

                <div>
                    <div className="fas fa-building"></div>
                    <div className="services-card-right">
                        <h3>List a Property</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <a href="#">Learn More</a>
                    </div>
                </div>

                <div>
                    <div className="fas fa-search"></div>
                    <div className="services-card-right">
                        <h3>Property Locator</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <a href="#">Learn More</a>
                    </div>
                </div>

                <div>
                    <div className="fas fa-mobile-alt"></div>
                    <div className="services-card-right">
                        <h3>PROPERTY MOVER Apps</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <a href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Services;