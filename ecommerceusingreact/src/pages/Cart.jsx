import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Cart = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {state.cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.title}</h3>
          <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
