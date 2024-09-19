import React, { useState } from "react";
import SubscribeButton from "./Headers/SubscribeButton";

const Subscribe = () => {
  const [subDiv, setSubDiv] = useState(true);
  const removeSubDiv = () => {
    setSubDiv(false);
  };
  return (
    <div
      className={`${
        subDiv ? "flex" : "hidden"
      } w-full bg-gray-100 border-t md:text-base text-sm border-t-black fixed bottom-0 justify-center items-center p-4 gap-5`}
    >
      <p>Want more from Akinro Destined?</p>
      <SubscribeButton />
      <button
        onClick={removeSubDiv}
        className='text-[12px] text-blue-500 py-[2px] border-b border-b-blue-500'
      >
        No Thanks?
      </button>
    </div>
  );
};

export default Subscribe;
