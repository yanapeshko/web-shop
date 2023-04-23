import React from "react";

import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">SignUp</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div className="mt-1">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      className="form-control"
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button className="button border-0">Sign Up</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
