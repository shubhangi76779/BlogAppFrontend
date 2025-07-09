import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.PROD
       ? "https://blogappbackend-1-225y.onrender.com"
        : "http://localhost:3000",
    withCredentials: true,
});
