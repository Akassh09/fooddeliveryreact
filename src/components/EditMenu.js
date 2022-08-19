import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import RestaurantService from "../service/RestaurantService";
import ItemService from "../service/ItemService";
import Restaurant from "../model/Restaurant";
import Carousel from "./Carousel";
import "../css/home.css";

const EditMenu = () => {
  const [res, setRes] = useState("");
  const [food, setFood] = useState([]);
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
  };
  useEffect(() => {
    init();
  }, []);
  const handleDelete = (itemId) => {
    console.log("Printing id", itemId);
    ItemService.removeItem(itemId)
      .then((response) => {
        console.log("course deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div>
      <div className="container">
        <h3 style={{ color: "black" }}>Food Menu</h3>
        <hr />
        <div>
          <Link
            to="/res/editmenu/:id/additems"
            className="btn btn-primary mb-2"
          >
            Add Food
          </Link>

          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th> Food Name</th>
                <th> price</th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody id="table-text">
              {food.map((food) => (
                <tr key={food.itemId}>
                  <td>{food.itemName}</td>
                  <td>{food.cost}</td>
                  <td>
                    <Link
                      className="btn btn-info"
                      to={`/food/edit/${food.itemId}`}
                    >
                      Update
                    </Link>

                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => {
                        handleDelete(food.itemId);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EditMenu;
