// src/pages/User.tsx
import React from "react";
import useAuthStore from "../store/useAuthStore";

const User: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuthStore();

  if (!isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">User Profile</h1>
      <p className="text-gray-700 dark:text-gray-300">Username: {user?.username}</p>
      <button onClick={logout} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-300">
        Logout
      </button>
    </div>
  );
};

export default User;
