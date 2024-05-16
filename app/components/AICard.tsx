import React, { useState } from "react";
import Image from "next/image";

interface AICardProps {
  AIheading: string;
  AImage: any; // Assuming StaticImageData is the type for imported image
  AIData: string;
  AIAnimation: string;
  borderColor: string;
  gradient: string
}

const AICard: React.FC<AICardProps> = ({AIheading, AImage, AIData, AIAnimation, borderColor, gradient}) => {
  const [AIhover, setAIhover] = useState(false);
  return (
    <div className="relative">
    <div 
    className={`bg-[#1b1c1e] p-[20px] rounded-[20px]  xl:w-[335px] xl:h-[450px] lg:w-[20rem] md:w-[300px] md:h-[460px] m-[10px] flex justify-between flex-col ${AIhover ? `bg-transparent ${gradient} border-[1px] ${borderColor} border-solid` : ""}`}
    onMouseEnter={() => setAIhover(true)}
    onMouseLeave={() => setAIhover(false)}
    >
      <div className="text-[1.7rem]">{AIheading}</div>
      {/* Image Section */}
      <div className="my-[20px]">
        <Image src={AImage} alt="GreenAi" className={`w-[251px] h-[150px] ${AIhover ? "" : `animate-animate-substance-1 ${AIAnimation}`}`} />
      </div>
      {/* conten Section */}
      <div className=" mt-[20px]">
        <span className="font-[100] text-gray text-[16px] text-left">{AIData}</span>
      </div>
    </div>
    </div>
  );
};

export default AICard;
