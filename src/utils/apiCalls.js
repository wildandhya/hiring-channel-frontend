import Axios from "axios";

export const fetchAllData = (url) => {
  return Axios.get(process.env.REACT_APP_API_URL + url);
};

export const getUserDataById = (url, config) => {
  return Axios.get(process.env.REACT_APP_API_URL + url, config);
};

export const getUserDetail = (url, config) => {
  return Axios.get(process.env.REACT_APP_API_URL + url, config);
};

export const getHistoryById = (url, config) => {
  return Axios.get(process.env.REACT_APP_API_URL + url, config);
};

export const login = (data) => {
  const API = `${process.env.REACT_APP_API_URL}/auth/login`;
  return Axios.post(API, data);
};
export const register = (data) => {
  const API = `${process.env.REACT_APP_API_URL}/auth/register`;
  return Axios.post(API, data);
};

export const updateUserData = (url, data, config) => {
  return Axios.patch(process.env.REACT_APP_API_URL + url, data, config);
};

export const deleteUserData = (url, config) => {
  return Axios.delete(process.env.REACT_APP_API_URL + url, config);
};

export const addHistory = (data) => {
  const API_URL = `${process.env.REACT_APP_API_URL}/history`;
  return Axios.post(API_URL, data);
};
