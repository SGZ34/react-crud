import React from "react";

export function Banner({ user, products }) {
  return (
    <div className="bg-primary">
      <h1 className="text-white text-center">
        {user}'s products control with react
      </h1>
      <h4 className="text-white text-center">
        {products == 0
          ? "you don't have products"
          : `you have ${products} products`}
      </h4>
    </div>
  );
}
