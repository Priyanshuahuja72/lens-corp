"use client";
import React, { useState } from "react";
// Created an Interface for the Card
interface CardProps {
    CardNumber: string,
    CardHeading:string,
    CardContent:string,
    CardBorderColor:string,
    CardTextColor: string
}

const Card:React.FC<CardProps> = ({CardNumber, CardHeading, CardContent, CardBorderColor, CardTextColor}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`bg-[#1b1c1e] p-[25px] rounded-[10px] transition-all duration-500 ease-in-out ${
        hover
          ? `bg-transparent border-[1px] ${CardBorderColor} border-solid`
          : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* this is the number and text section */}
      <div className="flex items-center justify-start">
        {/* number section */}
        <div>
          <span className="text-gray text-[80px] font-semibold leading-tight opacity-[0.2]">
            0
          </span>
          <span
            className={`text-gray-700 text-[80px] font-semibold leading-tight opacity-[0.2] transition-all duration-500 ease-in-out ${
              hover ? `${CardTextColor} opacity-[2]` : ""
            }`}
          >
            {CardNumber}
          </span>
        </div>
        {/* text section */}
        <div
          className={`xl:text-[40px] lg:text-[35px] md:text-[35px] font-semibold ml-[-20px] mt-[9px] ${CardTextColor} transition-all duration-500 ease-in-out ${
            hover ? "ml-[0px] text-gray" : ""
          }`}
        >
          {CardHeading}
        </div>
      </div>
      {/* this is the content section of the card */}
      <div className="w-[90%]">
      <h5 className="my-[20px] text-gray-600 text-lg font-bold leading-9px text-gray">
        {CardContent}
      </h5>
      </div>
    </div>
  );
};

export default Card;
