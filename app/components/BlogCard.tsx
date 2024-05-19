import React, { useState } from "react";
const BlogCard = ({
  isNew,
  heading,
  para,
  isLast,
}: {
  isNew: string;
  heading: string;
  para: string;
  isLast: boolean;
}) => {
  const [bloghover, setBloghover] = useState(false);
  return (
    <div
      className={`flex relative py-[10px] ${
        isLast ? "col-span-2 row-start-2" : ""
      }`}
      onMouseEnter={() => setBloghover(true)}
      onMouseLeave={() => setBloghover(false)}
    >
      <div className="rounded-[20px] bg-servicecard py-[20px] px-[25px] overflow-hidden">
        <div
          className={`flex h-[90%] flex-col gap-[10px] items-start justify-between transition duration-300 ${
            bloghover ? "translate-y-[-17.5%]" : ""
          }`}
        >
          {/* span section */}
          <div>
            <span
              className={`${
                isNew == "New!" ? "text-orangered" : "text-darkgray"
              }`}
            >
              {isNew}
            </span>
            <h2 className="font-raleway text-[28px] my-5">{heading}</h2>
          </div>
          <div className="flex px-[26px] py-[16px] justify-center items-center rounded-[16px] bg-lightblack">
            <p className="color-darkgray text-[16.5px] leading-[140.7%] my-2 text-darkgray">
              {para}
            </p>
          </div>
        </div>
        {/* Read More section */}
        <div className="mt-[10px]">
          <button
            className={`text-orangered bg-transparent border-none text-[17px] flex items-center gap-[1.25rem] p-0 realtive top-0 transition-all duration-500 ease-in ${
              bloghover ? "opacity-1" : "opacity-0"
            } hover:relative hover:top-[-6px] hover:text-white`}
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m13 8l4 4l-4 4M7 8l4 4l-4 4"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
