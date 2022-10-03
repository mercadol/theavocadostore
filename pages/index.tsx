import Layout from "components/Layout/Layout";
import KawaiiHeader from 'components/KawaiiHeader/KawaiiHeader'
import React, { useEffect, useState } from "react";
import ProductList from "components/ProductList/ProductList";

const HomePage = () => {
  const [productList, setproductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({data}: TAPIAvoResponse) => {
        setproductList(data)
      })
  }, []);

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage;
