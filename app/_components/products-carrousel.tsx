import { Product } from "@prisma/client";
import { db } from "../_lib/prisma";
import ProductCard from "./product-card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ProductsCarrouselProps {
  title: string;
}

const ProductsCarrousel = async ({ title }: ProductsCarrouselProps) => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <div className="px-5">
      <div className="flex justify-between pb-5">
        <h2 className="text-lg font-bold">{title}</h2>
        <Link href="" className="flex items-center">
          <span role="a" className="text-primary">
            Ver mais
          </span>
          <ChevronRight size={14} className="text-primary" />
        </Link>
      </div>

      <ul className="flex gap-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsCarrousel;
