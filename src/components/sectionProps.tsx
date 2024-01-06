import React from "react";

const SectionProps = ({ subheader, mainheader }: any) => {
  return (
    <div className="text-center mx-auto">
      <h3 className="uppercase text-gray-600 font-semibold leading-4">
        {" "}
        {subheader}
      </h3>
      <h2 className="text-primary font-bold text-4xl italic text-primarys">
        {mainheader}
      </h2>
    </div>
  );
};

export default SectionProps;
