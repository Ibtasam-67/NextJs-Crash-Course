import ProductDetailScreen from "../../components/productsDetail/ProductDetailScreen";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const ProductsDetail = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Products Detail</title>
      </Head>
      <ProductDetailScreen data={data} />
    </div>
  );
};

export default ProductsDetail;
