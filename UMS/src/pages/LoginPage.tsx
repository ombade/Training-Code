import { useForm } from "react-hook-form";
import { useAuthStore } from "../store/authStore";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await API.post("/login", data);
      if (response.data.token) {
        login();
        toast.success("Login successful!");
        navigate("/dashboard");
      }
    } catch {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input {...register("email")} placeholder="Email" className="border p-2 w-full mb-3" required />
        <input {...register("password")} type="password" placeholder="Password" className="border p-2 w-full mb-3" required />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
