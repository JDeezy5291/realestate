import React, { Component } from "react";
import Property from "./property";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import property_1 from "../../assets/property_1.jpg";
import property_2 from "../../assets/property_2.jpg";

class Properties extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      centerPadding: 0,
      // speed: 3000,
      // autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // responsive: [
      //   {
      //     breakpoint: 1100,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 1,
      //       infinite: true
      //     }
      //   },
      //   {
      //     breakpoint: 767,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 1,
      //       infinite: true
      //     }
      //   },
      //   {
      //     breakpoint: 530,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       infinite: true
      //     }
      //   }
      // ]
    };
    return (
      <section id="properties">
        <div className="container">
          <h2>Properties</h2>
          <Slider {...settings}>
            <Property
              imgsrc={property_1}
              price="3,400,000"
              beds="6 beds"
              baths="4 baths"
              sqft="4,250 sqft"
              address="480 12th, Unit 14, San Francisco, CA"
            />
            <Property
              imgsrc={property_2}
              price="5,210,000"
              beds="3 beds"
              baths="3 baths"
              sqft="5,250 sqft"
              address="4 Privet Drive, Little Whinging, Surrey, U.K."
            />
            <Property
              imgsrc="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=330"
              price="1,470,000"
              beds="2 beds"
              baths="2 baths"
              sqft="2,500 sqft"
              address="221B Baker Street, London, U.K"
            />
            <Property
              imgsrc="https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=330"
              price="8,600,000"
              beds="5 beds"
              baths="4 baths"
              sqft="3,250 sqft"
              address="308 Negra Arroyo Lane, Albuquerque, NM"
            />
            <Property
              imgsrc="https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=500&w=330"
              price="9,485,000"
              beds="3 beds"
              baths="3 baths"
              sqft="4,600 sqft"
              address="705 Hauser Street, Queens, New York, NY"
            />
            <Property
              imgsrc="https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=330"
              price="10,530,000"
              beds="4 beds"
              baths="3 baths"
              sqft="6,750 sqft"
              address="31 Spooner Street, Quahog, RI"
            />
          </Slider>
        </div>
      </section>
    );
  }
}

export default Properties;