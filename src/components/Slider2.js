import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import items from "../items.json";
// console.log(items)
const parse = items.map(function (x) {
  console.log(x.name);
});

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
          <div>
            <div className="flex review-detail-box ">
              <div className="stars-date">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="date">
                  <p>01/05/2020</p>
                </div>
              </div>
              <div className="review-heading">
                <h4 className="fw-600 ">
                  Beautiful plants beautifully packaged. everything
                </h4>
              </div>
              <div className="review">
                <div className="review-image">
                  <img src="./images/IMG_8753.jpg" alt="" />
                </div>
                <p className="fw-300-i reviewer-review">
                  Beautiful plants packaged. everything arrived plump and
                  healthy. Thank you!
                </p>
                <h3 className="fw-700 reviewer">"Kritesh Kaushik"</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="flex review-detail-box ">
              <div className="stars-date">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="date">
                  <p>01/05/2020</p>
                </div>
              </div>
              <div className="review-heading">
                <h4 className="fw-600 ">
                  Beautiful plants beautifully packaged. everything
                </h4>
              </div>
              <div className="review">
                <div className="review-image">
                  <img src="./images/IMG_8753.jpg" alt="" />
                </div>
                <p className="fw-300-i reviewer-review">
                  Beautiful plants packaged. everything arrived plump and
                  healthy. Thank you!
                </p>
                <h3 className="fw-700 reviewer">"Kritesh Kaushik"</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="flex review-detail-box ">
              <div className="stars-date">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="date">
                  <p>01/05/2020</p>
                </div>
              </div>
              <div className="review-heading">
                <h4 className="fw-600 ">
                  Beautiful plants beautifully packaged. everything
                </h4>
              </div>
              <div className="review">
                <div className="review-image">
                  <img src="./images/IMG_8753.jpg" alt="" />
                </div>
                <p className="fw-300-i reviewer-review">
                  Beautiful plants packaged. everything arrived plump and
                  healthy. Thank you!
                </p>
                <h3 className="fw-700 reviewer">"Kritesh Kaushik"</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="flex review-detail-box ">
              <div className="stars-date">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="date">
                  <p>01/05/2020</p>
                </div>
              </div>
              <div className="review-heading">
                <h4 className="fw-600 ">
                  Beautiful plants beautifully packaged. everything
                </h4>
              </div>
              <div className="review">
                <div className="review-image">
                  <img src="./images/IMG_8753.jpg" alt="" />
                </div>
                <p className="fw-300-i reviewer-review">
                  Beautiful plants packaged. everything arrived plump and
                  healthy. Thank you!
                </p>
                <h3 className="fw-700 reviewer">"Kritesh Kaushik"</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="flex review-detail-box ">
              <div className="stars-date">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="date">
                  <p>01/05/2020</p>
                </div>
              </div>
              <div className="review-heading">
                <h4 className="fw-600 ">
                  Beautiful plants beautifully packaged. everything
                </h4>
              </div>
              <div className="review">
                <div className="review-image">
                  <img src="./images/IMG_8753.jpg" alt="" />
                </div>
                <p className="fw-300-i reviewer-review">
                  Beautiful plants packaged. everything arrived plump and
                  healthy. Thank you!
                </p>
                <h3 className="fw-700 reviewer">"Kritesh Kaushik"</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="flex review-detail-box ">
              <div className="stars-date">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="date">
                  <p>01/05/2020</p>
                </div>
              </div>
              <div className="review-heading">
                <h4 className="fw-600 ">
                  Beautiful plants beautifully packaged. everything
                </h4>
              </div>
              <div className="review">
                <div className="review-image">
                  <img src="./images/IMG_8753.jpg" alt="" />
                </div>
                <p className="fw-300-i reviewer-review">
                  Beautiful plants packaged. everything arrived plump and
                  healthy. Thank you!
                </p>
                <h3 className="fw-700 reviewer">"Kritesh Kaushik"</h3>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}
