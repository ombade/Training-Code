import React from "react";
import { useAuth } from "../context/AuthContext";
import CustomNavbar from "../components/Navbar";
import Products from "./loadProducts";
export const AdminDashBoard = () => {
  const { logOut } = useAuth();
  return (
    <div>
      <CustomNavbar />
      <Products />
    </div>
  );
};
