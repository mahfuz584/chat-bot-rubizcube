import DarkLightToggle from "@/providers/Theme/ToggoleTheme";
import Image from "next/image";
import Container from "../ui/Container";

const Navbar = () => {
  return (
    <div>
      <Container className="flex justify-between items-center py-4">
        <Image
          src="/images/brandLogo.jpeg"
          alt="brand-logo"
          height={1000}
          width={1000}
          className="w-20 h-20 object-cover"
          priority
        />
        <DarkLightToggle />
      </Container>
    </div>
  );
};

export default Navbar;
