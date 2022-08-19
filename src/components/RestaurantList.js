import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import RestaurantService from "../service/RestaurantService";
import Navbar from "./Navbar";
import restro1 from "../img/restro1.jpg";

const RestaurantList = () => {
  const [res, setRes] = useState([]);

  const init = () => {
    RestaurantService.getAllRestaurant()
      .then((response) => {
        console.log("Printing course data", response.data);
        setRes(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="container">
      <br />
      <h3>Nearby Restaurants</h3>
      <hr />
      {res.map((res) => (
        <div
          className="card mb-3"
          style={{ width: "700px" }}
          key={res.restaurantId}
        >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={restro1} alt="restro" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{res.restaurantName}</h5>
                <p className="card-text">
                  Location: {res.address.area}, {res.address.city}
                </p>
                <p className="card-text">Ph: {res.contactNumber}</p>
                <Link
                  className="btn btn-info"
                  to={`/res/menu/${res.restaurantId}`}
                >
                  View menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
