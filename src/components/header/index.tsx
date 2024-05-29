import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@emotion/styled";
import  blackLogo from "@/assets/blackLogo.png";

const MyHeader = styled(motion.header)`
  & {
    --b: transparent;
    --t: white;
    --h: 64px;
    --cb: hsla(0, 0%, 100%, 0.5);
    --ct: white;
    --logo-op: 1;
    --border: 1px solid #fff1;
  }
`;

const Header = () => {
  const { scrollY } = useScroll();
  const [innerHeight, setInnerHeight] = useState(0);
  let ref = useRef<any>(null);
  const setCssVariable = (property:string,value:string) => {
    ref.current?.style.setProperty(property,value)
  }
  const handleChangeHeaderStyle = (top: boolean) => {
    if (!top) {
      setCssVariable("--b", "hsla(0, 0%, 100%, .8)");
      setCssVariable("--t", "#333");
      setCssVariable("--h", "50px");
      setCssVariable("--cb", "transparent");
      setCssVariable("--ct", "#09f");
      setCssVariable("--logo-op", "0");
      setCssVariable("--border", "1px solid rgba(0, 0, 0, .08)");
    }else {
      setCssVariable("--b", "transparent");
      setCssVariable("--t", "white");
      setCssVariable("--h", "64px");
      setCssVariable("--cb", "hsla(0, 0%, 100%, .5)");
      setCssVariable("--ct", "white");
      setCssVariable("--logo-op", "1");
      setCssVariable("--border", "1px solid #fff1");
    }
  };
  const isFixed = useTransform(scrollY, (value) => {
    if (ref) {
      if (value > innerHeight * 0.6) {
        handleChangeHeaderStyle(false)
       
        return "fixed";
      } else {
        handleChangeHeaderStyle(true)
        return "absolute";
      }
    }
  });

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);
  return (
    <MyHeader
      ref={ref}
      style={{
        position: isFixed,
        border:'var(--border)'
      }}
      className="absolute z-[3] top-0 bg-[var(--b)] left-0 w-full h-[var(--h)]  justify-between flex items-center  px-[56px]"
    >
      <div className="topside h-full flex items-center ">
        <Link href={"/"} className="relative">
          {/* qq logo */}
          <Image
            className="h-[24px] my-auto w-[45px]"
            src={blackLogo}
            alt="qq logo"
          />
          <Image
            className="absolute opacity-[var(--logo-op)] bottom-0 left-0 w-full h-[24px]"
            src={logo}
            alt="qq logo"
          />
        </Link>
        <ul className="ml-[47px] flex text-[var(--t)] text-[14px]">
          <li className="px-[13px] bg-[var(--cb)] text-[var(--ct)] h-[30px] flex justify-center cursor-pointer items-center rounded-full hover:text-[#09f]">
            首页
          </li>
          <li className="ml-[47px] px-[13px] h-[30px] flex justify-center cursor-pointer items-center rounded-full hover:text-[#09f]">
            下载
          </li>
        </ul>
      </div>
      <div className="topTool flex items-center ">
        <ul className="flex text-[var(--t)] text-[14px]">
          <li className="hover:text-[#09f] cursor-pointer">QQ会员</li>
          <li className="hover:text-[#09f] cursor-pointer ml-[60px]">QQ安全</li>
          <li className="hover:text-[#09f] cursor-pointer ml-[60px]">登录</li>
        </ul>
      </div>
    </MyHeader>
  );
};

export default Header;
