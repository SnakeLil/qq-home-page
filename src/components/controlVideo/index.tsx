import { fullScreen } from "@/utils/fullScreen";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import play from "@/assets/play.png";
import pause from "@/assets/pause.png";
import full from "@/assets/full.png";
import mute from "@/assets/mute.png";
import unmute from "@/assets/un-mute.png";

interface IProps {
  children?: JSX.Element | any;
  src?: string;
  [property: string]: any;
  className?: string;
  hiddenTools?: boolean;
}

const Video = (props: IProps) => {
  const { src, className, hiddenTools } = props;
  const [videoState, setVideoState] = useState(true); //视频播放状态
  const [isFull, setIsFull] = useState(false); //全屏状态
  const [isMute, setIsMute] = useState(true); //视频静音状态
  const [video, setVideo] = useState<null | HTMLVideoElement>(null);
  const ref = useRef<any | HTMLVideoElement>();
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
  useEffect(() => {
    const v = ref.current;
    setVideo(v);
  }, [video, ref]);
  return (
    <div className="relative h-full">
      {/* 栏目 tool menu */}
      <video
        ref={ref}
        muted={isMute}
        id="intro-video"
        className={className ? className : ""}
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
        <source src={src} />
      </video>
      {!isFull && !hiddenTools && (
        <div className="absolute z-[3] top-[4.166%] right-[2.685%] flex">
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
    </div>
  );
};

export default Video;
