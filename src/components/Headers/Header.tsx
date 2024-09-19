import { IoMenuOutline, IoPersonOutline, IoSearch } from "react-icons/io5";
import Navigation from "./Navigation";
import Subscribe from "../Subscribe";
import SubscribeButton from "./SubscribeButton";

const Header = () => {
  return (
    <>
      <div className='flex justify-between bg-[#A0D6FA] w-full h-fit p-4 gap-4'>
        <div className='flex md:flex-1 items-center text-left justify-start text-[25px]'>
          <button>
            <IoMenuOutline />
          </button>
        </div>

        <div className='md:m-auto flex-1 md:flex-none justify-start font-bold text-black text-[30px]'>
          <a href='/'>Clever</a>
        </div>

        <div className='flex flex-1 justify-end gap-4 items-center text-right'>
          <SubscribeButton />
          <button className='group flex gap-3 items-center hover:bg-white rounded-none cursor-pointer px-3 py-1 transition-all duration-300 lg:border-l-0 border-l border-l-white'>
            <IoPersonOutline />
            <button className='group-hover:underline hidden md:block'>
              Sign In
            </button>
          </button>

          <button className='hidden lg:block'>
            <IoSearch />
          </button>
        </div>
      </div>
      <Navigation />
      <Subscribe />
    </>
  );
};

export default Header;
