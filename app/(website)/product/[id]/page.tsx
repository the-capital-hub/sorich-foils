import Products from "@/constant/Products";
import ProductDetailsPage from "@/src/Components/ProductDetail/ProductDetailPage";

export async function generateStaticParams() {
  return Products.map((p) => ({
    id: String(p._id),
  }));
}

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 

  const product = Products.find((p) => String(p._id) === String(id));

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Product Not Found
      </div>
    );

  return <ProductDetailsPage product={product} />;
}
