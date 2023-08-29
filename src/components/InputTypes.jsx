import { useState } from "react";
import { IoLanguageSharp } from "react-icons/io5";
import { IoMdImage } from "react-icons/io";
import { IoMdDocument } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const InputTypes = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="h-[68px] flex items-center  text-[14px]">
      <div className="flex space-x-[7px]">
        <button
          onClick={() => setIsActive(1)}
          className={`flex border-border-color border rounded items-center px-[14px] py-[6px] text-blue hover:bg-[#f6fafe] 
              hover:text-[#1750a8] active:bg-[#c8ddfa] ${
                isActive === 1 ? "hover:bg-[#e0ecfd] bg-[#e0ecfd] " : ""
              }`}
        >
          <div className="mr-[6px] ">
            <IoLanguageSharp className="text-[20px]" />
          </div>
          <span className=" text-[14px]">Text</span>
        </button>
        <button
          onClick={() => setIsActive(2)}
          className={`flex border-border-color border rounded items-center px-[14px] py-[6px] text-blue hover:bg-[#f6fafe] 
              hover:text-[#1750a8] active:bg-[#c8ddfa] ${
                isActive === 2 ? "hover:bg-[#e0ecfd] bg-[#e0ecfd] " : ""
              }`}
        >
          <div className="mr-[6px]">
            <IoMdImage className="text-[20px]" />
          </div>
          <span className=" text-[14px]">Images</span>
        </button>
        <button
          onClick={() => setIsActive(3)}
          className={`flex border-border-color border rounded items-center px-[14px] py-[6px] text-blue hover:bg-[#f6fafe] 
              hover:text-[#1750a8] active:bg-[#c8ddfa] ${
                isActive === 3 ? "hover:bg-[#e0ecfd] bg-[#e0ecfd] " : ""
              }`}
        >
          <div className="mr-[6px]">
            <IoMdDocument className=" text-[20px]" />
          </div>
          <span className=" text-[14px]">Documents</span>
        </button>
        <button
          onClick={() => setIsActive(4)}
          className={`flex border-border-color border rounded items-center px-[14px] py-[6px] text-blue hover:bg-[#f6fafe] 
              hover:text-[#1750a8] active:bg-[#c8ddfa] ${
                isActive === 4 ? "hover:bg-[#e0ecfd] bg-[#e0ecfd] " : ""
              }`}
        >
          <div className="mr-[6px] ">
            <TbWorld className=" text-[20px]" />
          </div>
          <span className=" text-[14px]">Websites</span>
        </button>
      </div>
    </div>
  );
};

export default InputTypes;
