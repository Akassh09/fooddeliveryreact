import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RestaurantService from "../service/RestaurantService";

const RestLogin = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [restaurantNameValid, setRestaurantNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [restaurantNameTouched, setRestaurantNameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [errAlert, setErrAlert] = useState(false);

  //handler
  const restaurantNameHandler = (e) => {
    setRestaurantName(e.target.value);
    if (e.target.value.trim() !== "") {
      setRestaurantNameValid(true);
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.trim() !== "") {
      setPasswordValid(true);
    }
  };

  // blur handler
  const restaurantNameBlurHandler = (e) => {
    if (restaurantName.trim() == "") {
      setRestaurantNameTouched(true);
      setRestaurantNameValid(false);
      return;
    }
  };

  const passwordBlurHandler = (e) => {
    if (password.trim() == "") {
      setPasswordTouched(true);
      setPasswordValid(false);
      return;
    }
  };

  const createRestaurant = (e) => {
    setErrAlert(false);
    setRestaurantNameTouched(true);
    setPasswordTouched(true);

    if (restaurantName.trim() === "") {
      setRestaurantNameValid(false);
      return;
    }
    setRestaurantNameValid(true);

    if (password.trim() === "") {
      setPasswordValid(false);
      return;
    }
    setPasswordValid(true);
    RestaurantService.reslogin(restaurantName, password)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.restaurantName);
        navigate(`/res/editmenu/` + response.data.restaurantId);
      })
      .catch((error) => {
        setErrAlert(true);

        // alert("Wrong Name or Password");
      });
    console.log(restaurantName, password);
  };

  const addAlert = "Wrong UserName or Password";
  const restaurantNameInputValid =
    !restaurantNameValid && restaurantNameTouched;
  const passwordInputValid = !passwordValid && passwordTouched;

  const restaurantNameStyle = restaurantNameInputValid
    ? " form-control col-8 border border-3 border-danger"
    : "";
  const passwordStyle = passwordInputValid
    ? " form-control col-8 border border-3 border-danger"
    : "";

  const sty = ``;
  return (
    <div style={{ paddingTop: "30px" }}>
      <div
        id="d1"
        style={{ paddingTop: "50px", border: "solid", height: "100%" }}
      >
        {errAlert && (
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>{addAlert}</strong>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                setErrAlert(false);
              }}
            ></button>
          </div>
        )}
        <p className="p7">RESTAURANT LOGIN</p>
        <input
          className={restaurantNameStyle}
          type="text"
          id="restaurantName"
          value={restaurantName}
          // onChange={(e) => setUsername(e.target.value)}
          onChange={restaurantNameHandler}
          onBlur={restaurantNameBlurHandler}
          placeholder="RESTAURANT NAME"
          required
        />
        {restaurantNameInputValid && (
          <p className="text-danger text-center font-weight-bold">
            Restaurant name must not be empty
          </p>
        )}
        <br />
        <br />
        <input
          className={passwordStyle}
          type="password"
          id="password"
          value={password}
          // onChange={(e) => setPassword(e.target.value)}
          onChange={passwordHandler}
          onBlur={passwordBlurHandler}
          placeholder="PASSWORD"
          required
        />
        {passwordInputValid && (
          <p className="text-danger text-center font-weight-bold">
            Password must not be empty
          </p>
        )}
        <br />
        <br />
        <br />
        <input
          type="submit"
          onClick={(e) => createRestaurant(e)}
          value="Login Now"
        />
        <br />
        <br />
        {/*  <p1>Remeber me </p1> */}
        {/*  <br><br><br>
   <p1><center>not a member?</center></p1>
   <button>Create account</button>  */}
      </div>
      {/* <marquee direction="right">
        <div>
          <img
            src={img5}
            style={{ width: "140px", height: "120px", paddingBottom: "10px" }}
          />
        </div>
      </marquee> */}
    </div>
  );
};

export default RestLogin;
