import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const router = useRouter();
  return (
    <div>
      <h1>ProducItem</h1>
      <h2>{router.query.id}</h2>
    </div>
  );
};

export default ProductItem;
