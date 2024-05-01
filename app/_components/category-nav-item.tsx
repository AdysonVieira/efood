import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryNavItemProps {
  category: Category;
}

const CategoryNavItem: React.FC<CategoryNavItemProps> = ({
  category,
}: CategoryNavItemProps) => {
  return (
    <div className="flex w-full items-center gap-3 p-3 shadow-sm">
      <Image
        src={category.imageUrl}
        alt={category.name}
        height={30}
        width={30}
        className="h-[30px] flex-grow-0 object-fill "
      />
      <span className="block flex-grow text-sm font-semibold">
        {category.name}
      </span>
    </div>
  );
};

export default CategoryNavItem;
