import { useState, useRef } from "react";
import { PiDotsNineBold } from "react-icons/pi";
import logo from "../assets/logo.png";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isHover, setIsHover] = useState("");

  return (
    <>
      <div className="flex p-[8px] justify-between border border-b-2 h-[64px] ">
        <div className="flex items-center pr-[30px] ">
          <Sidebar />
          <img
            src={
              "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
            }
            title="Google Translate"
            className="inline-flex mt-[6px]"
          />
          <span
            onMouseDown={() => setIsHover("underline")}
            className={`text-theme-color text-xl h-[24px] ml-[4px] mb-[2pxpx] ${isHover}`}
          >
            Translate
          </span>
        </div>
        <div className="flex items-center pr-1 pl-[2px]">
          <div className="py-1 pr-[2px]">
            <div className="p-2">
              <PiDotsNineBold className="text-2xl" />
            </div>
          </div>
          <div className="pl-[6px] py-1 pr-[2px]"></div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Header;
