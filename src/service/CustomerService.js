import httpClient from "../http-commons";

const getAllcustomer = () => {
  return httpClient.get("/getallcustomers");
};

const getcustomer = (id) => {
  return httpClient.get(`/getcustomerbyid/${id}`);
};

const createcustomer = (data) => {
  return httpClient.post("/addcustomer", data);
};

const updatecustomer = (data) => {
  console.log(data);
  console.log(data.id);
  return httpClient.put(`/updatecustomer/${parseInt(data.id)}`, data);
};

const removecustomer = (id) => {
  return httpClient.delete(`/deletecustomerbyid/${id}`);
};

const login = (username, password) => {
  return httpClient.post(`/login/${username}/${password}`);
};

const CustomerService = {
  getAllcustomer,
  createcustomer,
  getcustomer,
  updatecustomer,
  removecustomer,
  login,
};

export default CustomerService;
