import { useEffect, useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { TableRow } from "./components/TableRow";

const initialValues = { id: "", name: "", price: "" };

function App() {
  const [user, setUser] = useState("SGZ");
  const [product, setProduct] = useState(initialValues);
  const [products, setProducts] = useState([]);
  const [productIsEdit, setProductIsEdit] = useState(null);

  const handleOnChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productIsEdit) {
      const productValidate = products.find((p) => p.id == product.id);
      if (productValidate) {
        alert("ya existe un producto con ese nombre");
      } else {
        setProducts([...products, product]);
        setProduct(initialValues);
      }
    } else {
      const productsValidate = products.filter((p) => p.id != productIsEdit.id);

      if (productsValidate.find((p) => p.id == product.id)) {
        alert("ya existe un producto con ese nombre");
      } else {
        setProducts(
          products.map((p) => (p.id == productIsEdit.id ? product : p))
        );

        setProduct(initialValues);
        setProductIsEdit(null);
      }
    }
  };

  const editProduct = (product) => {
    setProduct(product);
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
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title text-center">
                  {!productIsEdit ? "Agregar producto" : "Editar producto"}
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="id"
                      placeholder="Digite el id del producto"
                      name="id"
                      value={product.id}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="id">Id del producto</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Nombre del producto"
                      name="name"
                      value={product.name}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="nombre">Nombre del producto</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      placeholder="Digite el precio del producto"
                      name="price"
                      value={product.price}
                      onChange={handleOnChange}
                    />
                    <label htmlFor="price">precio del producto</label>
                  </div>
                  <button className="btn btn-primary w-100 mt-2">
                    Guardar información
                  </button>
                </form>
              </div>
            </div>
          </div>
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
