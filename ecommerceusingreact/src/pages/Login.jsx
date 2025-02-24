import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (id === "admin" && pass === "pass") {
      dispatch({ type: "LOGIN", payload: { name: "Admin" } });
      navigate("/admin");
    } else {
      alert("Wrong ID or password");
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Login</h2>
      <input 
        type="text" 
        placeholder="Enter The User ID" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Enter the password" 
        value={pass} 
        onChange={(e) => setPass(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
