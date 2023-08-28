import { useState, useRef, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";
import useClickOutside from "../hooks/useClickOutside";
import { Link } from "react-router-dom"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState("");

  const ref1 = useRef(null)

  useClickOutside(ref1, () => {
    setIsOpen(false);
  })


  return (
    <>
      <div
        className={`flex flex-col w-[280px] h-screen top-0 left-0 fixed bg-white shadow-xl duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        ref={ref1}
      >
        <Link
          className="flex items-center h-[64px] py-[8px] pl-[24px] w-fit"
          to="/home"
          title="Google Translate"
          reloadDocument
        >
          <img
            src={
              "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
            }
            title="Google Translate"
            className="mt-[4px]"
          />
          <div onMouseDown={() => setIsHover("underline")} className={`text-theme-color text-xl pl-2 font-normal mt-[3px] ${isHover}`}>
            Translate
          </div>
        </Link>
        <div className="pb-[8px] border-b">
          <div className="flex items-center py-[4px] pl-[48px] pr-[4px]  text-[13px] text-left underline h-[48px] hover:bg-hover-color">
            About Google Translate
          </div>
        </div>
        <div className="py-[8px]">
          <div className="flex items-center py-[4px] pl-[48px] pr-[4px] text-[13px] text-left h-[48px] font-sans hover:bg-hover-color">
            Privacy & Terms
          </div>
          <div className="flex items-center py-[4px] pl-[48px] pr-[4px] text-[13px] text-left h-[48px] hover:bg-hover-color">
            Help
          </div>
          <div className="flex items-center py-[4px] pl-[48px] pr-[4px] text-[13px] text-left h-[48px] hover:bg-hover-color">
            Send feedback
          </div>
          <div className="flex items-center py-[4px] pl-[48px] pr-[4px] text-[13px] text-left h-[48px] hover:bg-hover-color">
            About Google
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="p-[12px] mx-[4px] w-[48px] h-[48px] rounded-full hover:bg-hover-color"
      >
        <MdOutlineMenu className="w-[24px] h-[24px] text-theme-color" />
      </button>
    </>
  );
};

export default Sidebar;
