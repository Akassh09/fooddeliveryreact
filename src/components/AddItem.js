import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ItemService from "../service/ItemService";

const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rid, setRid] = useState("");

  const { id, cid } = useParams();
  const navigate = useNavigate();

  const saveItem = (e) => {
    e.preventDefault();

    const item = {
      id,
      itemName,
      cost,
      quantity,
      rid,
    };

    if (id) {
      //update
      ItemService.updateItem(item)
        .then((response) => {
          console.log("Item data updated successfully", response.data);
          navigate("/res");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else if (cid) {
      // create
      ItemService.createItem(item)
        .then((response) => {
          //setRid;
          console.log("Item added successfully", response.data);
          navigate("/res");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      ItemService.getItem(id)
        .then((item) => {
          setItemName(item.data.itemName);
          setCost(item.data.cost);
          setQuantity(item.data.quantity);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div>
      <div className="container">
        <h3 style={{ color: "white" }}>Add Item</h3>
        <hr />
        <form className="was-validated">
          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="Itemname"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Enter Item Name"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className="Cost">
            <input
              type="number"
              className="Cost col-4"
              id="ItemCost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="Enter Item Cost"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className="Quantity">
            <input
              type="number"
              className="Quantity col-4"
              id="ItemQuantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter Item Quantity"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>

          <div>
            <button onClick={(e) => saveItem(e)} className="btn btn-primary">
              <Link to="/res/editmenu/:id/">Save</Link>
            </button>
          </div>
        </form>
        <hr />
        <Link to="/res/editmenu/:id/">Back to Item List</Link>
      </div>
    </div>
  );
};

export default AddItem;
