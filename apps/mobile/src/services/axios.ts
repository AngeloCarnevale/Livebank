import axios from "axios";

export const BASE_URL = "https://d27b-189-57-188-42.ngrok-free.app"

export const api = axios.create({
    baseURL: BASE_URL
})