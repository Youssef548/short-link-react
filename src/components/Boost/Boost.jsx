import React from "react";
import Container from "../../components/Container";
import "./Boost.css";
const Boost = () => {
  return (
    <div className="boost py-10">
      <Container>
        <div className="flex flex-col gap-4 justify-center items-center ">
          <h3 className="text-4xl text-white font-bold">
            Boost your links today
          </h3>
          <button className="font-bold px-12 py-3 rounded-full bg-primary-cyan hover:bg-primary-cyan-hover text-white duration-300">
            Get Started
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Boost;
