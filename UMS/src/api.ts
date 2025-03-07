import axios from "axios";

const API_URL = "https://reqres.in/api/users";

// Fetch Users with Pagination
export const fetchUsers = async (page: number) => {
  const response = await axios.get(`${API_URL}?page=${page}`);
  return response.data;
};

// Fetch Single User
export const fetchUserById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Create User
export const createUser = async (user: { name: string; job: string }) => {
  const response = await axios.post(API_URL, user);
  console.log(response.data);
  return response.data;
};

// Update User
export const updateUser = async (id: number, user: { name: string; job: string }) => {
  const response = await axios.put(`${API_URL}/${id}`, user);
  return response.data;
};

// Delete User
export const deleteUser = async (id: number) => {
  console.log("User with id ", id, "is deleted");
  await axios.delete(`${API_URL}/${id}`);
};
export const registerUser = async (data: { email: string; password: string }) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};