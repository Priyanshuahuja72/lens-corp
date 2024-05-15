import React, { useState } from "react";

const Button = ({text}: {text: string}) => {
    const [buttonHover, setButtonHover] = useState(false);
  return (
    <button className={`py-[10px] px-[20px] rounded-[10px] border border-[#fff] ${buttonHover ? "bg-[#fff]" : "bg-transparent"}`}
    onMouseEnter={() => setButtonHover(true)}
    onMouseLeave={() => setButtonHover(false)}
    >
      <div className={`flex items-center`}>
        <div className={`${buttonHover ? "text-black": "text-white"}`}>{text}</div>
        <div className={`pl-[20px] ${buttonHover ? "block": "hidden"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className={`${buttonHover ? "text-black" : "text-white"}`}
          >
            <path
              fill="currentColor"
              d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06"
            ></path>
          </svg>
        </div>
      </div>
    </button>
  );
};

export default Button;
