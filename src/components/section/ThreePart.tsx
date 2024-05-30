import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styeld from "@emotion/styled";
import { motion, useScroll, useTransform } from "framer-motion";
import wzry from "@/assets/wzry.png";
import wzry1 from "@/assets/wzry1.png";
import wzryBanner from "@/assets/wzry-banner.png";
import chijiBanner from "@/assets/chiji-banner.png";
import sgBanner from "@/assets/sg-banner.png";
import xfjjBanner from "@/assets/xfjj-banner.png";
import zjtdBanner from "@/assets/zjtd-banner.png";
import hslmBanner from "@/assets/hslm-banner.png";
import ysBanner from "@/assets/ys-banner.png";
import ymzxBanner from "@/assets/ymzx-banner.png";
import noairBanner from "@/assets/noair-banner.png";
import wzryLogo from "@/assets/wzry-logo.png";
import chijiLogo from "@/assets/chiji-logo.png";
import sgLogo from "@/assets/sg-logo.png";
import xfjjLogo from "@/assets/xfjj-logo.png";
import zjtdLogo from "@/assets/zjtd-logo.png";
import ymzxLogo from "@/assets/ymzx-logo.png";
import ysLogo from "@/assets/ys-logo.png";
import hslmLogo from "@/assets/hslm-logo.png";
import noairLogo from "@/assets/noair-logo.png";
import BackCard from "../backCard";
const qqpb =
  "data:image/png;base64,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";

const cardLeftX = -99.22077922;
const cardRightX = 98.7012987;
const cardData = {
  chiji: -19.22077922,
  wz: -41.61038961,
  sg: 2.5974026,
  xfjj: 18.7012987,
  zjtd: 40.51948052,
  ymzx: -39.22077922,
  ys: -18.18181818,
  hslm: 4.41558442,
  noair: 24.93506494,
};

interface IProps {
    className?: string
    [property: string]: any;
}
const Card = (props: IProps) => {
  return (
    <div
      style={{ perspective: "1800px" }}
      className={props.className ? props.className : "flex opacity-0"}
    >
      <motion.div
        style={{
          transform: props.leftCardTransform,
          transformStyle: "preserve-3d",
        }}
        className="w-[22.5974026vw] h-[41.35064935vw]"
      >
        <Image className="w-full h-full" src={wzry} alt="" />
      </motion.div>
      <motion.div
        style={{
          transform: props.rigthCardTransform,
          transformStyle: "preserve-3d",
        }}
        className="w-[22.5974026vw] z-[1] h-[41.35064935vw] ml-[-6.75324675vw] mt-[3.11688312vw]"
      >
        <Image className="w-full h-full" src={wzry1} alt="" />
      </motion.div>
    </div>
  );
};
const ThreePart = (props:IProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 end", "start start"],
  });
  const calc = (value: number) => {
    const s = 1 + value * 0.12;
    const x = 5.19480519 - 5.19480519 * value;
    const cardScale = 0.8 + value;
    const leftX = cardLeftX * value;
    const rightX = cardRightX * value;
    const chijiY = cardData.chiji * value;
    const wzY = cardData.wz * value;
    const sgY = cardData.sg * value;
    const xfjjY = cardData.xfjj * value;
    const zjtdY = cardData.zjtd * value;
    const ymzxY = cardData.ymzx * value;
    const ysY = cardData.ys * value;
    const hslmY = cardData.hslm * value;
    const noairY = cardData.noair * value;
    return {
      s,
      x,
      cardScale,
      leftX,
      rightX,
      chijiY,
      wzY,
      sgY,
      xfjjY,
      zjtdY,
      ymzxY,
      ysY,
      hslmY,
      noairY,
    };
  };
  const o: any = useTransform(scrollYProgress, (value) => {
    if (value > 0.08) {
      return `1`;
    } else {
      return "0";
    }
  });
  /* 左侧 */
  const chijiT: any = useTransform(scrollYProgress, (value) => {
    return `translate3d(${calc(value).leftX * 0.75}vw,${
      calc(value).chijiY
    }vw,0) scale(${calc(value).cardScale})`;
  });
  const wzT: any = useTransform(scrollYProgress, (value) => {
    return `translate3d(${calc(value).leftX}vw,${calc(value).wzY}vw,0) scale(${
      calc(value).cardScale
    })`;
  });
  const sgT: any = useTransform(scrollYProgress, (value) => {
    return `translate3d(${calc(value).leftX * 0.5}vw,${
      calc(value).sgY
    }vw,0) scale(${calc(value).cardScale})`;
  });
  const xfjjT: any = useTransform(scrollYProgress, (value) => {
    return `translate3d(${calc(value).leftX * 0.9}vw,${
      calc(value).xfjjY
    }vw,0) scale(${calc(value).cardScale})`;
  });
  const zjtdT: any = useTransform(scrollYProgress, (value) => {
    return `translate3d(${calc(value).leftX * 0.65}vw,${
      calc(value).zjtdY
    }vw,0) scale(${calc(value).cardScale})`;
  });
  /* 右侧 */
  const ymzxT: any = useTransform(scrollYProgress, (value) => {
    return `translate3d(${calc(value).rightX * 0.9}vw,${
      calc(value).ymzxY
    }vw,0) scale(${calc(value).cardScale})`;
  });
  const ysT: any = useTransform(scrollYProgress, (value) => {
    return `translate3d(${calc(value).rightX * 0.65}vw,${
      calc(value).zjtdY
    }vw,0) scale(${calc(value).cardScale})`;
  });
  const hslmT: any = useTransform(scrollYProgress, (value) => {
    return `translate3d(${calc(value).rightX * 0.8}vw,${
      calc(value).hslmY
    }vw,0) scale(${calc(value).cardScale})`;
  });
  const noairT: any = useTransform(scrollYProgress, (value) => {
    return `translate3d(${calc(value).rightX * 0.58}vw,${
      calc(value).noairY
    }vw,0) scale(${calc(value).cardScale})`;
  });
  const leftCardTransform: any = useTransform(scrollYProgress, (value) => {
    console.log(value);
    return `scale(${calc(value).s}) translate3d(${calc(value).x}vw,0,0) `;
  });
  const rigthCardTransform: any = useTransform(scrollYProgress, (value) => {
    return `scale(${calc(value).s}) translate3d(-${calc(value).x}vw,0,0)`;
  });
  const filyCardData = [
    {
      name: "刺激战场",
      transform: chijiT,
      back: chijiBanner,
      logo: chijiLogo,
      direction:'left',
    },
    {
      name: "王者荣耀",
      transform: wzT,
      back: wzryBanner,
      logo: wzryLogo,
      direction:'left',
    },
    {
      name: "帅哥（不知道什么游戏）",
      transform: sgT,
      back: sgBanner,
      logo: sgLogo,
      direction:'left',
    },
    {
      name: "先锋",
      transform: xfjjT,
      back: xfjjBanner,
      logo: xfjjLogo,
      direction:'left',
    },
    {
      name: "像字节，不知道是什么",
      transform: zjtdT,
      back: zjtdBanner,
      logo: zjtdLogo,
      direction:'left',
    },
    {
      name: "圆梦之星",
      transform: ymzxT,
      back: ymzxBanner,
      logo: ymzxLogo,
      direction:'right',
    },
    {
      name: "原！",
      transform: ysT,
      back: ysBanner,
      logo: ysLogo,
      direction:'right',
    },
    {
      name: "画师联盟",
      transform: hslmT,
      back: hslmBanner,
      logo: hslmLogo,
      direction:'right',
    },
    {
      name: "no air",
      transform: noairT,
      back: noairBanner,
      logo: noairLogo,
      direction:'right',
    },
  ];
  return (
    <motion.section className={`${props.className} w-full overflow-x-hidden overflow-y-hidden min-h-[150vh] bg-cover bg-[url('https://qq-web.cdn-go.cn/im.qq.com_new/6c980544/img/scene-bg-x.6a1a9834.png')] bg-blue-50 flex items-center flex-col`}>
      {/* base info */}
      <div className="base-info w-full flex flex-col items-center">
        {/* eslint-disable-next-line  */}
        <div data-aos="fade-up" className="flex items-center mb-[1.03896104vw]">
          <img className="w-[6.7012987vw] h-[1.66233766vw]" src={qqpb} alt="" />
          <div className="version leading-[1.09090909vw] py-[0.07428571vw] rounded-[0.20779221vw] px-[0.29719481vw] border-[.1038961vw] border-solid border-[#009fff] text-[#09f] text-[1.03896104vw] flex justify-center items-center ml-[.20779221vw]">
            内测中
          </div>
        </div>
        <h1
          data-aos="fade-up"
          className="text-[3.53246753vw] font-semibold leading-[3.53246753vw]"
        >
          <span className="">和</span>
          <span className="text-[#09f]">兴趣</span>
          <span className="">同好 一步到位</span>
        </h1>
        <p
          data-aos="fade-up"
          className="mt-[.93506494vw] text-[1.24675325vw] text-[#a6a6a6] leading-[1.75em]"
        >
          多元游戏、知识分享、美食生活，来频道等你挖掘
        </p>
      </div>
      {/* 农 */}
      <div
        ref={ref}
        className="w-ful relative flex justify-center mt-[1.2987013vw] z-[10]"
      >
        <Card
          leftCardTransform={leftCardTransform}
          rigthCardTransform={rigthCardTransform}
        />
        <Card
          className="flex z-10 absolute top-0 left-0 w-full h-full justify-center"
          leftCardTransform={leftCardTransform}
          rigthCardTransform={rigthCardTransform}
        />
        {filyCardData.map((item) => {
          return (
            <div key={item.name}>
              <BackCard
                style={{
                  transform: item.transform,
                  opacity: o,
                  top:item.direction === 'left' ? '35%': '45%'
                }}
                direction="left"
                className="absolute transition-opacity duration-1000 ease-linear  left-[50%]"
                back={item.back}
                logo={item.logo}
              />
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default ThreePart;
