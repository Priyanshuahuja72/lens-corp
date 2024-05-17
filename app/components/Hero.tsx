import React from "react";
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
        <h1 className={` font-bold text-white text-center xl:text-[70px] lg:text-[55px] md:text-[50px] lg:mt-[8rem] sm:text-[40px] sm:mt-[8rem]`}>
          We are at the forefront of AI
        </h1>
        <div className="text-center">
          <span className={`text-[1.2rem] font-light text-white xl:block lg:block md:hidden sm:hidden`}>
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
