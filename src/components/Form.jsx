import { useEffect, useState } from "react";

const initialValues = { id: "", name: "", price: "" };
export function Form({ addProduct, productToEdit, editProduct }) {
  const [product, setProduct] = useState(initialValues);

  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    } else {
      setProduct(initialValues);
    }
  }, [productToEdit]);

  const handleOnChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productToEdit) {
      addProduct(product);
      setProduct(initialValues);
    } else {
      editProduct(productToEdit, product);
      setProduct(initialValues);
    }
  };
  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title text-center">
            {!productToEdit ? "Agregar producto" : "Editar producto"}
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
  );
}
