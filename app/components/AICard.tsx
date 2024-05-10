import React from "react";
import Image from "next/image";
import GreenAI from "../../public/image/greenAI.webp";
const AICard = () => {
  return (
    <div className="bg-[#1b1c1e] p-[20px] rounded-[20px]  w-[335px] h-[435px] m-[10px] flex justify-between flex-col">
      <div className="text-[1.7rem]">Exclusive Rights</div>
      {/* Image Section */}
        <Image src={GreenAI} alt="GreenAi" className="w-[251px] h-[91px]" />
      {/* conten Section */}
      <div className=" mt-[40px] font-[100] text-gray-600 text-[20px] text-left">
        Our mission is to make an impact in empowering human society with AI.
        Hence, all Intellectual Property Rights belongs to you.
      </div>
    </div>
  );
};

export default AICard;
