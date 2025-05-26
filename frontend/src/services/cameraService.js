import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getCameras = async () => {
  const response = await axios.get(`${API_URL}/cameras`);
  return response.data;
};

export const getCamera = async (id) => {
  const response = await axios.get(`${API_URL}/cameras/${id}`);
  return response.data;
};

export const createCamera = async (cameraData) => {
  const response = await axios.post(`${API_URL}/cameras`, cameraData);
  return response.data;
};

export const updateCamera = async (id, cameraData) => {
  const response = await axios.patch(`${API_URL}/cameras/${id}`, cameraData);
  return response.data;
};

export const deleteCamera = async (id) => {
  const response = await axios.delete(`${API_URL}/cameras/${id}`);
  return response.data;
};