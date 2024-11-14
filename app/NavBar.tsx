import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 flex justify-around items-center bg-black w-full h-24">
      <Link
        className="navbar-items hover:bg-custom-gradient bg-clip-text hover:text-transparent md:text-2xl lg:text-3xl"
        href="#home"
      >
        Home
      </Link>
      <Link
        className="navbar-items hover:bg-custom-gradient bg-clip-text hover:text-transparent md:text-2xl lg:text-3xl"
        href="#about"
      >
        About
      </Link>
      <Link
        className="navbar-items hover:bg-custom-gradient bg-clip-text hover:text-transparent md:text-2xl lg:text-3xl"
        href="#experience"
      >
        Experience
      </Link>
      <Link
        className="navbar-items hover:bg-custom-gradient bg-clip-text hover:text-transparent md:text-2xl lg:text-3xl"
        href="#contact"
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
