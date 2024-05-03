import { db } from "@/app/_lib/prisma";

import { notFound } from "next/navigation";

import ProductPageInfo from "./_components/product-page-info";
import ProductPageImage from "./_components/product-page-image";
import ProductPageCarrousel from "./_components/product-page-carrousel";
import DeliveryDetails from "../../_components/delivery-details";
import { Button } from "@/app/_components/ui/button";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await db.product.findUnique({
    where: {
      id: id,
    },
    include: {
      restaurant: true,
    },
  });

  if (!product) return notFound();

  const drinks = await db.product.findMany({
    where: {
      category: {
        name: "Sucos",
      },
      restaurant: {
        id: product?.restaurantId,
      },
    },
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <>
      <div className="relative">
        <ProductPageImage product={product} />
        <div className="relative top-[-50px] flex flex-col gap-6 rounded-[24px] bg-white p-5">
          <ProductPageInfo product={product} />
          <DeliveryDetails product={product.restaurant} />
          <div>
            <h2 className="pb-3 text-[1rem] font-bold">Sobre</h2>
            <p className="text-sm text-muted-foreground">
              {product.description}
            </p>
          </div>
          <Button className="py-6">Adicionar a sacola</Button>
        </div>
      </div>
      <div className="relative pb-6">
        {drinks && <ProductPageCarrousel products={drinks} title="Sucos" />}
      </div>
    </>
  );
};

export default ProductPage;
