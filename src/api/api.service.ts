import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net',
    headers: {'Content-Type': 'application/json'},
});