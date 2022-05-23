import ProductScreen from "../../components/products/ProductScreen";
import Head from "next/head";

export const getServerSideProps = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  if (res.status === 200) {
    return {
      props: {
        data,
      },
    };
  }
};

const Products = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Products</title>
      </Head>
      <ProductScreen data={data} />
    </div>
  );
};

export default Products;
