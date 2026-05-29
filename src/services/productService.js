import axios from "axios";
const API = `${import.meta.env.VITE_API_URL}/products`;

export const getProducts = async (shopId) => {
    const res = await axios.get(`${API}?shop_id=${shopId}`)
    return res.data
}

export const addProduct = async (data) => {
    const res = await axios.post(API, data)
    return res.data
}

export const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`)
}

export const updateProduct = async (id, data) => {
    const res = await axios.put(`${API}/${id}`,
        data
    )
    return res.data
}