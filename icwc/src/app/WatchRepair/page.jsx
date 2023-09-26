"use client";
import { useState, useEffect } from "react";
import Footer from "../components/Navigation/Footer";
import Header from "../components/Navigation/Header";
import FixingWatch from "../../../public/Images/FixingWatchFar.png";
import PearlIcon from "../../../public/LogoImages/Pearl_Icon.png";
import StopWatch from "../../../public/Images/StopWatch.png";

import Image from "next/image";

import { useForm } from "react-hook-form";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import ReactPlayer from "react-player";

export default function WatchRepair() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasWindow, setHasWindow] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resize = () => {
      if (typeof window !== "undefined") {
        setHasWindow(true);
        if (window.innerHeight > window.innerWidth) {
          setHeight(window.innerHeight);
          //setWidth(window.innerHeight * 1.78);
          setWidth(window.innerHeight);
        } else {
          setWidth(window.innerWidth);
          setHeight(window.innerHeight);
        }
      }
    };
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <Header />
      <TopSectionHero />
      <BottomSectionVideo />
      <Footer />
    </>
  );
}

export function TopSectionHero() {
  return (
    <div className="w-full py-[5%] bg-white gap-4 flex flex-col lg:flex-row justify-center items-center px-[5%]">
      <div className="h-full p-4">
        <h1 className="text-[48px] font-bold text-[#182835] leading-[60px] mb-4">
          Transforming Timepieces with Expert Restoration
        </h1>
        <h3 className="text-[16px] font-medium text-gray-800">
          Experience the magic of watch restoration and witness the stunning
          before and after transformations.
        </h3>
      </div>
      <div className="order-first lg:order-last w-full h-[200px] flex justify-center items-center lg:h-full bg-orange-200 overflow-hidden">
        <Image
          src={StopWatch}
          className="aspect-square object-cover"
          alt="IronCityWatchCompany Stopwatch"
        />
      </div>
    </div>
  );
}

export function BottomSectionVideo() {
  return (
    <div className="w-full py-[5%] bg-white gap-4 flex flex-col justify-center items-center px-[5%]">
      <div className="w-full flex justify-center items-center aspect-video bg-red-200">
        <ReactPlayer
          url="https://vimeo.com/866586842/662b3dcb3c"
          playing={true}
          loop={true}
          controls={false}
          muted={true}
          onPlay={() => setIsPlaying(true)}
          playsinline={true}
          width={"100%"}
          height={"100%"}
          className="w-full h-full"
          // style={{
          //   position: "absolute",
          //   top: "40px",
          //   left: 0,
          //   objectPosition: "center",
          // }}
        />
      </div>

      <div className="h-full w-full flex flex-col lg:flex-row gap-0 ">
        <div className="w-full flex flex-col gap-0 justif-start ">
          <p className="text-gray-600 font-['Roboto'] -mb-4">2023</p>
          <h1 className="text-[32px] font-bold text-[#182835] leading-[60px] mb-1">
            Transformations
          </h1>
          <h3 className="text-[14px] text-gray-800">
            Restorations done with class by expert handelers
          </h3>
        </div>
        <div className="w-full w-max-[700px] py-12">
          <h2 className="text-gray-600">
            A well-executed watch restoration breathes new life into vintage
            timepieces, restoring their beauty and functionality, while a COA
            ensures their continued accuracy. In this captivating video, we
            delve into the mesmerizing world of watch restoration and COAs - a
            journey that bridges the past with the present.
          </h2>
        </div>
      </div>
    </div>
  );
}

export function PreviousTopSectionVideo() {
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center z-[3]">
        <div className="h-full aspect-video flex flex-col justify-center items-center">
          <h1 className="text-[#182835] lg:text-white font-['Roboto] text-3xl lg:text-6xl font-extrabold mb-2">
            Watch Repairs
          </h1>
          <p className="text-[#182835] lg:text-gray-200  font-['Roboto] font-bold lg:text-xl text-center max-w-[75vw] lg:max-w-[400px] ">
            Experience the magic of watch restoration and witness the stunning
            before and after transformations.
          </p>
          <Button className="hover:cursor-wait shadown-inner bg-[#182835] lg:bg-white text-white lg:text-black mt-20">
            COMING SOON
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex absolute top-0 left-0 h-full w-full flex justify-center items-center z-[2]">
        <div className="h-full w-full lg:w-auto lg:aspect-video flex flex-col justify-center items-center bg-black opacity-50"></div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center z-[1]">
        {!isPlaying ? (
          <>
            <Image
              src={FixingWatch}
              className="object-cover h-full w-full"
              alt="working image"
            />
          </>
        ) : (
          <div className="relative h-full w-full flex lg:aspect-video justify-center items-center opacity-30 lg:opacity-100">
            {hasWindow &&
              (window.innerWidth > window.innerHeight ? (
                <ReactPlayer
                  url="https://vimeo.com/866586842/662b3dcb3c"
                  playing={true}
                  loop={true}
                  controls={false}
                  muted={true}
                  onPlay={() => setIsPlaying(true)}
                  playsinline={true}
                  width={"100%"}
                  height={"100%"}
                  className="h-full w-full"
                  // style={{
                  //   position: "absolute",
                  //   top: "40px",
                  //   left: 0,
                  //   objectPosition: "center",
                  // }}
                />
              ) : (
                <ReactPlayer
                  url="https://vimeo.com/866586842/662b3dcb3c"
                  playing={true}
                  loop={true}
                  controls={false}
                  muted={true}
                  onPlay={() => setIsPlaying(true)}
                  playsinline={true}
                  // width={"200%"}
                  // height={"100%"}
                  // className="h-full"
                  style={{
                    position: "absolute",
                    top: "15%",
                    objectPosition: "center",
                    objectFit: "cover",
                  }}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
}
