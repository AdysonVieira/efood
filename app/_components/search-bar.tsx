import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="flex gap-2">
      <Input
        className="border-none focus-visible:ring-1 focus-visible:ring-offset-0"
        placeholder="Buscar restaurante"
      />
      <Button variant="default" size="icon">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default SearchBar;
