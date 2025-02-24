import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({state.cart.length})</Link>
      {state.user ? (
        <>
          <Link to="/admin">Admin</Link>
          <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
