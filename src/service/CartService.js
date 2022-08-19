import httpClient from "../http-commons";

const getAllcart = () => {
  return httpClient.get("/getallcustomers");
};

const getcart = (id) => {
  return httpClient.get(`/getcustomerbyid/${id}`);
};

const createCart = (data) => {
  return httpClient.post("/foodcart", data);
};

const additem = (data) => {
  console.log(data);
  console.log(data.id);
  return httpClient.put(`/foodcart/additem/${parseInt(data.id)}`, data);
};

const removecart = (id) => {
  return httpClient.delete(`/foodcart/${id}`);
};

const CartService = {
  getAllcart,
  createCart,
  getcart,
  additem,
  removecart,
};

export default CartService;
