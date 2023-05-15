import React from "react";

import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">SignUp</h3>
              <form className="d-flex flex-column gap-15" action="">
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  classname="mt-1"
                />
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  classname="mt-1"
                />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  classname="mt-1"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  classname="mt-1"
                />

                <div>
                  <div className=" mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
