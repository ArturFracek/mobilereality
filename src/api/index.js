import axios from "axios";

const baseURL = "https://api.thecatapi.com/v1/";

const api = axios.create({
  baseURL,
});

api.defaults.headers.common["x-api-key"] =
  "257e0596-e7d2-4c2d-9c41-b430774d54f2";

export default api;
