import { useEffect, useState, lazy, suspense } from "react";
import Image from "next/image";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

import Main from "../../../../public/Images/Main.webp";
import PearlIcon from "../../../../public/LogoImages/Pearl_Icon.png";
import PearlText from "../../../../public/LogoImages/Pearl_Text.png";

// import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const ReactPlayer = lazy(() => import("react-player"));

export default function MainHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoIdOrSignedToken = "aba71fa4392fdda8026474776b1f0a86";

  // const videoElement = document.getElementById("ReactPlayer");
  // videoElement.addEventListener("suspend", () => {
  //   // suspend invoked
  //   // show play button
  // });

  // videoElement.addEventListener("play", () => {
  //   // video is played
  //   // remove play button UI
  // });

  return (
    <>
      <section className="relative py-[5%] lg:px-[10%] w-full md:h-auto h-[100vh] lg:aspect-video bg-white overflow-hidden flex flex-col md:flex-row justify-center items-center lg:items-center">
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 aspect-video w-full md:h-full h-[100vh] bg-[#182835] opacity-100 z-[3] flex flex-col justify-center items-center"
          >
            <Image
              src={PearlIcon}
              alt="ICWC Pearl Icon"
              className="w-48 h-auto z-[10]"
            />
            <h1 className="text-white text-center max-w-[700px] text-[16px] mt-2 lg:text-[48px] font-black leading-[50px] lg:mb-8 font-['Roboto'] ">
              Iron City Watch Co.
            </h1>
          </motion.div>
        )}
        <div className="absolute top-0 aspect-video w-full bg-black opacity-0 z-[3]"></div>
        <div className="hidden md:flex absolute top-0 aspect-video w-full bg-white z-[2] lg:-mt-[40px]">
          {/* <Image src={Main} className="object-cover h-full w-full" /> */}
          {/* <Stream
            controls
            src={videoIdOrSignedToken}
            height="400"
            width="400"
            autoplay
            onPlay={() => setIsPlaying(true)}
          /> */}

          <ReactPlayer
            url="https://customer-jcu3t54p5nuo4woo.cloudflarestream.com/aba71fa4392fdda8026474776b1f0a86/manifest/video.m3u8"
            playing={true}
            loop={true}
            controls={false}
            muted={true}
            onPlay={() => setIsPlaying(true)}
            playsinline={true}
            width={"100%"}
            height={"100%"}
            className="object-fit h-full "
            id="ReactPlayer"
            // style={{
            //   position: "absolute",
            //   top: "40px",
            //   left: 0,
            //   objectPosition: "center",
            // }}
          />
        </div>
        <div className="flex md:hidden absolute top-0 w-full z-[2] bg-black bg-opacity-40">
          {/* <Image src={Main} className="object-cover h-full w-full" /> */}

          {/* <Stream
            controls
            src={videoIdOrSignedToken}
            height="400px"
            width="400px"
            autoplay={true}
            poster
            loop={true}
            onPlay={() => setIsPlaying(true)}
          /> */}
          <ReactPlayer
            url="https://customer-jcu3t54p5nuo4woo.cloudflarestream.com/0b88c495cf2bb65e96f5b39d9ac70e53/manifest/video.m3u8"
            playing={true}
            loop={true}
            controls={false}
            muted={true}
            onPlay={() => {
              setIsPlaying(true);
              console.log("playing");
            }}
            playsinline={true}
            width={"100%"}
            height={"100%"}
            className="object-cover "
            id="ReactPlayer"
            // style={{
            //   position: "absolute",
            //   top: "40px",
            //   left: 0,
            //   objectPosition: "center",
            // }}
          />
        </div>
        <div className="pb-[30%] lg:pb-0 lg:pl-[5%] flex flex-col justify-center items-left lg:items-left w-full z-[5]">
          {/* <div className="w-full hidden lg:flex flex-col justify-center items-left ">
            <Image src={PearlIcon} className="h-32 w-28 mb-12 lg:mb-4 " />
            <Image src={PearlText} className=" w-[300px] lg:w-[400px] " />
          </div>
          <div className="lg:hidden w-full flex flex-col justify-center items-center lg:items-left ">
            <Image src={PearlIcon} className="h-24 w-24 mb-12 lg:mb-4 " />
            <Image src={PearlText} className=" w-[300px] lg:w-[400px] " />
          </div> */}

          {isPlaying ? (
            <>
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                className="justify-center items-center lg:items-start flex flex-col mb-2 lg:mb-0"
              >
                <Image
                  src={PearlIcon}
                  alt="ICWC Pearl Icon"
                  className="w-14 h-auto mb-8"
                />
                <h1 className="text-white text-center lg:text-left max-w-[700px] text-[32px] lg:text-[48px] font-black leading-[50px] lg:mb-8 font-['Roboto'] ">
                  Luxury Watch Servicing and Restoration
                </h1>
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="w-full px-8 lg:px-0"
              >
                <h1 className="text-white text-center text-[16px] lg:text-left lg:text-2xl w-full font-['Roboto']">
                  Experience the finest care for your timepiece. Restore your
                  movement to factory Swiss standards.
                </h1>
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 2.5 }}
              >
                <div className="w-full flex flex-col lg:flex-row justify-center md:justify-start items-center gap-4 lg:gap-0 mt-12 lg:mt-10">
                  <a href="/ContactUs" aria-label="Contact Us">
                    <Button
                      variant="gradient"
                      className="rounded-md font-['Roboto'] px-2 py-3 min-w-[220px] border-2 border-[#182835] bg-[#182835] text-[16px] font-black text-white hover:bg-opacity-70"
                    >
                      Get an Estimate
                    </Button>
                  </a>
                  <a href="/WatchRepair" aria-label="Learn More">
                    <Button
                      variant="gradient"
                      className="rounded-sm font-['Roboto'] px-2 py-3 min-w-[220px] text-[14px] font-bold text-white underline "
                    >
                      Learn More
                    </Button>
                  </a>
                </div>
              </motion.div>
            </>
          ) : (
            <></>
            // <div className="absolute top-0 aspect-video h-full bg-black opacity-100 z-[3] flex justify-center items-center">
            //   <Image
            //     src={PearlIcon}
            //     alt="ICWC Pearl Icon"
            //     className="w-48 h-auto"
            //   />
            // </div>
          )}
        </div>
        <div className="hidden md:flex h-full w-full"></div>
      </section>
    </>
  );
}
//up
