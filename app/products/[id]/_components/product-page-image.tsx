import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Product } from "@prisma/client";

interface ProductPageImageProps {
  product: Pick<Product, "imageUrl" | "name">;
}

const ProductPageImage = ({ product }: ProductPageImageProps) => {
  return (
    <div className="relative h-[300px]">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={0}
        height={0}
        sizes="100%"
        className="h-[300px] min-w-full object-cover"
      />
      <Link href={"/"}>
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-5 top-5 rounded-full"
        >
          <ChevronLeft size={20} />
        </Button>
      </Link>
    </div>
  );
};

export default ProductPageImage;
