import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const ProductDetails = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(GlobalContext);
  const product = state.products.find((p) => p.id === parseInt(id));

  return (
    <div className="product-details">
      <h2>{product?.title}</h2>
      <img src={product?.image} alt={product?.title} />
      <p>{product?.description}</p>
      <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
