import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import AddCustomer from "./AddCustomer";
const Login = () => {
  const userRef = useRef();
  return (
    <div>
      <section class="Form my-4 mx-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-p/1b/e6/f4/6b/the-foodie-works-dishes.jpg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="col-lg-7 px-5 pt-5">
              <h1 class="font-weight-bold py-3">Food Delivery</h1>
              <h4>Sign into your account</h4>
              <form>
                <div class="form-row">
                  <div class="col-lg-7">
                    <input
                      type="email"
                      placeholder="Email-Address"
                      class="form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-lg-7">
                    <input
                      type="password"
                      placeholder="** "
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-lg-7">
                    <button type="button" class="btn1 mt-3 mb-5">
                      Login
                    </button>
                  </div>
                </div>

                <p>
                  Don't have an account? <Link to="/add">Register here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
