import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.PROD
        ? import.meta.env.VITE_BACKEND_SERVER_PROD
        : "http://localhost:3000",
    withCredentials: true,
});
