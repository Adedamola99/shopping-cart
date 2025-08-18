import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addItem } from "../features/carts/cartSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-6">Loading product details...</p>;
  if (!product) return <p className="p-6">Product not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      <img
        src={product.image}
        alt={product.title}
        className="w-full md:w-1/2 object-contain"
      />

      <div className="flex flex-col flex-1">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl text-blue-600 font-semibold mb-4">
          ${product.price}
        </p>
        <p className="mb-6">{product.description}</p>
        <button
          className="bg-green-600 text-white py-3 rounded hover:bg-green-700"
          onClick={() =>
            dispatch(
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 1,
              })
            )
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
