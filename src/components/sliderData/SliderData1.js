import React from "react";

const SliderData1 = ({ sliderdata }) => {
  console.log(sliderdata);
  return (
    <div>
      <div className="new-box flex">
        <img src={sliderdata.imgURL} alt="" />
        <div className="new-item-details">
          <h4 className="fw-400 new-item">{sliderdata.name}</h4>
          <h4 className="fw-500 new-item-price">
            <span className="rs-symbol">&#8377;</span>500
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SliderData1;
