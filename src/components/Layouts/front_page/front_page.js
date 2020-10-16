import React from 'react';
import './style.css';
import About from '../../about/About';
import Agents from '../../agents/Agents';
import Contact from '../../contact/Contact';
import Direction from '../../direction/Direction';
import Properties from '../../properties/Properties';
import Services from '../../services/Services';
import Testimonials from '../../testimonials/Testimonials';

function FrontPage() {
  return (
    <div>
      <About />
      <Properties />
      <Agents />
      <Services />
      <Testimonials />
      <Contact />
      <Direction />
    </div>
  );
}

export default FrontPage;
