import axios from "axios";

export const apiInstance = axios.create({
    baseURL: 'http://localhost:5289/api',
    headers: {
        'Content-Type': 'application/json',
    },
});
