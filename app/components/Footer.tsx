import React from "react";
import Image from "next/image";
import FacebookIcon from "./FacebookIcon";
import InstaIcon from "./InstaIcon";
import LinkedinIcon from "./LinkedinIcon";
import styles from "../Custom/MyComponent.module.css";
import LogoImage from "../../public/icons/lensLogo.png";

const Footer = () => {
  return (
    <>
      <div className={`py-4 px-4 ${styles.paddingAt428}`}>
        <div className={`flex xl:justify-around lg:justify-between md:justify-between ${styles.flexAt248}`}>
          <div className={`flex flex-col ${styles.alignAt428}`}>
            <Image src={LogoImage} alt="Logo" width={80} height={70} />
            <span className="my-4">Tomorrow Vision, Today!</span>
            <div className="flex">
              <FacebookIcon />
              <InstaIcon />
              <LinkedinIcon />
            </div>
          </div>
          <div className={`flex flex-col mt-4 ${styles.alignAt428}`}>
            <span className="text-16 font-600 mb-4">SITEMAP</span>
            <ul>
              <li className="pb-1 cursor-pointer hover:custom-text-gradient">MakeMyWeb</li>
              <li className="pb-1 cursor-pointer hover:custom-text-gradient">Products</li>
              <li className="pb-1 cursor-pointer hover:custom-text-gradient">Blogs</li>
              <li className="pb-1 cursor-pointer hover:custom-text-gradient">Life of LENS</li>
              <li>Services</li>
            </ul>
          </div>
          <div className={`flex flex-col mt-4 ${styles.alignAt428}`}>
            <span className={`text-16 font-600 mb-4 ${styles.textAt428}`}>CONNECT</span>
            <ul>
              <li className="pb-1 cursor-pointer hover:custom-text-gradient">+1-517-9300-792</li>
              <li className="pb-1 cursor-pointer hover:custom-text-gradient">+91-9990-736-796</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`flex justify-between bg-[#242424] py-7 px-12 ${styles.flexAt248}`}>
        <span className="text-white">2023 LENS, Inc. All rights reserved.</span>
        <div className="flex">
          <span className="text-white mr-4">Code of conduct</span>
          <span className="text-white">Sustainability Goals</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
