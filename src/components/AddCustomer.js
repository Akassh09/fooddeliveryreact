import React from "react";
import ReactDOM, { render } from "react-dom";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomerService from "../service/CustomerService";

const AddCustomer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const navigate = useNavigate();
  const { customerId } = useParams();

  const createcustomer = (e) => {
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

    const customer = {
      customerId,
      firstName,
      lastName,
      age,
      gender,
      mobileNumber,
      email,
      username,
      password,
      address,
    };

    // create
    CustomerService.createcustomer(customer)
      .then((response) => {
        console.log("Customer added successfully", response.data);
        navigate("/res");
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    if (customerId) {
      CustomerService.get(customerId)
        .then((customer) => {
          setFirstName(customer.data.firstName);
          setLastName(customer.data.lastName);
          setAge(customer.data.age);
          setGender(customer.data.gender);
          setMobileNumber(customer.data.mobileNumber);
          setEmail(customer.data.email);
          setUsername(customer.data.username);
          setPassword(customer.data.password);
          setBuildingName(customer.data.address.buildingName);
          setStreetNo(customer.data.address.streetNo);
          setArea(customer.data.address.area);
          setCity(customer.data.address.city);
          setState(customer.data.address.state);
          setCountry(customer.data.address.country);
          setPincode(customer.data.address.pincode);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div id="customer-form">
      <h1 className="t">ENTER CUSTOMER DETAILS (REGISTRAION FORM)</h1>
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
              type="text"
              id="lastName"
              className="form-control col-4"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className="form-group">
            <input
              type="number"
              id="age"
              className="form-control col-4"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter Age"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className="form-group">
            <select
              name="gender"
              className="form-control col-4"
              placeholder="Enter Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option selected>Enter Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
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
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
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

          <div>
            <button
              onClick={(e) => createcustomer(e)}
              className="btn btn-primary"
            >
              <Link to="/res">Submit</Link>
            </button>
          </div>
        </form>
        <hr />
        <Link to="/">Home Page</Link>
      </div>
    </div>
  );
};

export default AddCustomer;
