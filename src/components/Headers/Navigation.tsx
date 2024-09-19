import React from "react";

const navItems = [
  "Decoration",
  "Renovation",
  "Conversation",
  "Shopping",
  "Find a Pro",
];
const Navigation = () => {
  return (
    <ul className='hidden lg:flex justify-center gap-4 bg-[#A0D6FA] w-full border border-white h-fit p-2 text-black'>
      {navItems.map((items, i) => {
        return (
          <li className='cursor-pointer font-normal' key={i}>
            {items}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
