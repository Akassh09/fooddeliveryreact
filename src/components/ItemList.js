import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ItemService from "../service/ItemService";

const ItemList = () => {
  const [item, setItem] = useState([]);

  const init = () => {
    ItemService.viewAllItems()
      .then((response) => {
        console.log("Printing course data", response.data);
        setItem(response.data);
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
      <h3 style={{ color: "white" }}>List of Items</h3>
      <hr />

      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="..." alt="..." />
          </div>
          <div class="col-md-8">
            {item.map((item) => (
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
