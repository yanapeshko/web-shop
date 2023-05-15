import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { MdWifiProtectedSetup } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 250,
    height: 300,
    zoomWidth: 600,
    img: "https://m.media-amazon.com/images/I/61BJ8NGdBCL._AC_SY355_.jpg",
  };
  const [orederedProduct, setorederedProduct] = useState(true);
  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  className="img-fluid"
                  src="https://m.media-amazon.com/images/I/61BJ8NGdBCL._AC_SY355_.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  src="https://m.media-amazon.com/images/I/61BJ8NGdBCL._AC_SY355_.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  src="https://m.media-amazon.com/images/I/61BJ8NGdBCL._AC_SY355_.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  src="https://m.media-amazon.com/images/I/61BJ8NGdBCL._AC_SY355_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids Headphones Bulk 10 Pack Multi Colored For Students
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ 100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    value={4}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 2 Reviews)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Havells</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 felx-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 felx-column mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 felx-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      style={{ width: "60px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0">ADD TO CART</button>
                    <button className="button signup">Buy It Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="#">
                      <MdWifiProtectedSetup className="fs-5 me-2" />
                      Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <AiOutlineHeart className="fs-5 me-2" />
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10 my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br />
                    We ship all US domestic orders within 5-10 business days!
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link :</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://m.media-amazon.com/images/I/61BJ8NGdBCL._AC_SY355_.jpg"
                      );
                    }}
                  >
                    Copy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrappper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
                repudiandae doloribus molestias possimus recusandae incidunt
                libero ipsum inventore perspiciatis eius. Assumenda amet
                impedit, error dolore mollitia dolores cumque. Labore, voluptas.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2 "> Customer Reviews</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orederedProduct && (
                  <div>
                    <Link className="text-dark text-decoration-underline" />
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4> Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      value={4}
                      edit={true}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Navdeep</h6>
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis excepturi quidem cum itaque ex ipsam quam quaerat
                    commodi distinctio? Magnam consequuntur temporibus inventore
                    nemo suscipit quae doloremque dolorum sequi minus?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
