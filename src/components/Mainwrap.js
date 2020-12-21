import React, { Component } from "react";

class Mainwrap extends Component {
  render() {
    return (
      <div>
        <section className="flex main-wrap  full-section">
          <div className="main-image-bg">
            <img src="./images/IMG_8773.jpg" alt="" />
          </div>
          <div className="main-text bor whitetext">
            <h1 className="bold">We deal in packaging and bakery</h1>
          </div>
        </section>

        <section className="flex page-pad borderbtm second-wrap featured-container auto-section">
          <div className="featured-box flex">
            <a href="#">
              <h1 className="med">Best Selling</h1>
            </a>
          </div>
          <div className="featured-box flex">
            <a href="#">
              <h1 className="med">Best Selling</h1>
            </a>
          </div>
          <div className="featured-box flex">
            <a href="#">
              <h1 className="med">Best Selling</h1>
            </a>
          </div>
          <div className="featured-box flex">
            <a href="#">
              <h1 className="med">Best Selling</h1>
            </a>
          </div>
        </section>
      </div>
    );
  }
}
export default Mainwrap;
