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
        <div className={`flex items-center xl:justify-around lg:justify-between md:justify-between ${styles.flexAt248}`}>
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
              <li>MakeMyWeb</li>
              <li>Products</li>
              <li>Blogs</li>
              <li>Life of LENS</li>
              <li>Services</li>
            </ul>
          </div>
          <div className={`flex flex-col mt-4 ${styles.alignAt428}`}>
            <span className={`text-16 font-600 mb-4 ${styles.textAt428}`}>CONNECT</span>
            <ul>
              <li>+1-517-9300-792</li>
              <li>+91-9990-736-796</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`flex justify-between bg-gray-900 py-4 px-4 ${styles.flexAt248}`}>
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
