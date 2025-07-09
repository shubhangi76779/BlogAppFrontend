import axios from "axios";

export const api = axios.create({
    baseURL: "https://blogappbackend-1-225y.onrender.com",
    withCredentials: true,
});
