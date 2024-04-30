import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between">
      <Image src={"/efoodlogo.png"} alt="Efood logo" height={40} width={68} />
      <Button variant="ghost">
        <MenuIcon size={20} />
      </Button>
    </header>
  );
};

export default Header;
