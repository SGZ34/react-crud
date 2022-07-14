import React from "react";

export function Banner({ user, products }) {
  return (
    <div className="container mt-2">
      <div className="mb-4">
        <h4 className="text-end">
          {user}'s products control with react
          {products == 0
            ? " you don't have products"
            : ` you have ${products} products`}
        </h4>
      </div>
    </div>
  );
}
