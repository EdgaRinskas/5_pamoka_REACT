import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import Users from "./components/Users";
import ToDos from "./components/ToDos";
import "./App.css";

const URL = "https://sophisticated-humane-dandelion.glitch.me";

const App = () => {
  const [products, setProducts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingTodos, setIsLoadingTodos] = useState(true);

  useEffect(() => {
    // Fetch products
    fetch(URL)
      .then((resp) => resp.json())
      .then((response) => {
        setProducts(response);
        setIsLoadingProducts(false);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch todos
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((resp) => resp.json())
      .then((response) => {
        setTodos(response);
        setIsLoadingTodos(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div>
      {/* Products */}
      {isLoadingProducts && <div>Palaukite...</div>}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      {/* Todos */}
      {isLoadingTodos && <div>Fetching todos...</div>}
      <ToDos todos={todos} />

      <br />
      <Users />
    </div>
  );
};

export default App;
