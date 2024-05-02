import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { db } from "../_lib/prisma";
import RestaurantCard from "./restaurant-card";

interface RestaurantsCarrouselProps {
  title: string;
}

const RestaurantsCarrousel = async ({ title }: RestaurantsCarrouselProps) => {
  // Buscar restaurantes com mais pedidos
  const restaurants = await db.restaurant.findMany({ take: 10 });
  return (
    <div className="px-5 pb-6">
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
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantsCarrousel;
