import { Prisma } from "@prisma/client";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { ArrowDown } from "lucide-react";
import { calculateProductDiscount } from "../_helpers/calculate-product-discount";
import { formatCurrency } from "../_helpers/format-currency";

interface ProductCardProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li className="flex max-w-[150px] flex-col gap-3">
      {/* Card image */}
      <div className="relative h-[150px] w-[150px] overflow-hidden rounded-sm">
        <Image
          src={product.imageUrl}
          alt={product.description}
          width={150}
          height={150}
          className=" aspect-square rounded-sm object-cover"
        />
        <Badge className="absolute left-2 top-2">
          <ArrowDown size={14} />
          {`${product.discountPercentage}%`}
        </Badge>
      </div>

      {/* Card informations */}
      <div className="w-[140px]">
        <h2 className="truncate">{product.name}</h2>
        <div className="flex w-full items-end gap-2">
          <h3 className="font-bold">
            {formatCurrency(calculateProductDiscount(product))}
          </h3>
          {product.discountPercentage > 0 && (
            <span className="text-sm text-muted-foreground line-through">
              {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>
        <span className="truncate text-sm text-muted-foreground">
          {product.restaurant.name}
        </span>
      </div>
    </li>
  );
};

export default ProductCard;
