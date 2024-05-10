"use client";
import React, { useState } from "react";
import styles from "../Custom/MyComponent.module.css"
// Created an Interface for the Card
interface CardProps {
    CardNumber: string,
    CardHeading:string,
    CardContent:string,
    CardColor:string
}

const Card:React.FC<CardProps> = ({CardNumber, CardHeading, CardContent, CardColor}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`bg-[#1b1c1e] p-[25px] rounded-[10px] transition-all duration-500 ease-in-out ${
        hover
          ? `bg-transparent border-[1px] border-[${CardColor}] border-solid`
          : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* this is the number and text section */}
      <div className="flex items-center justify-start">
        {/* number section */}
        <div>
          <span className="text-gray-700 text-[90px] font-semibold leading-tight opacity-[0.2]">
            0
          </span>
          <span
            className={`text-gray-700 text-[90px] font-semibold leading-tight opacity-[0.2] transition-all duration-500 ease-in-out ${
              hover ? `text-[${CardColor}] opacity-[1]` : ""
            }`}
          >
            {CardNumber}
          </span>
        </div>
        {/* text section */}
        <div
          className={`xl:text-[40px] lg:text-[35px] md:text-[35px] font-semibold ml-[-20px] mt-[9px] text-[${CardColor}] transition-all duration-500 ease-in-out ${
            hover ? "ml-[0px] text-[#707070]" : ""
          }`}
        >
          {CardHeading}
        </div>
      </div>
      {/* this is the content section of the card */}
      <h5 className="mt-[20px] text-gray-600 text-lg font-bold leading-9px">
        {CardContent}
      </h5>
    </div>
  );
};

export default Card;
