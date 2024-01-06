import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
      <div className="hover:bg-transparent shadow border p-4  hover:bg-gray-100 rounded-lg text-center w-33px flex flex-col justify-center items-center">
        <Image
          src="/pizza.png"
          width={100}
          height={100}
          alt="pizza"
          className="w-56 h-56"
        />
        <h4 className="font-semibold my-2">Pepporoni pizza</h4>
        <p className="text-gray-500 text-sm my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod
          aspernatur ad,
        </p>
        <button className="bg-primarys text-white px-6 py-2 rounded-xl mt-2">
          Add to cart $12
        </button>
      </div>
      <div className=" hover:bg-transparent shadow border p-4 hover:bg-gray-100  rounded-lg text-center w-33px flex flex-col justify-center items-center">
        <Image
          src="/pizza.png"
          width={100}
          height={100}
          alt="pizza"
          className="w-56 h-56"
        />
        <h4 className="font-semibold my-2">Pepporoni pizza</h4>
        <p className="text-gray-500 text-sm my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod
          aspernatur ad,
        </p>
        <button className="bg-primarys text-white px-6 py-2 rounded-xl mt-2">
          Add to cart $12
        </button>
      </div>
      <div className=" hover:bg-transparent shadow border p-4 hover:bg-gray-100  rounded-lg text-center w-33px flex flex-col justify-center items-center">
        <Image
          src="/pizza.png"
          width={100}
          height={100}
          alt="pizza"
          className="w-56 h-56"
        />
        <h4 className="font-semibold my-2">Pepporoni pizza</h4>
        <p className="text-gray-500 text-sm my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod
          aspernatur ad,
        </p>
        <button className="bg-primarys text-white px-6 py-2 rounded-xl mt-2">
          Add to cart $12
        </button>
      </div>
      <div className=" hover:bg-transparent shadow border p-4 hover:bg-gray-100  rounded-lg text-center w-33px flex flex-col justify-center items-center">
        <Image
          src="/pizza.png"
          width={100}
          height={100}
          alt="pizza"
          className="w-56 h-56"
        />
        <h4 className="font-semibold my-2">Pepporoni pizza</h4>
        <p className="text-gray-500 text-sm my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod
          aspernatur ad,
        </p>
        <button className="bg-primarys text-white px-6 py-2 rounded-xl mt-2">
          Add to cart $12
        </button>
      </div>
      <div className="hover:bg-transparent shadow borderp-4 hover:bg-gray-100  rounded-lg text-center w-33px flex flex-col justify-center items-center">
        <Image
          src="/pizza.png"
          width={100}
          height={100}
          alt="pizza"
          className="w-56 h-56"
        />
        <h4 className="font-semibold my-2">Pepporoni pizza</h4>
        <p className="text-gray-500 text-sm my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod
          aspernatur ad,
        </p>
        <button className="bg-primarys text-white px-6 py-2 rounded-xl mt-2">
          Add to cart $12
        </button>
      </div>
      <div className="hover:bg-transparent shadow border p-4 hover:bg-gray-100  rounded-lg text-center w-33px flex flex-col justify-center items-center">
        <Image
          src="/pizza.png"
          width={100}
          height={100}
          alt="pizza"
          className="w-56 h-56"
        />
        <h4 className="font-semibold my-2">Pepporoni pizza</h4>
        <p className="text-gray-500 text-sm my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod
          aspernatur ad,
        </p>
        <button className="bg-primarys text-white px-6 py-2 rounded-xl mt-2">
          Add to cart $12
        </button>
      </div>
    </div>
  );
};

export default Card;
