import React from "react";
import Container from "../Container";
const Header = () => {
  return (
    <div className="py-10 bg-white ">
      <Container>
        <div className="mt-6 md:mt-24 flex flex-col-reverse md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl lg:text-6xl text-[#35333d] leading-[1.2] md:leading-[4.4rem] max-w-[30rem] font-bold">
              More than just shorter links
            </h1>
            <p className="mb-4 text-gray-500 max-w-[24rem]">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="inline font-medium px-6 py-2 rounded-full bg-primary-cyan hover:bg-primary-cyan-hover text-white duration-300 w-fit">
              Get Started
            </button>
          </div>

          <div>
            <img src="/images/illustration-working.svg" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
