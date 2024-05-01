import { db } from "@/app/_lib/prisma";
import CategoryNavItem from "./category-nav-item";

const CategoryNav: React.FC = async () => {
  const categories = await db.category.findMany({});

  return (
    <div className="grid grid-cols-2">
      {categories.map((category) => (
        <CategoryNavItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryNav;
