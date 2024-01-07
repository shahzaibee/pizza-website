import Image from "next/image";
import React from "react";
import Right from "./icons/right";

const Hero = () => {
  return (
    <section className="]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Everthing is better with a{" "}
            <span className="text-primarys font-bold">Pizza</span>
          </h1>
          <p className="my-4 text-gray-500 scroll-m-20 text-xl font-semibold tracking-tight">
            Pizza is the missing piece that makes every day complete, a simple
            yet delicious joy in life{" "}
          </p>
          <div className="flex justify-center">
            <button className="flex items-center text-white bg-primarys border-0 px-4 py-2 focus:outline-none hover:bg-red-600 transition duration-200 rounded-full lg:text-lg">
              Order now
              <Right />
            </button>
            <button className="ml-4 inline-flex gap-2 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full lg:text-lg">
              Learn more
              <Right />
            </button>
          </div>
        </div>
        <div className="relative mx-auto py-5">
          <Image src={"/pizza.png"} alt="" width={400} height={400} priority />
        </div>
      </div>
    </section>
  );
};

export default Hero;
