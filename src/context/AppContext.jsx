import { createContext, useContext, useEffect, useState } from "react";

const productsContext = createContext();

export const useProducts = () => {
  const context = useContext(productsContext);
  if (!context) throw new Error("El provedor de productos se ha desconectado");
  return context;
};

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("products");
    if (data) {
      setProducts(JSON.parse(data));
      console.log(products);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  const deleteProduct = ({ id }) => {
    setProducts(products.filter((p) => p.id != id));
  };

  const getProduct = (id) => {
    const product = products.find((p) => p.id == id);

    return product;
  };

  const editProduct = (id, product) => {
    const productsValidate = products.filter((p) => p.id != id);
    const productValidate = productsValidate.find((p) => p.id == product.id);
    if (productValidate) {
      alert("Ya existe un producto con ese codigo");
    } else {
      setProducts(products.map((p) => (p.id == id ? product : p)));
    }
  };
  return (
    <productsContext.Provider
      value={{ products, addProduct, deleteProduct, getProduct, editProduct }}
    >
      {children}
    </productsContext.Provider>
  );
}
