import products from "@/constant/Products";
import ProductDetailsPage from "@/src/Components/ProductDetail/ProductDetailPage";


export async function generateStaticParams() {
  return products.map((product) => ({
    id: product._id, 
  }));
}
export default function Product() {
	return <ProductDetailsPage />;
}
