import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      id="newslider-right"
      className="fas fa-arrow-right"
      style={{ ...style, zIndex: "99" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      id="newslider-left"
      className="fas fa-arrow-left"
      style={{ ...style, zIndex: "99" }}
      onClick={onClick}
    ></div>
  );
}

class Slider1 extends Component {
  render() {
    const settings = {
      autoplay: true,
      infinite: true,
      centerMode: true,
      focusOnSelect: true,
      speed: 800,
      dots: false,
      mobileFirst: true,
      adaptiveHeight: true,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
      <section className="page-pad borderbtm third-wrap new-container auto-section">
        <h1 className="med">New Arrivals</h1>
        <Slider {...settings}>
          <div>
            <div className="new-box flex">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41%2BxjkVjsFL.jpg"
                alt=""
              />
              <div className="new-item-details">
                <h4 className="fw-400 new-item">Chocolate Compound</h4>
                <h4 className="fw-500 new-item-price">
                  <span className="rs-symbol">&#8377;</span>500
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className="new-box flex">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41%2BxjkVjsFL.jpg"
                alt=""
              />
              <div className="new-item-details">
                <h4 className="fw-400 new-item">Chocolate Compound</h4>
                <h4 className="fw-500 new-item-price">
                  <span className="rs-symbol">&#8377;</span>500
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className="new-box flex">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41%2BxjkVjsFL.jpg"
                alt=""
              />
              <div className="new-item-details">
                <h4 className="fw-400 new-item">Chocolate Compound</h4>
                <h4 className="fw-500 new-item-price">
                  <span className="rs-symbol">&#8377;</span>500
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className="new-box flex">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41%2BxjkVjsFL.jpg"
                alt=""
              />
              <div className="new-item-details">
                <h4 className="fw-400 new-item">Chocolate Compound</h4>
                <h4 className="fw-500 new-item-price">
                  <span className="rs-symbol">&#8377;</span>500
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className="new-box flex">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41%2BxjkVjsFL.jpg"
                alt=""
              />
              <div className="new-item-details">
                <h4 className="fw-400 new-item">Chocolate Compound</h4>
                <h4 className="fw-500 new-item-price">
                  <span className="rs-symbol">&#8377;</span>500
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className="new-box flex">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41%2BxjkVjsFL.jpg"
                alt=""
              />
              <div className="new-item-details">
                <h4 className="fw-400 new-item">Chocolate Compound</h4>
                <h4 className="fw-500 new-item-price">
                  <span className="rs-symbol">&#8377;</span>500
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className="new-box flex">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41%2BxjkVjsFL.jpg"
                alt=""
              />
              <div className="new-item-details">
                <h4 className="fw-400 new-item">Chocolate Compound</h4>
                <h4 className="fw-500 new-item-price">
                  <span className="rs-symbol">&#8377;</span>500
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className="new-box flex">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41%2BxjkVjsFL.jpg"
                alt=""
              />
              <div className="new-item-details">
                <h4 className="fw-400 new-item">Chocolate Compound</h4>
                <h4 className="fw-500 new-item-price">
                  <span className="rs-symbol">&#8377;</span>500
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className="new-box flex">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41%2BxjkVjsFL.jpg"
                alt=""
              />
              <div className="new-item-details">
                <h4 className="fw-400 new-item">Chocolate Compound</h4>
                <h4 className="fw-500 new-item-price">
                  <span className="rs-symbol">&#8377;</span>500
                </h4>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}
export default Slider1;
