import React from "react";

const Landing = () => {
  return (
    <div className='h-[800px] w-full flex flex-col md:flex-row justify-center py-3'>
      <div className='h-full w-full md:w-[30%] flex flex-col p-4 gap-7'>
        <div className='w-full h-1/2 bg-gray-200'></div>
        <div className='w-full h-1/2 bg-gray-200'></div>
      </div>

      <div className='h-full w-full md:w-[40%] flex p-4 order-first md:order-none'>
        <div className='w-full h-full bg-blue-300'></div>
      </div>

      <div className='h-full w-full md:w-[30%] flex flex-col p-4 gap-7'>
        <div className='w-full h-1/2 bg-gray-200'></div>
        <div className='w-full h-1/2 bg-gray-200'></div>
      </div>
    </div>
  );
};

export default Landing;
