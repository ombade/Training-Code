// src/pages/AdminLogin.tsx
import React, { useState } from "react";
import { useMutation } from "react-query";
import { loginUser } from "../lib/api";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const AdminLogin: React.FC = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      login({ username }, data.token);
      navigate("/admin");
    },
    onError: () => {
      alert("Invalid credentials");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }
    mutation.mutate({ username, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-medium">Username</label>
            <input
              type="text"
              placeholder="Admin username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 dark:text-gray-300 font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
