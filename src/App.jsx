import { useEffect, useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { TableRow } from "./components/TableRow";

function App() {
  const [user, setUser] = useState("SGZ");

  const [products, setProducts] = useState([]);
  const [productIsEdit, setProductIsEdit] = useState(null);

  const addProduct = (producto) => {
    const productValidate = products.find((p) => p.id == producto.id);
    if (productValidate) {
      alert("ya existe un producto con ese nombre wuachin");
    } else {
      setProducts([...products, producto]);
    }
  };

  const editProducto = (productoActual, producto) => {
    const productosValidar = products.filter((p) => p.id != productoActual.id);
    if (productosValidar.find((p) => p.id == producto.id)) {
      alert("ya existe un producto con ese nombre");
    } else {
      setProducts(
        products.map((p) => (p.id == productoActual.id ? producto : p))
      );
      setProductIsEdit(null);
    }
  };

  const editProduct = (product) => {
    setProductIsEdit(product);
  };

  const deleteProduct = ({ name, id }) => {
    if (confirm(`Deseas eliminar el producto ${name}?`)) {
      setProducts(products.filter((p) => p.id != id));
    }
  };

  const printRows = () => {
    return products.map((product) => {
      return (
        <TableRow
          product={product}
          key={product.id}
          editProduct={editProduct}
          deleteProduct={deleteProduct}
        />
      );
    });
  };

  return (
    <>
      <Banner user={user} products={products.length} />
      <div className="container">
        <div className="row">
          <Form
            addProduct={addProduct}
            productToEdit={productIsEdit}
            editProduct={editProducto}
          />
          <div className="col-lg-8">
            <table className="table table-bordered table-striped table-striped-columns">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>{printRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
