import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
interface IProps {
  back: string | StaticImageData;
  logo: string | StaticImageData;
  className?: string;
  direction?: "left" | "right";
  style?:  React.CSSProperties
}
const BackCard = (props: IProps) => {
  const { back, logo, className, direction,style } = props;
  return (
    <motion.div style={style} className={className + "" || "relative"}>
      <Image
        className="w-[11.37662338vw] h-[6.44155844vw]"
        src={back}
        alt="back"
      />
      {direction === "left" ? (
        <Image
          className="absolute top-[-1.55844156vw] left-[-1.55844156vw] w-[3.16883117vw] h-[3.16883117vw]"
          src={logo}
          alt="logo"
        />
      ) : (
        <Image
          className="absolute top-[-1.55844156vw] right-[-1.55844156vw] w-[3.16883117vw] h-[3.16883117vw]"
          src={logo}
          alt="logo"
        />
      )}
    </motion.div>
  );
};

export default BackCard;
