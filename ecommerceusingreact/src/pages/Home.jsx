import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Home = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className="products-container">
      {state.products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
