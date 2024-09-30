import React from "react";
import SignInImg from "../../static/images/AD-Login.webp";

const SignInPage = () => {
  return (
    <div className='w-full h-screen flex gap-0'>
      <div className='w-1/2 h-full'>
        <img
          src={SignInImg}
          alt='clever'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='w-1/2 h-full bg-gray-300'></div>
    </div>
  );
};

export default SignInPage;
