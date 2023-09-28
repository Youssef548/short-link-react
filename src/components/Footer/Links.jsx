import React from "react";

const Links = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-24">
      <div>
        <p className="mb-6 text-white font-bold text-lg">Features</p>
        <ul className="flex flex-col gap-4">
          <li className="text-gray-300 hover:text-primary-cyan duration-300 cursor-pointer">
            Link Shortening
          </li>
          <li className="text-gray-300 hover:text-primary-cyan duration-300 cursor-pointer">
            Branded Links
          </li>
          <li className="text-gray-300 hover:text-primary-cyan duration-300 cursor-pointer">
            Analytics
          </li>
        </ul>
      </div>
      <div>
        <p className="mb-6 text-white font-bold text-lg">Resources</p>
        <ul className="flex flex-col gap-4">
          <li className="text-gray-300 hover:text-primary-cyan duration-300 cursor-pointer">
            Blog
          </li>
          <li className="text-gray-300 hover:text-primary-cyan duration-300 cursor-pointer">
            Developers
          </li>
          <li className="text-gray-300 hover:text-primary-cyan duration-300 cursor-pointer">
            Support
          </li>
        </ul>
      </div>
      <div className="mr-24 md:mr-0">
        <p className="mb-6 text-white font-bold text-lg">Company</p>
        <ul className="flex flex-col gap-4">
          <li className="text-gray-300 hover:text-primary-cyan duration-300 cursor-pointer">
            About
          </li>
          <li className="text-gray-300 hover:text-primary-cyan duration-300 cursor-pointer">
            Our Team
          </li>
          <li className="text-gray-300 hover:text-primary-cyan duration-300 cursor-pointer">
            Careers
          </li>
          <li className="text-gray-300 hover:text-primary-cyan duration-300 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Links;
