import React from "react";
import Image from "next/image";
import Logo from "../../public/icons/lensLogo.png";
import FacebookIcon from "./FacebookIcon";
import InstaIcon from "./InstaIcon";
import LinkedinIcon from "./LinkedinIcon";
import styles from "../Custom/MyComponent.module.css"
const Footer = () => {
  return (
    <>
      <div className={`py-[4rem] px-[4rem] ${styles.paddingAt428}`}>
        <div className={`flex items-center xl:justify-around lg:justify-between md:justify-between ${styles.flexAt248}`}>
          <div className={`flex flex-col ${styles.alignAt428}`}>
            <Image src={Logo} alt="Logo" className="w-[80px] h-[70px]" />
            <span className="my-[20px]">Tomorrow's Vision, Today!</span>
            <div className="flex">
              <FacebookIcon />
              <InstaIcon />
              <LinkedinIcon />
            </div>
          </div>
          <div className={`flex flex-col mt-[20px] ${styles.alignAt428}`}>
            <span className="text-[16px] font-[600] mb-[2rem]">SITEMAP</span>
            <ul>
              <li>MakeMyWeb.</li>
              <li>Products</li>
              <li>Blogs.</li>
              <li>Life of LENS.</li>
              <li>Services.</li>
            </ul>
          </div>
          <div className={`flex flex-col mt-[20px] ${styles.alignAt428}`}>
            <span className={`text-[16px] font-[600] mb-[2rem] ${styles.textAt428}`}>CONNECT</span>
            <ul>
              <li>+1-517-9300-792</li>
              <li>+91-9990-736-796</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`flex justify-between bg-[#242424] xl:py-[4rem] lg:py-[2rem] px-[4rem] ${styles.flexAt248}`}>
        <span>2023 LENS, Inc. All rights reserved.</span>
        <div className={`flex justify-between `}>
          <span>Code of conduct</span>
          <span>Sustainability Goals</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
