import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styeld from "@emotion/styled";
import { motion, useScroll, useTransform } from "framer-motion";
import ThreePart from "../section/ThreePart";

interface IProps {
    className?: string
    [property: string]: any;
}

const ParallaxContainer = (props:IProps) => {
    const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const p = useTransform(scrollYProgress,(value)=>{
    console.log(value)
    if(value > 0.6) {
        // 开启视差滚动
        return 'sticky'
    }
    return 'relative'
  })
  return (
    <div className="w-full min-h-[150vh] overflow-y-scroll">
      <ThreePart style={{
        position: p?p: 'relative',
        top: '10px',
      }} ref={ref} className=""/>
     </div>
  )
}

export default ParallaxContainer