import { Button } from "@mui/material";
import { IoMenuOutline, IoPersonOutline, IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className='flex justify-between bg-[#A0D6FA] w-full h-fit p-4'>
        <button className='flex flex-1 items-center text-left justify-start text-[25px]'>
          <IoMenuOutline />
        </button>

        <div className='m-auto font-bold text-black text-[30px]'>
          <a href='/'>Clever</a>
        </div>

        <div className='flex flex-1 justify-end gap-4 items-center text-right'>
          <Button
            className='!bg-black !text-white !text-[12px] !rounded-none'
            size='small'
            variant='contained'
          >
            SUBSCRIBE
          </Button>

          <button className='group flex gap-3 items-center hover:bg-white rounded-none cursor-pointer px-3 py-1 transition-all lg:border-l-0 border-l border-l-white'>
            <IoPersonOutline />
            <button className='group-hover:underline'>Sign In</button>
          </button>

          <button className='hidden lg:block'>
            <IoSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
