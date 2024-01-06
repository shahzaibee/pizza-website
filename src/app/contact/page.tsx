import React from "react";
import SectionProps from "../../components/sectionProps";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section className="text-center my-8">
        <SectionProps subheader={"Dont Hasitate"} mainheader={"Contact us"} />
        <div className="mt-4 underline text-4xl text-gray-500">
          <Link href="tel:+46 738 123 123">+46 738 123 123</Link>
        </div>
      </section>
    </>
  );
};

export default Contact;
