import React from "react";
import ReactStars from "react-rating-stars-component";

const SpecialProduct = () => {
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havells</h5>
            <h6 className="title">
              Samsung Galaxy Note10+ mobile Phone; Sim...
            </h6>
            <ReactStars
              count={5}
              value="3"
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$100</span> &nbsp; <strike>$200</strike>
            </p>
            <div className="discount-till">
              <p>
                <b>5 days</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
