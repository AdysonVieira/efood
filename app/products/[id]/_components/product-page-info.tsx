"use client";
import React from "react";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import Quantity from "@/app/_components/quantity";
import { Badge } from "@/app/_components/ui/badge";
import { calculateProductDiscount } from "@/app/_helpers/calculate-product-discount";
import { formatCurrency } from "@/app/_helpers/format-currency";
import { ArrowDown } from "lucide-react";

interface ProductPageInfoProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>;
}

const ProductPageInfo = ({ product }: ProductPageInfoProps) => {
  const [quantity, setQuantity] = React.useState<number>(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex items-center gap-2">
          <Image
            src={product.restaurant.imageUrl}
            alt="imagem do restaurante"
            width={16}
            height={16}
            className="aspect-square rounded-full"
          />
          <h3 className="text-[0.75rem] text-muted-foreground">
            {product.restaurant.name}
          </h3>
        </div>

        <h1 className="text-lg font-bold">{product.name}</h1>
      </div>

      <div className="flex items-end justify-between">
        <div>
          {product.discountPercentage > 0 && (
            <span className="text-[0.75rem] leading-3 text-muted-foreground">
              De {formatCurrency(Number(product.price))}
            </span>
          )}

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">
              {formatCurrency(calculateProductDiscount(product))}
            </span>

            <Badge>
              <ArrowDown size={14} />
              {`${product.discountPercentage}%`}
            </Badge>
          </div>
        </div>

        <Quantity
          value={quantity}
          increaseFn={increaseQuantity}
          decreaseFn={decreaseQuantity}
        />
      </div>
    </div>
  );
};

export default ProductPageInfo;
