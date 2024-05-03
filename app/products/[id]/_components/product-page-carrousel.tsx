import ProductCard from "@/app/_components/product-card";
import { Prisma } from "@prisma/client";
import React from "react";

interface ProductPageCarrousel {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
  title: string;
}

const ProductPageCarrousel = ({ products, title }: ProductPageCarrousel) => {
  return (
    <div className="pl-5 ">
      <div className="flex justify-between pb-5">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      <ul className="flex gap-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductPageCarrousel;
