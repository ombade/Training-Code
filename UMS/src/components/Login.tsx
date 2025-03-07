// src/components/Login.tsx
import { useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthStore } from '../store/authStore';

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await axios.post('https://reqres.in/api/login', data);
      setAuthenticated(true);
      navigate('/dashboard');
    } catch (error) {
      const axiosError = error as AxiosError<{ error: string }>;
      toast.error(axiosError.response?.data.error || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-sm mx-auto mt-10">
      <input 
        {...register('email', { required: 'Email is required' })} 
        placeholder="Email" 
        className="p-2 border border-gray-300 rounded mb-2"
      />
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}

      <input 
        {...register('password', { required: 'Password is required' })} 
        type="password" 
        placeholder="Password" 
        className="p-2 border border-gray-300 rounded mb-2"
      />
      {errors.password && <span className="text-red-500">{errors.password.message}</span>}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </form>
  );
};

export default Login;