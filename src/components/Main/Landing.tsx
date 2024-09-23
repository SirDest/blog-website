import React from "react";

const Landing = () => {
  return (
    <div className='h-[800px] w-full flex flex-col md:flex-row justify-center px-4 py-3'>
      <div className='h-full w-full md:w-[30%] flex flex-col p-4 gap-4'>
        <div className='w-full h-1/2 bg-green-300'></div>
        <div className='w-full h-1/2 bg-red-300'></div>
      </div>

      <div className='h-full w-full md:w-[40%] flex py-4 order-first md:order-none'>
        <div className='w-full h-full bg-blue-300'></div>
      </div>

      <div className='h-full w-full md:w-[30%] flex flex-col p-4 gap-4'>
        <div className='w-full h-1/2 bg-green-300'></div>
        <div className='w-full h-1/2 bg-red-300'></div>
      </div>
    </div>
  );
};

export default Landing;
