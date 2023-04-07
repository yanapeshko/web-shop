import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const OurStore = () => {
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
