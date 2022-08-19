import httpClient from "../http-commons";

const getAllItem = () => {
  return httpClient.get("/items");
};

const getItem = (id) => {
  return httpClient.get(`/getitems/${parseInt(id)}`);
};

const createItem = (data) => {
  return httpClient.post("/items", data);
};

const updateItem = (data) => {
  console.log(data);
  console.log(data.id);
  return httpClient.put(`/items/${parseInt(data.id)}`, data);
};

const removeItem = (id) => {
  return httpClient.delete(`/items/${id}`);
};

const ItemService = {
  getAllItem,
  createItem,
  getItem,
  updateItem,
  removeItem,
};

export default ItemService;
