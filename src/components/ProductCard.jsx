import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative" to=":id">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wish icon" />
            </Link>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={watch} alt="product" />
            <img className="img-fluid" src={watch2} alt="product" />
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
            <p className={`descriprion ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
              cupiditate minus! Praesentium qui velit vero nam quisquam
              incidunt, atque eum, inventore recusandae voluptas eaque libero
              animi optio, dolores magnam esse!
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="compare icon" />
              </Link>
              <Link>
                <img src={view} alt="view icon" />
              </Link>
              <Link>
                <img src={addcart} alt="addcard icon" />
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
              <img src={wishlist} alt="wishlist icon" />
            </Link>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={watch} alt="product" />
            <img className="img-fluid" src={watch2} alt="product" />
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
            <p className={`descriprion ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
              cupiditate minus! Praesentium qui velit vero nam quisquam
              incidunt, atque eum, inventore recusandae voluptas eaque libero
              animi optio, dolores magnam esse!
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare} alt="compare icon" />
              </Link>
              <Link>
                <img src={view} alt="view icon" />
              </Link>
              <Link>
                <img src={addcart} alt="addcard icon" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
