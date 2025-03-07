import React from "react";
import useAuthStore from "../store/useAuthStore";

const Dashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <p>Access Denied. Please Login.</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name}!</p>
    </div>
  );
};

export default Dashboard;
