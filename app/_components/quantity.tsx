import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface QuantityProps {
  value: number;
  increaseFn: () => void;
  decreaseFn: () => void;
}

const Quantity = ({ value, increaseFn, decreaseFn }: QuantityProps) => {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        size="icon"
        className="border-muted hover:bg-primary"
        onClick={decreaseFn}
      >
        <ChevronLeft className="hover:text-white" />
      </Button>

      <span className="font-semibold">{value}</span>

      <Button
        variant="outline"
        size="icon"
        className="border-muted hover:bg-primary"
        onClick={increaseFn}
      >
        <ChevronRight className="hover:text-white" />
      </Button>
    </div>
  );
};

export default Quantity;
