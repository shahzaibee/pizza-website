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
        <Link
          href={"/"}
          className="bg-primarys text-white px-8 py-2 rounded-full"
        >
          Login
        </Link>
      </nav>
      <nav className="lg:hidden block flex-col items-center gap-8 text-gray-500 font-semibold">
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <div className="flex flex-col justify-center items-center">
            <SheetContent className="">
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
                href={"/"}
                className="bg-primarys text-white px-8 py-2 rounded-full"
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
