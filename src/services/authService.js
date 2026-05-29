import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/auth`;

export const signup = async (data) => {
    const res = await axios.post(`${API}/signup`, data)
    return res.data
};

export const login = async (data) => {
    const res = await axios.post(`${API}/login`, data)
    return res.data
};