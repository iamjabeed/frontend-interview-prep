import { useEffect, useState } from "react";
import Card from "./components/Card";
const App = () => {
  const [product, setProduct] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    fetchProduct("https://dummyjson.com/products");
  }, []);

  const fetchProduct = async (url) => {
    const apiCall = await fetch(url);
    const data = await apiCall.json();
    setProduct(data?.products);
    setFiltered(data);
  };
  const searchHandler = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredProducts = filtered?.products.filter((p) =>
      p?.title?.toLowerCase().includes(searchValue)
    );
    setProduct(filteredProducts);
  };
  return (
    <>
      <h1>All products</h1>
      <input
        type="text"
        placeholder="Search for products"
        onChange={searchHandler}
      />
      <div className="card_container">
        {product.map((product, i) => (
          <div key={i} className="card">
            <img
              className="p_img"
              src={product?.thumbnail}
              alt={product?.brand}
            />
            <div className="igroup">
              <h4 className="pBrand">{product?.brand}</h4>
              <h4>{product?.price}</h4>
            </div>
            <h4 className="title">{product?.title}</h4>
          </div>
        ))}
      </div>
    </>
  );
};
export default App;
