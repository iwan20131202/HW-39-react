import axios from "axios";

export const API_BASE_URL = "https://connections-api.goit.global";

const API = axios.create({
  baseURL: API_BASE_URL,
});

export const setAuthHeader = (token) => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete API.defaults.headers.common.Authorization;
};

export default API;
