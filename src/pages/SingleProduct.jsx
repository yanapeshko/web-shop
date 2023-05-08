import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";

import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
  const props = {
    width: 250,
    height: 250,
    zoomWidth: 500,
    img: "https://m.media-amazon.com/images/I/61BJ8NGdBCL._AC_SY355_.jpg",
  };
  const [orederedProduct, setorederedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
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
                    <p className="mb-0">( 2 Reviews)</p>
                  </div>
                  <a href="#review">Write a Review</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrappper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam repudiandae doloribus molestias possimus recusandae
                  incidunt libero ipsum inventore perspiciatis eius. Assumenda
                  amet impedit, error dolore mollitia dolores cumque. Labore,
                  voluptas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
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
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
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
                      Reiciendis excepturi quidem cum itaque ex ipsam quam
                      quaerat commodi distinctio? Magnam consequuntur temporibus
                      inventore nemo suscipit quae doloremque dolorum sequi
                      minus?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
