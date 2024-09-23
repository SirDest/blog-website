import React, { useState } from "react";
import adImg from "../../static/images/subadimg.webp";
import SubscribeButton from "../Headers/SubscribeButton";
import { IoClose } from "react-icons/io5";

const SubscribeAd = () => {
  const [subAd, setSubAd] = useState(true);

  const closeAd = () => {
    setSubAd(false);
  };

  return (
    <div
      className={`${
        subAd ? "flex" : "hidden"
      } h-fit lg:py-14 py-9 w-full relative transition-all`}
    >
      <div className='h-fit w-fit py-3 px-10 m-auto flex items-center md:gap-5 gap-2 border-y border-y-gray-300'>
        <img src={adImg} alt='ad' className='h-[50px] md:h-[80px]' />
        <p className='lg:text-[22px] md:text-[17px] text-[12px] font-semibold'>
          The October issue is here: Get AD for{" "}
          <span className='line-through'>$3.33</span> $1.50 per month + an
          exclusive tote!
        </p>
        <SubscribeButton />
      </div>
      <button
        onClick={closeAd}
        className='w-fit flex items-center text-[20px] absolute top-2 right-4 '
      >
        <IoClose />
      </button>
    </div>
  );
};

export default SubscribeAd;
