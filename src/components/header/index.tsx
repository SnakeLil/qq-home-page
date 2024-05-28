import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const currentBg = "hsla(0, 0%, 100%, .5)";

const Header = () => {
  return (
    <header className="absolute z-[3] top-0 left-0 w-full h-[64px] border-b-[0.6px] border-solid justify-between border-[#fff2] flex items-center  px-[56px]">
      <div className="topside h-full flex items-center ">
        <Link href={"/"}>
          {/* qq logo */}
          <Image
            className="h-[22px] w-[52px]"
            src={logo}
            alt="qq logo"
          />
        </Link>
        <ul className="ml-[47px] flex text-white text-[14px]">
          <li
            style={{
              background: `${currentBg}`,
            }}
            className="px-[13px] h-[30px] flex justify-center cursor-pointer items-center rounded-full hover:text-[#09f]"
          >
            首页
          </li>
          <li className="ml-[47px] px-[13px] h-[30px] flex justify-center cursor-pointer items-center rounded-full hover:text-[#09f]">
            下载
          </li>
        </ul>
      </div>
      <div className="topTool flex items-center ">
        <ul className="flex text-white text-[14px]">
          <li className="hover:text-[#09f] cursor-pointer">QQ会员</li>
          <li className="hover:text-[#09f] cursor-pointer ml-[60px]">QQ安全</li>
          <li className="hover:text-[#09f] cursor-pointer ml-[60px]">登录</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
