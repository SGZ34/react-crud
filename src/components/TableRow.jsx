import React from "react";

export function TableRow({ product, editProduct, deleteProduct }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <button
          type="button"
          className="btn btn-outline-warning mx-2"
          onClick={() => editProduct(product)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => deleteProduct(product)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}
