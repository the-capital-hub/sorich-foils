import products from "@/constant/Products";
import ProductDetailsPage, {
        type Product,
} from "@/src/Components/ProductDetail/ProductDetailPage";
import { notFound } from "next/navigation";

const typedProducts = products as Product[];

export async function generateStaticParams() {
        return typedProducts.map((product) => ({
                id: product._id,
        }));
}

export default function Product({ params }: { params: { id: string } }) {
        const product = typedProducts.find((item) => item._id === params.id);

        if (!product) {
                notFound();
        }

        return <ProductDetailsPage product={product} />;
}
