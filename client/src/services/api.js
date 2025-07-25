import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getProducts = async () => {
    return await axios.get(`${API_URL}/products`);
};

export const getProductById = async (id) => {
    return await axios.get(`${API_URL}/products/${id}`);
};

export const createOrder = async (order) => {
    return await axios.post(`${API_URL}/orders/new`, order);
};
