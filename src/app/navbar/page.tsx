import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between mx-auto">
      <Link href={"/"} className="text-primary font-semibold text-2xl">
        ST PIZZA
      </Link>
      <nav className="hidden lg:flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
      <nav className="hidden lg:flex">
        <Link
          href={"/login"}
          className="font-bold text-black px-8 py-2 rounded-full"
        >
          Login
        </Link>
        <Link
          href={"/register"}
          className="bg-primarys text-white px-4 py-2 rounded-full"
        >
          Register
        </Link>
      </nav>
      <nav className="lg:hidden block flex-col tems-center gap-8 text-gray-500 font-semibold">
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <div className="flex flex-col justify-center items-center">
            <SheetContent className="bg-gray-600 text-white border-none">
              <Link href={"/"}>Home</Link>
              <br />
              <br />
              <Link href={"/menu"}>Menu</Link>
              <br />
              <br />

              <Link href={"/about"}>About</Link>
              <br />
              <br />
              <Link href={"/contact"}>Contact</Link>
              <br />
              <br />
              <Link
                href={"/register"}
                className="bg-primarys text-white px-4 py-2 rounded-full"
              >
                Register
              </Link>
              <br />
              <br />
              <Link
                href={"/login"}
                className=" text-white px-5 py-2 rounded-full"
              >
                Login
              </Link>
            </SheetContent>
          </div>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
