import React from "react";
import Container from "../Container";
import { ImStatsDots } from "react-icons/im";
import { IoMdTimer } from "react-icons/io";
import { GrBrush } from "react-icons/gr";
import FeatureBox from "./FeatureBox";

const boxes = [
  {
    id: 1,
    title: "Brand Recognition",
    icon: <ImStatsDots size={19} />,
    desc: "Boost your brand recognition with each click. Generic links don’t  mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: 2,
    title: "Detailed Records",
    icon: <IoMdTimer size={19} />,
    desc: "  Gain insights into who is clicking your links. Knowing when and where  people engage with your content helps inform better decisions.",
  },
  {
    id: 3,
    title: "Fully Customizable",
    icon: <GrBrush size={19} />,
    desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const Statics = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="text-center">
          <h2 className=" text-center mb-6 text-4xl font-bold">
            Advanced Statistics
          </h2>
          <p className="mb-12 text-gray-500 max-w-[28rem] text-center mx-auto">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {boxes.map((item) => (
              <FeatureBox
                key={item.id}
                title={item.title}
                icon={item.icon}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statics;
