import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getTransactions = async () => {
  const response = await axios.get(`${API_URL}/transactions`);
  return response.data;
};

export const getTransaction = async (id) => {
  const response = await axios.get(`${API_URL}/transactions/${id}`);
  return response.data;
};

export const createTransaction = async (transactionData) => {
  const response = await axios.post(`${API_URL}/transactions`, transactionData);
  return response.data;
};

export const updateTransaction = async (id, transactionData) => {
  const response = await axios.patch(`${API_URL}/transactions/${id}`, transactionData);
  return response.data;
};

export const deleteTransaction = async (id) => {
  const response = await axios.delete(`${API_URL}/transactions/${id}`);
  return response.data;
};