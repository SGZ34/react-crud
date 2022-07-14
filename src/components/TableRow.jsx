import React from "react";
import { useNavigate } from "react-router-dom";

export function TableRow({ product, deleteProduct }) {
  const navigate = useNavigate();
  const handleDelete = (product) => {
    if (confirm(`Desea borrar el producto ${product.name}?`)) {
      deleteProduct(product);
    }
  };
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <button
          className="btn btn-outline-warning mx-2"
          onClick={() => navigate("/product/" + product.id)}
        >
          Editar
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => handleDelete(product)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}
