import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const Header = () => {
  const { isAuthenticated, logout, login } = useAuthStore();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
      toast.success("Logged out successfully!");
    } else {
      login();
      toast.success("Logged in successfully!");
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">User Management</h1>
      <nav>
        <Link to="/" className="mr-4 hover:underline">
          Home
        </Link>
        <Link to="/users" className="mr-4 hover:underline">
          Users
        </Link>
        <button
          onClick={handleAuthAction}
          className={`px-4 py-2 rounded ${isAuthenticated ? "bg-red-500 hover:bg-red-700" : "bg-green-500 hover:bg-green-700"}`}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
