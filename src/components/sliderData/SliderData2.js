const SliderData2 = ({ reviewData }) => {
  return (
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
            <p>{reviewData.date}</p>
          </div>
        </div>
        <div className="review-heading">
          <h4 className="fw-600 ">{reviewData.heading} </h4>
        </div>
        <div className="review">
          <div className="review-image">
            <img src={reviewData.imgURL} alt="" />
          </div>
          <p className="fw-300-i reviewer-review">{reviewData.review}</p>
          <h3 className="fw-700 reviewer">{reviewData.reviewer}</h3>
        </div>
      </div>
    </div>
  );
};

export default SliderData2;
