import httpClient from "../http-commons";

const getAllRestaurant = () => {
  return httpClient.get("/restaurants");
};

const getRestaurant = (id) => {
  return httpClient.get(`/getrestaurant/${parseInt(id)}`);
};

const createRestaurant = (data) => {
  return httpClient.post("/restaurants", data);
};

const updateRestaurant = (data) => {
  console.log(data);
  console.log(data.id);
  return httpClient.put(`/restaurants/${data.id}`, data);
};

const removeRestaurant = (id) => {
  return httpClient.delete(`/restaurants/${id}`);
};

const reslogin = (restaurantName, password) => {
  return httpClient.post(`/reslogin/${restaurantName}/${password}`);
};

const RestaurantService = {
  getAllRestaurant,
  createRestaurant,
  getRestaurant,
  updateRestaurant,
  removeRestaurant,
  reslogin,
};

export default RestaurantService;
