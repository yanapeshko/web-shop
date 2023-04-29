import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link className="d-flex align-items-center gap-10" to="/blogs">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  className="img-fluid w-100 my-4"
                  src="images/blog-1.jpg"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  dolores ex sunt corporis repellat, eum veritatis ducimus amet!
                  Dolore sint doloribus mollitia perferendis. Reiciendis quod,
                  vitae quibusdam vel aperiam dolores?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
