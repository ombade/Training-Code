import React, { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { loginUser } from "../lib/api";

const AuthComponent: React.FC = () => {
  const { user, isAuthenticated, login, logout } = useAuthStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    try {
      const response = await loginUser(username, password);
      login(response.user, response.token);
    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {isAuthenticated ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700">Welcome, {user?.name}!</h2>
            <button
              onClick={logout}
              className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
            <div>
              <label className="block text-gray-600 font-medium">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthComponent;
