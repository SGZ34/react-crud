import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/AppContext";
import { Layout } from "../layouts/Layout";

export function Form() {
  const [product, setProduct] = useState({ id: "", name: "", price: "" });
  const { addProduct, editProduct, getProduct } = useProducts();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id && getProduct(id)) {
      const producto = getProduct(id);
      setProduct({
        id: producto.id,
        name: producto.name,
        price: producto.price,
      });
    }
  }, [id, getProduct]);

  const handleOnChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      addProduct(product);
      setProduct({ id: "", name: "", price: "" });
      navigate("/");
    } else {
      editProduct(id, product);
      setProduct({ id: "", name: "", price: "" });
      navigate("/");
    }
  };
  return (
    <Layout>
      <div className="d-flex justify-content-center mt-2 ">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title text-center">
                {!id ? "Agregar producto" : "Editar producto"}
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
                <div className="form-floating mt-3">
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
                <button className="btn btn-primary w-100 mt-4">
                  Guardar información
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
