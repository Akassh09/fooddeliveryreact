import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import RestaurantService from "../service/RestaurantService";
import Restaurant from "../model/Restaurant";
import Carousel from "./Carousel";
import "../css/home.css";
import CartService from "../service/CartService";
import order from "../img/order.jpg";

const ResPage = () => {
  const [res, setRes] = useState("");
  const [food, setFood] = useState([]);
  const [cart, setCart] = useState("");
  const { id } = useParams();

  const init = () => {
    RestaurantService.getRestaurant(id)
      .then((resdata) => {
        console.log("Restrunt data", resdata.data);
        console.log("food data", resdata.data.itemList);
        setRes(resdata.data);
        setFood(resdata.data.itemList);
      })

      .catch((error) => {
        console.log("Something went wrong", error);
      });

    // CartService.createCart(id)
    //   .then((fddata) => {
    //     console.log("Restrunt data", fddata.data);
    //     setFood(fddata.data);
    //   })

    //   .catch((error) => {
    //     console.log("Something went wrong", error);
    //   });
  };
  useEffect(() => {
    init();
  }, []);

  const addToCart = (fooditem) => {
    console.log("Printing foodtocart", fooditem);
    CartService.createCart(fooditem)
      .then((response) => {})
      .catch((error) => {
        console.log("foodtocart went wrong", error);
      });
  };

  return (
    <div>
      {/* <Carousel img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbSK4S_MCn3xYbyxXTRp9Nmu_tj0jqU0-AQ&usqp=CAU" /> */}
      <h4>{res.restaurantName}</h4>
      <hr />
      <h4>Food items avalable</h4>

      <div id="card-cont" className="container">
        {food.map((fd) => (
          <div id="" class="row px-5 pt-5" key={fd.itemId}>
            <div class="col-md-4 mt-4 mt-sm-0 card-container">
              <div class="card text-center product p-4 pt-5 border-0 h-280 rounded-0">
                <img class="img-fluid d-block mx-auto" src={order} alt="Food" />
                <div class="card-body p-4 py-0 h-xs-480p">
                  <h5>{fd.itemName}</h5>
                  <p class="price">Rs.{fd.cost}</p>
                  <button
                    onClick={() => {
                      addToCart({ fd });
                    }}
                    className="btn btn-primary"
                  >
                    <Link to="/addcart">Add to Cart</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div class="card">
        <div class="row">
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div class="col align-self-center text-right text-muted">
                  3 items
                </div>
              </div>
            </div>
            <div class="row border-top border-bottom">
              <div class="row main align-items-center">
                <div class="col-2">
                  <img
                    class="img-fluid"
                    src="https://i.imgur.com/1GrakTl.jpg"
                  />
                </div>
                <div class="col">
                  <div class="row text-muted">Shirt</div>
                  <div class="row">Cotton T-shirt</div>
                </div>
                <div class="col">
                  <a href="#">-</a>
                  <a href="#" class="border">
                    1
                  </a>
                  <a href="#">+</a>
                </div>
                <div class="col">
                  &euro; 44.00 <span class="close">&#10005;</span>
                </div>
              </div>
            </div>
            {/* <div class="row"></div>
            <div class="row border-top border-bottom"></div> }
            <div class="back-to-shop">
              <a href="#">&leftarrow;</a>
              <span class="text-muted">Back to shop</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ResPage;
