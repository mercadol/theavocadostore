import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [productList, setproductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({data, length}) => {
        setproductList(data)
      })
  }, []);

  return (
    <div>
      <div>Next js!</div>
      {productList.map((product) =>(
        <div>{product.image}</div>
      ))}
    </div>
  );
};

export default HomePage;
