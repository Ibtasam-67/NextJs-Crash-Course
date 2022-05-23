import Link from "next/link";
import Image from "next/image"

const ProductScreen = ({ data }) => {
  return (
    <>
      {data.products.map((item) => {
        return (
          <div style={{ cursor: "pointer" }} key={item.id}>
            <h2>{item.brand}</h2>
            <Link href={"/products/" + item.id}>
              <div>
                <Image src={item.thumbnail} alt='' height={200} width={400} />
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductScreen;
