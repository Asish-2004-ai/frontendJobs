import axios from "axios";

const API = axios.create({
  baseURL: "https://backendjobs-3.onrender.com/api", // 🔁 Replace with your backend URL
});

export default API;
