import React from "react";
import ReactDOM, { render } from "react-dom";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CartService from "../service/CartService";

const AddCart = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const navigate = useNavigate();

  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cost, setCost] = useState("");

  const [cartId, setCartId] = useState("");

  const { id } = useParams();

  const createCart = (e) => {
    e.preventDefault();

    const customer = {
      firstName,
      lastName,
      age,
      gender,
      mobileNumber,
      email,
      address,
    };

    const address = {
      buildingName,
      streetNo,
      area,
      city,
      state,
      country,
      pincode,
    };

    const item = {
      itemName,
      quantity,
      cost,
    };

    const cart = {
      cartId,
      item,
      customer,
    };

    if (id) {
      //update
      CartService.update(cart)
        .then((response) => {
          console.log("Cart data updated successfully", response.data);
          navigate("/cartlist");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      CartService.createCart(cart)
        .then((response) => {
          console.log("Cart added successfully", response.data);
          navigate("/cartlist");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (cartId) {
      CartService.get(id)
        .then((cart) => {
          setFirstName(cart.data.customer.firstName);
          setLastName(cart.data.customer.lastName);
          setAge(cart.data.customer.age);
          setGender(cart.data.customer.gender);
          setMobileNumber(cart.data.customer.mobileNumber);
          setEmail(cart.data.customer.email);
          setBuildingName(cart.data.customer.address.buildingName);
          setStreetNo(cart.data.customer.address.streetNo);
          setArea(cart.data.customer.address.area);
          setCity(cart.data.customer.address.city);
          setState(cart.data.customer.address.state);
          setCountry(cart.data.customer.address.country);
          setPincode(cart.data.customer.address.pincode);

          setItemName(cart.data.item.itemName);
          setQuantity(cart.data.item.quantity);
          setCost(cart.data.item.cost);

          setCartId(cart.data.cartId);
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    }
  }, []);
  return (
    <div id="cart-form">
      <h1 className="t">ENTER SHIPPING DETAILS </h1>
      <div className="ns">
        <form className="was-validated">
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              className="form-control col-4"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className="form-group">
            <input
              type="number"
              id="mobileNumber"
              className="form-control col-4"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter Mobile Number"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control col-4"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
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
              id="itemName"
              className="form-control col-4"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Enter Item Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="quantity"
              className="form-control col-4"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter Quantity"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              id="cost"
              className="form-control col-4"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="Enter cost"
              required
            />
          </div>

          <div>
            <button onClick={(e) => createCart(e)} className="btn btn-primary">
              <Link to="/placeorder">Place Order</Link>
            </button>
          </div>
        </form>
        <hr />
        <Link to="/">Back to List</Link>
      </div>
    </div>
  );
};

export default AddCart;
