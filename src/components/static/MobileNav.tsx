import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { TiTimes } from "react-icons/ti";

export default function MobileNav() {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  function changeToggle() {
    setToggleNav(!toggleNav);
  }
  return (
    <>
      <div className="fixed w-[100%]  min-md:hidden">
        <div className="flex justify-between items-center py-[30px] px-[20px]">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <img src="/images/logo.png" alt="" />
          </div>

          <div onClick={changeToggle}>
            {!toggleNav ? (
              <FaBars className="w-[100px] h-[30px]" />
            ) : (
              <TiTimes className="w-[100px] h-[30px]" />
            )}
          </div>
        </div>

        {toggleNav ? (
          <div className="h-screen fixed  w-[100%] mx-auto flex flex-col items-center justify-center gap-y-[50px] bg-[#a19673]  text-[30px]">
            <a href="#hero">
              <span className="cursor-pointer" onClick={changeToggle}>
                Home
              </span>
            </a>
            <a href="#about">
              <span className="cursor-pointer" onClick={changeToggle}>
                About
              </span>
            </a>
            <a href="#project">
              <span className="cursor-pointer" onClick={changeToggle}>
                Project
              </span>
            </a>{" "}
            <a href="#contact">
              {" "}
              <span className="cursor-pointer" onClick={changeToggle}>
                Contact
              </span>
            </a>
          </div>
        ) : null}
      </div>
    </>
  );
}
