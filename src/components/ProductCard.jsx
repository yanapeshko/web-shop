import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist icon" />
            </Link>
          </div>
          <div className="product-image">
            <img className="img-fluid" src="images/watch.jpg" alt="product" />
            <img className="img-fluid" src="images/watch-1.jpg" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              value={4}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare icon" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view icon" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcard icon" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist icon" />
            </Link>
          </div>
          <div className="product-image">
            <img className="img-fluid" src="images/watch.jpg" alt="product" />
            <img className="img-fluid" src="images/watch-1.jpg" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              value={4}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare icon" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view icon" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcard icon" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
