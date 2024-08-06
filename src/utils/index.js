import axios from "axios";

const prodUrl = "http://localhost:5000/api/v1";

export const customFetch = axios.create({
  baseURL: prodUrl,
});
