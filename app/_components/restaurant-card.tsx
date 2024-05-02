import { Restaurant } from "@prisma/client";
import { Bike, Clock, Star } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/format-currency";
import { Badge } from "./ui/badge";

interface RestaurantCardProps {
  restaurant: Restaurant;
}
const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <li className="flex max-w-[250px] flex-col gap-3">
      {/* Card image */}
      <div className="relative h-[150px] w-[250px] overflow-hidden rounded-sm">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          width={0}
          height={0}
          sizes="100%"
          className="h-full w-[250px] object-cover"
        />
        <Badge className="absolute left-2 top-2 flex items-center gap-1 border-none bg-white">
          <Star size={14} className=" fill-yellow-400 text-yellow-300" />
          <span className="font-bold text-foreground">5.0</span>
        </Badge>
      </div>
      <div>
        <h2 className="font-bold">{restaurant.name}</h2>
        <div className="flex gap-3">
          <span className="flex items-center gap-1 text-sm">
            <Bike size={14} className="fill-primary text-transparent" />
            {Number(restaurant.deliveryFee) === 0
              ? "Entrega grátis"
              : formatCurrency(Number(restaurant.deliveryFee))}
          </span>
          <span className="flex items-center gap-1 text-sm">
            <Clock size={14} className="fill-primary text-white" />
            {`${restaurant.deliveryTimeInMinutes} min`}
          </span>
        </div>
      </div>
    </li>
  );
};

export default RestaurantCard;
