import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import watch from "../images/watch.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="left-checkout-data">
              <h3 className="website-name">Yanazon</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item active total-price"
                    aria-current="page"
                  >
                    Infromation
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price">Shipping</li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Yana Peshko (yanapeshko917@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                className="d-flex flex-wrap gap-15 justify-content-between"
                action=""
              >
                <div className="w-100">
                  <select className="form-control form-select" name="" id="">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, Suite, etc"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
                <div className="flex-grow-1">
                  <select className="form-control form-select" name="" id="">
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ZIP code"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link className="text-dark" to="/cart">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link className="button" to="/cart">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position relative">
                    <span
                      style={{ top: "-10px", right: "530px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src={watch} alt="product" />
                  </div>
                  <div>
                    <h5 className="total-price">Title</h5>
                    <p className="total-price">s / paragraph</p>
                  </div>
                </div>

                <div className="flex-grow-1">
                  <h5 className="total">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$ 1000</p>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 1000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 1000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
