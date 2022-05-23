import Image from "next/image";

const ProductDetailScreen = ({ data }) => {
  return (
    <>
      <div>
        <Image src={data.images[1]} alt="" width={550} height={350} />
      </div>
      <div>
        <h1>Price:{data.price}</h1>
        <h2>Rating:{data.rating}</h2>
        <h2>In Stock:{data.stock}</h2>
        <p>{data.description}</p>
      </div>
    </>
  );
};

export default ProductDetailScreen;
