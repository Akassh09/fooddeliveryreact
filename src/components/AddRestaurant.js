import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RestaurantService from "../service/RestaurantService";

const AddRestaurant = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [password, setPassword] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [managerName, setManagerName] = useState("");
  const [res_pincode, setResPincode] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const navigate = useNavigate();
  const { restaurantId } = useParams();

  const createRestaurant = (e) => {
    e.preventDefault();

    const address = {
      buildingName,
      streetNo,
      area,
      city,
      state,
      country,
      pincode,
    };

    const restaurant = {
      restaurantName,
      password,
      managerName,
      res_pincode,
      contactNumber,
      address,
    };

    if (restaurantId) {
      //update
      RestaurantService.updateRestaurant(restaurant)
        .then((response) => {
          console.log("Restaurant data updated successfully", response.data);
          navigate("/res");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      RestaurantService.createRestaurant(restaurant)
        .then((response) => {
          console.log("Restaurant added successfully", response.data);
          navigate("/additems");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (restaurantId) {
      RestaurantService.getAllRestaurant(restaurantId)
        .then((restaurant) => {
          setRestaurantName(restaurant.data.restaurantName);
          setPassword(restaurant.data.password);
          setBuildingName(restaurant.data.address.buildingName);
          setStreetNo(restaurant.data.address.streetNo);
          setArea(restaurant.data.address.area);
          setCity(restaurant.data.address.city);
          setState(restaurant.data.address.state);
          setCountry(restaurant.data.address.country);
          setPincode(restaurant.data.address.pincode);
          setManagerName(restaurant.data.managerName);
          setResPincode(restaurant.data.res_pincode);
          setContactNumber(restaurant.data.contactNumber);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div>
      <div className="container">
        <h3 style={{ color: "white" }}>Add Restaurant Details</h3>
        <hr />
        <form className="was-validated">
          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="restaurantname"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              placeholder="Enter Restaurant Name"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="buildingName"
              value={buildingName}
              onChange={(e) => setBuildingName(e.target.value)}
              placeholder="Enter Building Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="streetNo"
              value={streetNo}
              onChange={(e) => setStreetNo(e.target.value)}
              placeholder="Enter Street No"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Enter Area"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter City"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter State"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter Country"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control col-4"
              id="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter Pincode"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="managername"
              value={managerName}
              onChange={(e) => setManagerName(e.target.value)}
              placeholder="Enter Manager Name"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="respincode"
              value={res_pincode}
              onChange={(e) => setResPincode(e.target.value)}
              placeholder="Enter Restaurant Pincode"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="contactnumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Enter Restaurant contact number"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>

          <div>
            <button
              onClick={(e) => createRestaurant(e)}
              className="btn btn-primary"
            >
              <Link to="/res">Submit</Link>
            </button>
          </div>
        </form>
        <hr />
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default AddRestaurant;
