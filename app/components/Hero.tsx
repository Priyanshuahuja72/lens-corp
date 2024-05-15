import React from "react";
import styles from "../Custom/MyComponent.module.css"
const Hero = () => {
  return (
    <div className="w-full h-[100vh]">
      <video
        src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
        <h1 className={`xl:text-7xl lg:text-6xl lg:mt-6 md:text-5xl sm:text-4xl font-bold text-white xl:mb-10 lg:mb-5 text-center ${styles.headingAt428}`}>
          We are at the forefront of AI
        </h1>
        <div className="xl:w-[35%] lg:w-[55%] text-center">
          <span className={`text-[1.2rem] font-light text-white xl:block lg:block md:hidden ${styles.customHiddenAt428}`}>
            From Conserving Wildlife to Automatically Generating Caricatures –
            We Do It All
          </span>
          <div className="mt-[50px]">
            <button className="border border-black bg-white text-black px-6 py-2.5 rounded-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
