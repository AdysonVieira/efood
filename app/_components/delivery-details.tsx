import { formatCurrency } from "@/app/_helpers/format-currency";
import { Product, Restaurant } from "@prisma/client";
import { Bike, Clock } from "lucide-react";
import React from "react";

interface DeliveryDetailsProps {
  product: Pick<Restaurant, "deliveryFee" | "deliveryTimeInMinutes">;
}

const DeliveryDetails = ({ product }: DeliveryDetailsProps) => {
  return (
    <div className="flex justify-evenly rounded-sm border border-muted py-3">
      <div className="text-[0.75rem]">
        <span className="flex items-center gap-1 text-center text-muted-foreground">
          Entrega
          <Bike size={12} />
        </span>

        <span className="text-center font-bold">
          {Number(product.deliveryFee) > 0
            ? formatCurrency(Number(product.deliveryFee))
            : "Grátis"}
        </span>
      </div>

      <div className="text-[0.75rem]">
        <span className="flex items-center gap-1 text-center text-muted-foreground">
          Entrega
          <Clock size={12} />
        </span>

        <span className="text-center font-bold">
          {product.deliveryTimeInMinutes + " min"}
        </span>
      </div>
    </div>
  );
};

export default DeliveryDetails;
