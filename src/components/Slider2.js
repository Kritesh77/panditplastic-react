import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import SliderData2 from "./sliderData/SliderData2.js";
import reviews from "../reviews.js";
// console.log(items)
const reviewMap = reviews.map((reviewData) => (
  <SliderData2 key={reviewData.id} reviewData={reviewData} />
));
export default class Slider2 extends Component {
  render() {
    const settings = {
      autoplay: true,
      infinite: true,
      centerMode: true,
      focusOnSelect: true,
      speed: 800,
      dots: true,
      mobileFirst: true,
      adaptiveHeight: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="fourth-wrap review-container ">
        <h2 className="med">
          REAL REVIEWS FROM REAL CUSTOMERS
          <span className="review-arrows">
            <i className="fas fa-angle-left" id="review-left"></i>
            <i className="fas fa-angle-right" id="review-right"></i>
          </span>
        </h2>
        <Slider {...settings} className="review-box" id="review-slider">
          {reviewMap}
        </Slider>
      </section>
    );
  }
}
