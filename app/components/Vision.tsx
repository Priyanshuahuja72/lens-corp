import React from "react";
import PeapleIcon from "./PeapleIcon";
import RegularIcon from "./RegularIcon";
import EthicsIcon from "./EthicsIcon";
import styles from "../Custom/MyComponent.module.css"
const Vision = () => {
  return (
    <>
    <div className={`xl:block lg:block md:hidden ${styles.hiddenAt428}`}>
      <div className="grid grid-cols-3">
        <div>
          <h3 className="text-[28px] font-[700] my-[20px]">
            Diversity & Fairness
          </h3>
          <span className="inline-block text-[16px] my-4 text-[#8a8a8a] transition duration-300 col-span-1">
            When training our AI models, we consider ethical and social
            implications of algorithm-based decision making. Our solutions use
            high-quality and fairly-represented data sets to eliminate human
            cognitive biases.
          </span>
        </div>
        {/* second section */}
        <div className="xl:w-[15%] lg:w-[20%] col-span-1/5">
          <span className="inline-block z-20 rounded-[40px] border-4 border-[#8a8a8a] p-[4px]">
            <PeapleIcon />
          </span>
          <span className="block w-[0%] h-[85%] border-l-2 border-dashed border-[#8a8a8a] transform translate-x-7.5 mx-auto"></span>
        </div>
      </div>

      {/* second grid */}
      <div className={`grid grid-cols-3 gap-x-6 w-[72%]`}>
        <div className="col-span-1"></div>
        <div className="col-span-1 justify-self-center">
          <span className="inline-block z-20 rounded-[40px] border-4 border-[#8a8a8a] p-[4px]">
            <RegularIcon/>
          </span>
          <span className="block w-[0%] h-[85%] border-l-2 border-dashed border-[#8a8a8a] transform translate-x-7.5 mx-auto"></span>
        </div>
        {/* second section */}
        <div className="col-span-1">
          <h3 className="text-[28px] font-[700] my-[20px]">
            Diversity & Fairness
          </h3>
          <span className="inline-block text-[16px] my-4 text-[#8a8a8a] transition duration-300">
            When training our AI models, we consider ethical and social
            implications of algorithm-based decision making. Our solutions use
            high-quality and fairly-represented data sets to eliminate human
            cognitive biases.
          </span>
        </div>
      </div>

      {/* third grid */}
      <div className="grid grid-cols-3">
        <div>
          <h3 className="text-[28px] font-[700] my-[20px]">
            Diversity & Fairness
          </h3>
          <span className="inline-block text-[16px] my-4 text-[#8a8a8a] transition duration-300 col-span-1">
            When training our AI models, we consider ethical and social
            implications of algorithm-based decision making. Our solutions use
            high-quality and fairly-represented data sets to eliminate human
            cognitive biases.
          </span>
        </div>
        {/* second section */}
        <div className="xl:w-[15%] lg:w-[20%] col-span-1/5">
          <span className={`inline-block z-20 rounded-[40px] border-4 border-[#8a8a8a] p-[4px]`}>
            <EthicsIcon/>
          </span>
          <span className="block w-[0%] h-[85%] border-l-2 border-dashed border-[#8a8a8a] transform translate-x-7.5 mx-auto"></span>
        </div>
      </div>
    </div>
    {/* for mobile version */}
    <div className={`xl:hidden lg:hidden ${styles.blockAt428}`}>
      <div className="flex items-center w-4/5">
        <div className="mr-[20px]">
        <h3 className="text-[28px] font-[700] my-[20px]">Diversity and Fairness</h3>
        <span className="inline-block text-[16px] my-4 text-[#8a8a8a] transition duration-300 col-span-1">
            When training our AI models, we consider ethical and social
            implications of algorithm-based decision making. Our solutions use
            high-quality and fairly-represented data sets to eliminate human
            cognitive biases.
        </span>
        </div>
        <div>
          <span className={`inline-block z-20 rounded-[40px] border-4 border-[#8a8a8a] p-[4px] ${styles.hiddenAt428}`}><PeapleIcon/></span>
        </div>
      </div>
      <div className="flex items-center w-4/5">
      <div>
          <span className={`inline-block z-20 rounded-[40px] border-4 border-[#8a8a8a] p-[4px] ${styles.hiddenAt428}`}><RegularIcon/></span>
        </div>
        <div>
        <h3 className="text-[28px] font-[700] my-[20px]">Diversity and Fairness</h3>
        <span className="inline-block text-[16px] my-4 text-[#8a8a8a] transition duration-300 col-span-1">
            When training our AI models, we consider ethical and social
            implications of algorithm-based decision making. Our solutions use
            high-quality and fairly-represented data sets to eliminate human
            cognitive biases.
        </span>
        </div>
      </div>
      <div className="flex items-center w-4/5">
        <div className="mr-[20px]">
        <h3 className="text-[28px] font-[700] my-[20px]">Diversity and Fairness</h3>
        <span className="inline-block text-[16px] my-4 text-[#8a8a8a] transition duration-300 col-span-1">
            When training our AI models, we consider ethical and social
            implications of algorithm-based decision making. Our solutions use
            high-quality and fairly-represented data sets to eliminate human
            cognitive biases.
        </span>
        </div>
        <div>
          <span className={`inline-block z-20 rounded-[40px] border-4 border-[#8a8a8a] p-[4px] ${styles.hiddenAt428}`}><EthicsIcon/></span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Vision;
