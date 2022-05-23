import ProductDetailScreen from "../../components/products/ProductDetailScreen";

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
      <ProductDetailScreen data={data} />
    </div>
  );
};

export default ProductsDetail;
