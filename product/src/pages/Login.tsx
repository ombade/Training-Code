import React, { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { loginUser } from "../lib/api";

const Login: React.FC = () => {
  const { login } = useAuthStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await loginUser(username, password);
    login(response.user, response.token);
  };

  return (
    <div>
      <h2>Login user</h2>
      <h1>Please login frist</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
