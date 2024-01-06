import React from "react";
import Image from "next/image";
import SectionProps from "../../components/sectionProps";
import Card from "@/components/card";

const HomeMenu = () => {
  return (
    <section className=" mt-5 lg:mt-0 mx-auto items-center overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-start mx-auto">
        <div>
          <Image
            src={"/sallad1.png"}
            className="h-40 w-32 hidden lg:block    "
            alt="salad1"
            width={100}
            height={100}
          />
        </div>
        <SectionProps subheader={"Checkout"} mainheader={"Menu"} />
        <div>
          <Image
            src={"/sallad2.png"}
            className="h-40 w-32 hidden lg:block"
            alt="salad1"
            width={100}
            height={100}
          />
        </div>
      </div>
      <Card />
    </section>
  );
};

export default HomeMenu;
