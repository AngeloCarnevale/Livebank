import axios from "axios";

const baseUrl = process.env.baseUrl

export const api = axios.create({
    baseURL: baseUrl,
})