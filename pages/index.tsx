import Layout from "@/components/layout";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import bannerBg from "@/assets/bannerBg.jpeg";
import QQ9 from "@/assets/qq.svg";
import play from "@/assets/play.png";
import pause from "@/assets/pause.png";
import full from "@/assets/full.png";
import mute from "@/assets/mute.png";
import unmute from "@/assets/un-mute.png";
import arrow from "@/assets/arrow-b.svg";
import styeld from "@emotion/styled";
import { fullScreen } from "@/utils/fullScreen";
import qq9 from "@/assets/QQ9.png";
import cardBg from "@/assets/cardBg.png";
import Video from "@/components/controlVideo";
import { motion, useScroll, useTransform } from "framer-motion";
import cards from "@/assets/cards.png";
import { blackQQ9 } from "@/assets/dataUrl";
import ThreePart from "@/components/section/ThreePart";
const OSData = [
  {
    name: "iOS",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAROSURBVHgB7Z3tURsxEIZfZ/I/lHBUAFSQowJIBZgKAhVgKsBUgFMBdGBTAaQCKxVAKlC00XrmxrHN2dqVc7p9ZjRmPD4O9ku63ZUMGIZhGIZhGIZhGIY23vuDMI7DOIeRBxb6VRjTMN58ZA5DFxb8TUPoTUwBmgQBX6wR/IIXGDoE4d75j3nCnvmMwqCQE14ew6hbfHwGQ5aggEffnmMYcvBk2xabgCUJAq39dgxhyEEWvYXwaWVUwZCBrNlvxwiGHEGgL1sI32K/JD7mdFoL3/9noecTuk/d8nMujNPBYOBgyBEs+qmLll8MLeI/PZgdwNDBr0+2PYRRw9ClIfA39oZRl8JNCcm4wzDew+T6vulDHIZWhaIPr9VkgD3AwjjmccSv9B4JwoXxK4xXROHsnDLm+wzDOGvcYxWL+9I9n8OYFbla8jFf8+A3F0mWeeNrWtdvfayCnfvt0hPLTH0p+SIW/NSnM/cblMH3GfvtFNzmnmppa9UQ5GMIuAnjCjq4xs/rYrwU4xCWriGMmgLYaqgyVaEcaI74Jjk/qKQigvAvwssUZQmfIKOaesFlrrgHsPAnKBvyhFOJ5auoB/j45DlB+ZAnDCGAmALYLR9QPmT118H6xxBALAT5WOioUDYOcRJ+hRAiqYggfFpqVigbB4V6QrIHcOgpccXThMLOiUZ6QmIOGKF867/Vyg1JeEDpsX8ShH8JJZI8wMdkVYWyuYUiqSGo9B0mE+20dKoCvqJsfkCZnRXAybaSi90uWP8MyqR4QIWy+YkMpCig9N56safdTaQooPReG4cMmALW45CBEnpDtaiQgRQFOBjJmAesJ8siwxSwniNkwBSwnmOfoavaFLCeRVujKikK2FtDa0bOoEyKArI8Ke6Z2ivvMdi5IMPxkYoxfXggO9FqYd/ZA/gPciifCrG/VYXUSfgZ/eCKO/7ESVXAzpsnOshEQwmpCvi7iwX9QVwJSQrgeaAPq6EmE25EE0GiLaVGbMzqGw4CnXLJT8JcN+1TGFpQhTHnLVMVdkQqFXGP/jJE+/Mq/kGkO5otoK/HwFD3xCF2RMQDOA7O0E+SOuck9wfU6N9knGT9hFg6mifjGfpFct+o6Ca9nnlBsvUTogUZ9oK+pCdOIYBGRYx66Ut/LhDrmhZXAKcnVHvq94yD4P+neVQBzQU1yuMyGNkEQmgW5UsMRfeSwie0T0uhU1LuUAYiq55lVNtSeDd5CXkiB6FVzzJZjizz8atCurqfQG2PMJGrMYusx6F7kPBVT9vNogBemnZNCQvhq1b8srUmshWRErpQwnTIIHwiyxzQhBu6RmF8x+44xMQfbaRb1Z9E8w21FdbYnhniWt+hZHz80oW5b8+Ur2ndiUeFIh9P0p23/P01MpPdA5bh4w7IG1atksi6aRk7Tm0NZOHSzv4vjbd/I4bEp8GeTs/duwIWcFmzeYLua/FhwDAMwzAMwzAMw8jPHyVpAB9xXpANAAAAAElFTkSuQmCC",
    hasQrCode: true,
  },
  {
    name: "Andriod",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOlSURBVHgB7duNVdswEAfwSxconaBmgoYJKjagE5BOAJ2AMAHdADZIN0g3gA3sDUInuOoiOVUT2fGXHMn5/95TeTQ8W/ZJd3YsEwEAAAAAAAAAAAAAAAAAANRg5gc2ct0ymih9bHPdNvZYHygGtlOuNU2UHWCujE7NEwBxTxPjzHLXBcVARv1exzbRdG4AMtL5X+opPVMsKjr4RBOhj+Vl79jyKNKPS3do6ZmiihKXTIqVlMOHRSr5guw5ppxiJSPeM1oWlCjd9zvP8dxQzHgiBZlNXcv3jiWewlvFdnxfcgWZDwuvyCgF7C/Ic0pExSBaUgAzCsCmHClWbur5PZvNrqklO+rmdluZ/fmx4s//6PZuWyFN7/ON2u8zt/sqyXYuKSVSfLllAWNzyXcvudaTf/t41W1lt6069HtBKeLDgpyzU5DZXLou7Anf8HhkXyu7b7c/aRbeKuy/iZH6IJerax73pNeRYNzo9uT5LKOU6QP4yelaUmBBirCLzQiK9+6xmhTyK118CwroAwWkT/6d/vFKaZLasOYUCzCb3L/m6XjmhG7C7niacg4wGwarAWwu51a6KZq2pa4LjzSQQQLAZnrKV88ZnQe5u/42RIHuHQA2d5Yy8ifzCLKhQrfrvkHodRWkT/4tmZF/bidfZGSukjLqofMMsCf/haCgHjOhUwBw8g8U1DEIrQPA5nv9VG+uQiqoQxBa1QCb71YEPpluK275+LVxAOyGz+lSswvJDq3WjLaZAbLhjOAYeejTeN1Qoxpgb8HTfTAxvsbfpB4NwBne5Q6l0TPwJiloSTj5Xagmqah2BiD19Cap6FLPhPeqPzg2A/q+BVLo9kM6oduVbt/t/8WqoGH7K1eO3Ralsf+FhLbfn2ee7fpWHsQg53D9VdTGQDtd1GxfcXxC9rdylXhVCpLvejLq51fNZ61Xq40gZH8lgMr3wUEA2EzDBQVUV5RiNFB/vfXUNwNk+WBG/VUuxuU435wJ3V/VaDs8XIGU9ZgXnu373qSJwRj9rX9jiP0LU/vI2Yk6m2L2xvHKOXx//wvybC8AEiFFwytzaCqPLkP291HXlGX5yy4AnO4SwtS86wB8Kn9xi7AiGMOFm+bcANwSjGX3oso2BSH9jG6XhsoZoAjGtEtDCMDpKPmnDMBXgrFtz/kM+f9ktg9rZAYk8wL1xGzfe0YATkshAKf1RQLwmeBU5lKEN3Se6/tjkNSDKQAAAAAAAAAAAAAAAAAAaOcvQAvXCo/WbpUAAAAASUVORK5CYII=",
    hasQrCode: true,
  },
  {
    name: "Windows",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEFSURBVHgB7dtBSsRAEEDRiniQeP9DqSeJGVBwpcSFv4d5b5MOZFHkQ+9qBgAAAIBHsc1Fx2nWsG/b9n47nCPt5+N1FnDOdOmfPg0pAWICxASICRATICZATICYADEBYgLEBIgJEBMgJkBMgJgAMQFiAsQEiAkQEyAmQEyAmAAxAWICxASICRATICZATICYALHnue5lFvC1HfN5fjuOY4m5gCv+sqS3zwJu187391Xn+vX7uciW5M9sSd4ZAWICxASICRATICZATICYADEBYgLEBIgJEBMgJkBMgJgAMQFiAsQEiAkQEyAmQEyAmAAxAWICxASICRATICZATICYAAAAAADwTz4AVaofklm/waMAAAAASUVORK5CYII",
  },
  {
    name: "Linux",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARcSURBVHgB7Z2NUdswFMf/6XWAdALEBNAJaiZomQAzQekEJBOUTsAIzQawQekEdicgnUDVO8uHa0icSHqyJb/fnc6Q5GxLT+9DlvwECIIgCIIgzJEFJo7WujCHc1PO7HFpiur9rDZla4+/TXky5XGxWGwhHA81uin3pjxrPx5MKU1ZQhjGNlalw1OZcmuKgvAa3fT4J81PZUoJ4QXTIN91fB703LXBNMDSNsRYVHoCQhglCrIVf8DraCY2FCVdmGjpCSMRXQC6iUh+YfzGbxlVCO8Qn3tMp/EJ6hA/xzJHUQVgKnlrDl8wPRSajpEv1MP09FkhMtF8gKlchWmZnl2cGn9QIxJRTJBuBj8KaRDVFEXRgIR6fwtFRY+IALsGJNb7W24RCXYNSLD3t0TRAlYNMI1PIadCmkQJl7lN0BRj/kO50hHmEdhMkL35Z6QNuxni1IAC6cOuwZwCSNn8tHwGM5wCOEP60OMTBUZYBGDt/znyoAAjXBqQS+MTrHURAQyjwAiXABTygdWXcQkgBwfcosAIlwCyWonGGQmJCToMtg4lGnAYyQkgNxSYCC4ALSuRj4JDA0QARxBcADFXFOSA+ICR4fABCvmRVBRUIj/Y5gWCT0kmvApiCJbpyaAakPgqiCFYZvhCm6AS+cKySiKYAKzzZZ9DHRFq/BKBCakBJfIneAcL5oQzdr59gjrjIBqQufPtE9QZhzJBJeZDUGfsLYAZON8+QZ1xCA0oMD+CdThvJzwj59vnQ4h0OF4aYBqf1v8ozJMbBMDXBAW5iUT5hAD4CiDITSQKpdgp4ImzAOzFFeZNAU98NCCH9f++eFsAHwHM2fy0FL4zgE4CsBfNaQW0D16WwFUDCggtBTxwFYDY/xe8TLGrAHJafu7L0g5InThaADMf/e6igCMuGqAg9HG2CC4CGFK3GnmyL6lfPBM0cLE18hXAtz3fKTjiIoCTHZ/X5vHsyhz/ID+2dh74x47vl64DspA+4MIe96lqqrR1WmG3hjtNU7oI4K0LrTvL0nMUAO1JADsBc4km2WufaALos7Gmp4UE4D1TNDE27R82w+4agXARQLdxa/Sck+0lOWlB3V8HZP6/w25/cBQ+AqjRLFKq3/hNsB4yAR7f+tDU+6b3XY0YUHZZfUD+fc2zE8YYqD11pOjnTjcLE6aFbrYjSR32JK6saSt1+ktW2NMYc7+kd410Wcd44zNG4laKGL4iLSjyOUUEYgiABii0XUkqU5gU5X2M9b4z+3vCndFjjTS4zi59va0QPSuqMW2o8TfIFd3solHpaVJiBN4jErpZSXeF6SbzuDL3SMdNzE1AuccB1NgUAZVIZzxQo3nEsF6knHhEN/tDVjpt2DdyYNEAe+Mr5AHtS3wBJjhyReSQtr7PJVd0xBWG1sgLNqfMZYIUmpFvgWYSv7sN+RL7I6Et/q/wtlf+4mX7cnTOe9I7t+qcY+ia6JyvPTcdaSpyI1nABEEQBEEQQvMP82DW+u24kOQAAAAASUVORK5CYII=",
  },
  {
    name: "macOS",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAROSURBVHgB7Z3tURsxEIZfZ/I/lHBUAFSQowJIBZgKAhVgKsBUgFMBdGBTAaQCKxVAKlC00XrmxrHN2dqVc7p9ZjRmPD4O9ku63ZUMGIZhGIZhGIZhGIY23vuDMI7DOIeRBxb6VRjTMN58ZA5DFxb8TUPoTUwBmgQBX6wR/IIXGDoE4d75j3nCnvmMwqCQE14ew6hbfHwGQ5aggEffnmMYcvBk2xabgCUJAq39dgxhyEEWvYXwaWVUwZCBrNlvxwiGHEGgL1sI32K/JD7mdFoL3/9noecTuk/d8nMujNPBYOBgyBEs+qmLll8MLeI/PZgdwNDBr0+2PYRRw9ClIfA39oZRl8JNCcm4wzDew+T6vulDHIZWhaIPr9VkgD3AwjjmccSv9B4JwoXxK4xXROHsnDLm+wzDOGvcYxWL+9I9n8OYFbla8jFf8+A3F0mWeeNrWtdvfayCnfvt0hPLTH0p+SIW/NSnM/cblMH3GfvtFNzmnmppa9UQ5GMIuAnjCjq4xs/rYrwU4xCWriGMmgLYaqgyVaEcaI74Jjk/qKQigvAvwssUZQmfIKOaesFlrrgHsPAnKBvyhFOJ5auoB/j45DlB+ZAnDCGAmALYLR9QPmT118H6xxBALAT5WOioUDYOcRJ+hRAiqYggfFpqVigbB4V6QrIHcOgpccXThMLOiUZ6QmIOGKF867/Vyg1JeEDpsX8ShH8JJZI8wMdkVYWyuYUiqSGo9B0mE+20dKoCvqJsfkCZnRXAybaSi90uWP8MyqR4QIWy+YkMpCig9N56safdTaQooPReG4cMmALW45CBEnpDtaiQgRQFOBjJmAesJ8siwxSwniNkwBSwnmOfoavaFLCeRVujKikK2FtDa0bOoEyKArI8Ke6Z2ivvMdi5IMPxkYoxfXggO9FqYd/ZA/gPciifCrG/VYXUSfgZ/eCKO/7ESVXAzpsnOshEQwmpCvi7iwX9QVwJSQrgeaAPq6EmE25EE0GiLaVGbMzqGw4CnXLJT8JcN+1TGFpQhTHnLVMVdkQqFXGP/jJE+/Mq/kGkO5otoK/HwFD3xCF2RMQDOA7O0E+SOuck9wfU6N9knGT9hFg6mifjGfpFct+o6Ca9nnlBsvUTogUZ9oK+pCdOIYBGRYx66Ut/LhDrmhZXAKcnVHvq94yD4P+neVQBzQU1yuMyGNkEQmgW5UsMRfeSwie0T0uhU1LuUAYiq55lVNtSeDd5CXkiB6FVzzJZjizz8atCurqfQG2PMJGrMYusx6F7kPBVT9vNogBemnZNCQvhq1b8srUmshWRErpQwnTIIHwiyxzQhBu6RmF8x+44xMQfbaRb1Z9E8w21FdbYnhniWt+hZHz80oW5b8+Ur2ndiUeFIh9P0p23/P01MpPdA5bh4w7IG1atksi6aRk7Tm0NZOHSzv4vjbd/I4bEp8GeTs/duwIWcFmzeYLua/FhwDAMwzAMwzAMw8jPHyVpAB9xXpANAAAAAElFTkSuQmCC",
  },
];
const backImg = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[1]">
      <Image
        fill
        style={{
          filter: "blur(150px)",
        }}
        className="absolute z-0 top-0 left-0 w-full h-full"
        src={bannerBg}
        alt=""
      />
      <div className="absolute bg-[#00000040] z-0 top-0 left-0 w-full h-full"></div>
    </div>
  );
};
const centerText = () => {
  return (
    <div
      id="centerText"
      className="w-[33.014vw] transition-all duration-500 ease-linear h-[9.928vw] absolute top-[50%] z-[2] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    >
      <h1 className="absolute text-[2.72vw] font-semibold leading-[5.893305vw] tracking-[2.5143vw] w-[100%] text-center ml-[6%]  text-white left-[50%] translate-x-[-50%] top-[-5.893305vw]">
        全新版本
      </h1>
      <Image
        className="absolute top-0 left-0 w-full h-full blur-[10px]"
        src={QQ9}
        alt=""
      />
      <Image className="absolute top-0 left-0 w-full h-full" src={QQ9} alt="" />
    </div>
  );
};
const Arrow = styeld(Image)`
  & {
    animation: arrow-float 2s ease-in-out infinite;
  }
  @keyframes arrow-float {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    90% {
      opacity: 0.8;
      transform: translateY(1vw);
    }
    100% {
      opacity: 0;
      transform: translateY(1vw);
    }
  }
`;
const VideoCard = styeld.div`
  /*  视频卡片的起始和结束状态,解释用 不删 */
  @keyframes cardflip {
    0% {
      width: 66.49350649vw;
      height: 37.4025974vw;
      margin-left: -33.24675325vw;
      transform: translateZ(0) rotate3d(1, 0, 1, 0deg);
      box-shadow: 2.33766234vw 2.07792208vw 1.03896104vw transparent;
  }
  100% {
      border-radius: 2.07792208vw;
      width: 17.14285714vw;
      height: 35.22077922vw;
      margin-left: -8.57142857vw;
      box-shadow: 2.33766234vw 2.07792208vw 1.2987013vw rgba(0, 0, 0, .11);
      transform: translate3d(0, 28.51948052vw, 0) rotate3d(.93, -.38, .55, 65deg);
    }
  }
  
`;

const Index = () => {
  const [videoState, setVideoState] = useState(false); //视频播放状态
  const [isFull, setIsFull] = useState(false); //全屏状态
  const [isMute, setIsMute] = useState(true); //视频静音状态
  const [video, setVideo] = useState<null | HTMLVideoElement>(null);
  const [hiddenTools, setHiddenTools] = useState(false);
  let QQText: HTMLElement = useRef<HTMLElement>().current as HTMLElement;
  const [showBaseInfo, setShowBaseInfo] = useState(false);
  const introVideoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: introVideoRef,
    offset: ["1.2 end", "start start"],
  });
 
  const rounded = useTransform(scrollYProgress, (value) => value * 25);
  // 各种状态/dom操作
  useTransform(scrollYProgress, (value) => {
    if (value > 0.62) {
      if (!showBaseInfo) {
        setShowBaseInfo(true);
      }
    } else {
      if (showBaseInfo) {
        setShowBaseInfo(false);
      }
    }
  });
  const w = useTransform(scrollYProgress, (value) => {
    const width = 66.49350649 - value * 95;
    if (width > 17.14285714) {
      return `${width}vw`;
    } else {
      return `${17.14285714}vw`;
    }
  });
  const h = useTransform(scrollYProgress, (value) => {
    const height = 37.4025974 - value * 5;
    if (height > 35.22077922) {
      return `${height}vw`;
    } else {
      return `${35.22077922}vw`;
    }
  });

  const calc = (value: number) => {
    // 各个动画的运动曲线函数
    const y = (value - 0.52) * 59.4155844; // translate3d——y
    const x = (value - 0.52) * 3.504; // translate3d——x
    const r = (value - 0.52) * 135.4167; // rotate3d——deg
    const o = (value - 0.52) * 3.5714; // 遮盖的图片的opacity
    const s = (value - 0.52) / 0.048; // 卡片的 shadow
    const m = 0.8 - (value - 0.56) * 2.2727; // 黑白遮罩的mask
    return {
      y,
      x,
      r,
      o,
      s,
      m,
    };
  };
  const shadow = useTransform(scrollYProgress, (value) => {
    if (value > 0.52) {
      return `20px 18px 25px ${calc(value).s}px #0002`;
    }
    return `none`;
  });
  const mask: any = useTransform(scrollYProgress, (value) => {
    if (value > 0.56) {
      return `radial-gradient(ellipse at top,rgb(0, 0, 0,${
        calc(value).m
      }),rgb(0, 0, 0,${calc(value).m}))`;
    }
    return `radial-gradient(ellipse at top,rgb(0, 0, 0,0.8),rgb(0, 0, 0,0.7)`;
  });
  const o: any = useTransform(scrollYProgress, (value) => {
    if (value > 0.52) {
      if (!hiddenTools) {
        setHiddenTools(true);
      }
      return `${calc(value).o}`;
    }
    if (hiddenTools) {
      setHiddenTools(false);
    }
    return "0";
  });
  const translate: any = useTransform(scrollYProgress, (value) => {
    if (value > 0.52) {
      return `translate3d(${calc(value).x}vw, ${
        calc(value).y
      }vw, 0) rotate3d(0.93, -0.38, 0.55, ${calc(value).r}deg)`;
    }
    return `none`;
  });
  const handleClickMute = () => {
    setIsMute((pre) => !pre);
  };
  const handleClickFull = () => {
    setIsFull(true);
    if (video) {
      fullScreen(video);
      video.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) {
          setIsFull(false);
        }
      });
    }
  };
  const palyVideo = () => {
    if (videoState) {
      video?.pause();
    } else {
      video?.play();
    }
  };
  const handleClickVideo = () => {
    palyVideo();
    setVideoState((pre) => !pre);
  };
  const handleTimeUpdate = () => {
    if (!QQText?.style) {
      QQText = document.getElementById("centerText") as HTMLElement;
    }
    if (video && video.currentTime > 35.8) {
      // 隐藏centerText
      QQText.style.opacity = "0";
    } else {
      QQText.style.opacity = "1";
    }
  };
  useEffect(() => {
    const v = document.getElementById("back-video") as HTMLVideoElement;
    setVideo(v);
    if (v) {
      v.pause();
      v.addEventListener("timeupdate", handleTimeUpdate);
    }
    return () => {
      video?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [video]);
  return (
    <Layout title="QQ-轻松做自己">
      <section className="w-full h-screen flex justify-center items-center">
        {backImg()}
        <div className="absolute z-[2] top-0 left-0 w-full h-full object-cover">
          <video
            muted={isMute}
            id="back-video"
            className="w-full h-full object-cover"
            playsInline={true}
            webkit-playsinline={"true"}
            x5-video-player-type="h5-page"
            preload="metadata"
            x-webkit-airplay="allow"
            data-used="1"
            data-idx="0"
            autoPlay
            data-fullscreen_handler="true"
          >
            <source src="https://static-res.qq.com/web/im.qq.com/qq9_4k.mp4" />
          </video>
          <div className="absolute bg-[#00000040] z-0 top-0 left-0 w-full h-full"></div>
        </div>
        {/* 内容主体 main content */}
        <div className="absolute top-0 left-0 w-full min-h-screen z-[2]">
          {/* 栏目 tool menu */}
          {!isFull && (
            <div className="absolute z-[3] top-[80px] right-[56px] flex">
              <div
                onClick={handleClickVideo}
                className="w-[32px] h-[32px] cursor-pointer flex justify-center items-center mr-[16px] bg-[rgba(0,0,0,.2)] hover:opacity-35 rounded-full"
              >
                <Image
                  src={!videoState ? play : pause}
                  className="w-[16px]"
                  alt="play video"
                ></Image>
              </div>
              <div
                onClick={handleClickFull}
                className="w-[32px] h-[32px] cursor-pointer flex justify-center items-center mr-[16px] bg-[rgba(0,0,0,.2)] hover:opacity-35 rounded-full"
              >
                <Image src={full} className="w-[16px]" alt="play video"></Image>
              </div>
              <div
                onClick={handleClickMute}
                className="w-[32px] h-[32px] cursor-pointer flex justify-center items-center bg-[rgba(0,0,0,.2)] hover:opacity-20 rounded-full"
              >
                <Image
                  src={isMute ? mute : unmute}
                  className="w-[16px]"
                  alt="play video"
                ></Image>
              </div>
            </div>
          )}
          {centerText()}
          {/* 底部下载栏 download menu*/}
          <div className="absolute z-[3] bottom-[3.4vw] h-[11.22vw] flex items-end justify-center left-0 w-full">
            {OSData.map((item, index) => {
              return (
                <div
                  key={item.name}
                  className="flex relative hover:opacity-80 group cursor-pointer items-center justify-center pb-[11.458px] mx-[1.105vw] border-[.085vw] border-solid border-transparent w-[9.52vw] "
                >
                  {/* eslint-disable-next-line  @next/next/no-img-element */}
                  <img className="w-[1.7vw]" src={item.icon} alt={item.name} />
                  <span className="text-[1.19vw] leading-[1.7ve]  text-white ml-[0.51vw]">
                    {item.name}
                  </span>
                  <div className="absolute group-last:hidden top-[50%] translate-y-[-72%] translate-x-[1.1vw] right-0 w-[.085vw] h-[1.53vw] bg-white opacity-10"></div>
                </div>
              );
            })}
          </div>
          {/* animate  */}
          <Arrow
            className="absolute bottom-5 z-[3] left-[50%] translate-x-[-50%] w-[18.5px]"
            src={arrow}
            alt=""
          />
        </div>
      </section>
      <div className="main-mod w-full ">
        <section
          style={{ perspective: "8000px" }}
          className="min-h-[60vh] flex items-center flex-col w-full"
        >
          <div className="base-info flex flex-col mt-[3.11688312vw] pt-[1.81818182vw]">
            <div
              data-aos="fade-up"
              className="mb-[0.3896104vw] h-[2.85714286vw] flex justify-center"
            >
              <Image className="h-full w-auto" src={qq9} alt="" />
            </div>
            <h1
              data-aos="fade-up"
              className="text-black font-bold text-[3.53246753vw] leading-[3.53246753vw] mt-[0.57142857vw]"
            >
              轻松做自己
            </h1>
          </div>
          <motion.div
            style={{
              // scaleX:scrollYProgress,
              borderRadius: rounded,
              width: w,
              height: h,
              transformStyle: "preserve-3d",
              transform: translate?translate:'',
              boxShadow: shadow?shadow:'',
            }}
            ref={introVideoRef}
            className="w-[66.49350649vw] z-[3] transition-all duration-100 ease-linear shadow-sm overflow-hidden h-[37.4025974vw] relative mt-[2.42vw]"
          >
            <Video
              hiddenTools={hiddenTools}
              className="w-full h-full   object-cover"
              src="https://static-res.qq.com/web/im.qq.com/qq9-introduction.mp4"
            />
            <motion.div
              style={{
                opacity: o,
              }}
              className="absolute top-0 left-0 w-full h-full opacity-0"
            >
              <Image className="h-full object-fill " src={cardBg} alt="" />
            </motion.div>
          </motion.div>
          <div className="w-full mt-[2vw] relative h-[44.72727273vw] bg-no-repeat ">
            {/* 底部卡片图片 */}
            <Image className="w-full h-full opacity-0" src={cards} alt="" />
            <Image
              className="w-full z-[1] h-full absolute top-0 left-0"
              src={cards}
              alt=""
            />
            {/* 模拟黑白阴影遮罩，圆形渐变 */}
            <motion.div
              style={{
                mask: mask,
                filter: "grayscale(100%)",
              }}
              className="z-[1] absolute top-0 left-0"
            >
              <Image className="w-full h-full" src={cards} alt="" />
            </motion.div>
            {/* 背景 */}
            {/*  eslint-disable-next-line  */}
            <img
              className="absolute z-0 top-0 blur-lg left-0 w-full h-full"
              src="https://qq-web.cdn-go.cn/im.qq.com_new/6c980544/img/scene-bg-x.6a1a9834.png"
              alt=""
            />

            {showBaseInfo && (
              <div className="absolute top-[-20vw] left-0 w-full flex items-center flex-col">
                {/*  eslint-disable-next-line  */}
                <img
                  data-aos="fade-up"
                  className="w-[4.57142857vw] h-[1.55844156vw] mb-[1.03896104vw]"
                  src={blackQQ9}
                  alt=""
                />
                <h1
                  data-aos="fade-up"
                  className="text-black font-semibold text-[3.53246753vw] leading-[3.53246753vw]"
                >
                  <span>界面</span>
                  <span className="text-[#09f] ">轻盈焕新</span>
                </h1>
                <h1
                  data-aos="fade-up"
                  className="text-black font-semibold text-[3.53246753vw] leading-[3.53246753vw] mt-[0.77922078vw]"
                >
                  简洁纯粹 氛围轻松
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-[1.24675325vw] text-[#a6a6a6] mt-[.93506494vw]"
                >
                  操作灵动舒适，视觉简单纯粹
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
     <div className="w-full min-h-[200vh]">
      <ThreePart className=""/>
     </div>
    </Layout>
  );
};

export default Index;
