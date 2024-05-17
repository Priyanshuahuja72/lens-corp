import React from "react";
import Image from "next/image";
import FacebookIcon from "./FacebookIcon";
import InstaIcon from "./InstaIcon";
import LinkedinIcon from "./LinkedinIcon";
import LogoImage from "../../public/icons/lensLogo.png";

const Footer = () => {
  return (
    <>
      <div className={`py-4 xl:mx-40 lg:mx-40 md:mx-20`}>
        <div className={`flex justify-between xl:flex-row lg:flex-row md:flex-row md:items-start sm:flex-col xl:items-start lg:items-start sm:items-center`}>
          <div className={`flex flex-col xl:items-start lg:items-start md:items-start sm:items-center`}>
            <Image src={LogoImage} alt="Logo" width={80} height={70} />
            <span className="my-4">Tomorrow Vision, Today!</span>
            <div className="flex">
              <FacebookIcon />
              <InstaIcon />
              <LinkedinIcon />
            </div>
          </div>
          <div className={`flex flex-col mt-4 xl:text-left lg:text-left md:text-left sm:text-center`}>
            <span className="text-16 font-600 mb-4">SITEMAP</span>
            <ul>
              <li className="pb-2 cursor-pointer hover:custom-text-gradient">MakeMyWeb</li>
              <li className="pb-2 cursor-pointer hover:custom-text-gradient">Products</li>
              <li className="pb-2 cursor-pointer hover:custom-text-gradient">Blogs</li>
              <li className="pb-2 cursor-pointer hover:custom-text-gradient">Life of LENS</li>
              <li className="cursor-pointer hover:custom-text-gradient">Services</li>
            </ul>
          </div>
          <div className={`flex flex-col mt-4 xl:text-left lg:text-left md:text-left sm:text-center`}>
            <span className={`text-16 font-600 mb-4`}>CONNECT</span>
            <ul>
              <li className="pb-1 cursor-pointer hover:custom-text-gradient">+1-517-9300-792</li>
              <li className="pb-1 cursor-pointer hover:custom-text-gradient">+91-9990-736-796</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`flex xl:flex-row lg:flex-row md:flex-row sm:flex-col justify-between bg-[#242424] py-7 px-12`}>
        <span className="text-white">2023 <span className="text-gray">LENS, Inc.</span> All rights reserved.</span>
        <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col">
          <span className="text-gray mr-4">Code of conduct</span>
          <span className="text-white">Sustainability Goals</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
