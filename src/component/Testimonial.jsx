import React, { useEffect, useState } from "react";

export const Testimonial = ({ data }) => {
  const [index, setIndex] = useState(0);
  const test = data[index];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="px-48 py-9  bg-gray-200">
      <div className="gap-20 flex justify-between items-center">
        <div className="bg-gray-400 w-fit py-0.5 px-1.5 rounded-full">
          <i
            className="ri-arrow-left-s-line cursor-pointer"
            onClick={handlePrev}
          ></i>
        </div>
        <div>
          <div className="font-semibold text-2xl w-[560px] text-center">
            {test.text}
          </div>
        </div>
        <div className="bg-gray-400 w-fit py-0.5 px-1.5 rounded-full">
          <i
            className="ri-arrow-right-s-line cursor-pointer"
            onClick={handleNext}
          ></i>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center w-full pt-3">
        <img
          alt="user_image"
          src={test.reviewer_image}
          className="rounded-full w-9 h-9"
        />
        <div className="flex flex-col font-semibold leading-5">
          <h1>{test.reviewer_name}</h1>
          <h1>{test.reviewer_designation}</h1>
        </div>
      </div>
    </div>
  );
};
