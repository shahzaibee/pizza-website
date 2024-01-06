import React from "react";
import SectionProps from "../../components/sectionProps";
const About = () => {
  return (
    <>
      <section className="text-center my-16">
        <SectionProps subheader={"Our Story "} mainheader={"About us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-8 flex flex-col gap-6 text-center">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            minus debitis esse unde hic beatae recusandae natus excepturi
            dolores illo ut, qui quaerat odit eveniet repudiandae ab deserunt
            nam expedita eligendi suscipit saepe repellat est velit laudantium?
            Facere voluptas odit placeat sint quia? Suscipit placeat animi unde
            esse laudantium adipisci.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            sint, provident tenetur perspiciatis voluptates non esse ducimus
            dolorum dignissimos est vero fuga doloribus, impedit doloremque.
            Voluptas qui reprehenderit saepe atque ipsum nulla doloremque,
            commodi exercitationem quasi itaque
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            reprehenderit at. In odio aut nobis voluptas pariatur quisquam ipsam
            vel saepe adipisci temporibus.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
