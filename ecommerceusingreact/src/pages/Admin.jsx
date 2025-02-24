import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Admin = () => {
  const { dispatch } = useContext(GlobalContext);
  const [product, setProduct] = useState({ title: "", image: "" });

  const addProduct = () => {
    dispatch({ type: "ADD_PRODUCT", payload: { ...product, id: Date.now() } });
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <input type="text" placeholder="Title" onChange={(e) => setProduct({ ...product, title: e.target.value })} />
      <input type="text" placeholder="Image URL" onChange={(e) => setProduct({ ...product, image: e.target.value })} />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default Admin;
