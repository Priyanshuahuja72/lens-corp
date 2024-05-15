import React from "react";
import Image from "next/image";
import trueAImage from "../../public/image/vectorAi.webp";
import styles from "../Custom/MyComponent.module.css"
import Button from "./Button"
const TrueAI = () => {
    const clipPathStyle = {
        clipPath: 'polygon(0 22.5%, 100% 0, 100% 100%, 0 100%)',
        WebkitClipPath: 'polygon(0 22.5%, 100% 0, 100% 100%, 0 100%)',
      };
  return (
    <section className="pt-[180px] bg-[#000] mb-[80px] ">
      <div className=" pt-[100px] pb-[60px] flex justify-between items-center relative bg-[#242424] w-full h-550px z-10 clip-path-custom" style={clipPathStyle}>
        {/* first Image */}
        <div className={`ml-[80px] xl:block lg:hidden md:hidden ${styles.displayAt428}`}>
          <Image src={trueAImage} alt="TrueImage" width={330} height={330} />
        </div>
        {/* second Content */}
        <div className="text-center xl:ml-0 lg:ml-[40px] md:ml-[30px]">
          {/* first content */}
          <div className={`flex text-[64px] text-white text-4xl font-bold capitalize gap-4 items-center mx-auto mb-[40px] ${styles.fontAt428} ${styles.marginAt428}`}>
            <div>Meet</div>
            <div>
              <div>True-AI</div>
              <div></div>
            </div>
          </div>
          {/* Second Content */}
          <div className="text-white text-[26px] font-medium leading-normal mb-4">Design. Create. Deploy.</div>
          {/* third Content */}
          <div className="flex items-center justify-center gap-4 text-[20px]">
            <div>___</div>
            <div>the Future of AI | Power to EDIT</div>
          </div>
          {/* fourth Content */}
          <div className={`text-white text-center text-xs capitalize mb-4 ${styles.marginAt428}`}>
            Based On your website & traffic trends, Tru-AI optimises your
            website
          </div>
          {/* fifith content */}
          <div className="mt-[20px]">
            <Button text="Learn More"/>
          </div>
        </div>
        {/* thuird  Video */}
        <div className={`w-[500px] md:w-[300px] ${styles.displayAt428}`}>
          <video
            className="rounded-tl-full rounded-bl-full"
            autoPlay
            loop
            muted
            src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default TrueAI;
