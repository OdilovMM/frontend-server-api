import axios from "axios";
import Cookies from "js-cookie";

// Set the base URL for your API
const prodUrl = "http://localhost:5000/api/v1";

// Allow Axios to send cookies with requests
axios.defaults.withCredentials = true;

// Create a custom Axios instance
export const customFetch = axios.create({
  baseURL: prodUrl,
  withCredentials: true,
});

// Set up Axios interceptors to attach tokens from cookies
customFetch.interceptors.request.use(
  (config) => {
    // Get the tokens from cookies
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    // If the access token exists, attach it to the Authorization header
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Utility function to format price as USD currency
export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};