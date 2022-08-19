import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import ResPage from "./components/ResPage";
import AddCustomer from "./components/AddCustomer";
import AddRestaurant from "./components/AddRestaurant";
import EditMenu from "./components/EditMenu";
import AddItem from "./components/AddItem";
import RestLogin from "./components/RestLogin";
import CustLogin from "./components/CustLogin";
import AddCart from "./components/AddCart";
import PlaceOrder from "./components/PlaceOrder";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/reslogin" element={<RestLogin />} />
          <Route path="/res/editmenu/:id/additems" element={<AddItem />} />
          <Route path="/" element={<Home />} />
          <Route path="/res" element={<RestaurantList />} />
          <Route path="/res/menu/:id" element={<ResPage />} />
          <Route path="/res/editmenu/:id/" element={<EditMenu />} />
          <Route path="/food/edit/:id" element={<AddItem />} />
          <Route path="res/:cid/addfood" element={<AddItem />} />
          <Route path="/add" element={<AddCustomer />} />
          <Route path="/addrestaurant" element={<AddRestaurant />} />
          <Route path="/login" element={<CustLogin />} />
          <Route path="/addcart" element={<AddCart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
