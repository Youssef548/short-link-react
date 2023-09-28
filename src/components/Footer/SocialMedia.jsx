import React from "react";
import {
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex gap-6">
      <a href="#" className="text-white hover:text-primary-cyan duration-300">
        <FaFacebookF size={30} />
      </a>
      <a href="#" className="text-white hover:text-primary-cyan duration-300">
        <FaTwitter size={30} />
      </a>
      <a href="#" className="text-white hover:text-primary-cyan duration-300">
        <FaPinterest size={30} />
      </a>
      <a href="#" className="text-white hover:text-primary-cyan duration-300">
        <FaInstagram size={30} />
      </a>
    </div>
  );
};
export default SocialMedia;
