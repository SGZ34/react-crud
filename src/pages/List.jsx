import { useState } from "react";
import { Layout } from "../layouts/Layout";
import { Banner } from "../components/Banner";
import { TableRow } from "../components/TableRow";
import { useProducts } from "../context/AppContext";

export function List() {
  const [user, setUser] = useState("SGZ");

  const { products, deleteProduct } = useProducts();

  const printRows = () => {
    return products.map((product) => {
      return (
        <TableRow
          product={product}
          key={product.id}
          deleteProduct={deleteProduct}
        />
      );
    });
  };

  return (
    <Layout>
      <Banner user={user} products={products.length} />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 ">
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
    </Layout>
  );
}
