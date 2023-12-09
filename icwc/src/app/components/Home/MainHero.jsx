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
import { Stream } from "@cloudflare/stream-react";
import { VideoPlayer } from "react-video-js-player";

const ReactPlayer = lazy(() => import("react-player"));

export default function MainHero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoIdOrSignedToken = "aba71fa4392fdda8026474776b1f0a86";

  return (
    <>
      <section className="relative py-[5%] lg:px-[10%] w-full h-[100vh] lg:aspect-video bg-white overflow-hidden flex flex-col md:flex-row justify-center items-center lg:items-center">
        {!isPlaying && (
          <div className="absolute top-0 aspect-video h-full bg-white opacity-100 z-[3] flex justify-center items-center">
            <Image
              src={PearlIcon}
              alt="ICWC Pearl Icon"
              className="w-48 h-auto"
            />
          </div>
        )}
        <div className="absolute top-0 aspect-video h-full bg-black opacity-0 z-[3]"></div>
        <div className="hidden md:flex absolute top-0 aspect-video h-full bg-white z-[2] lg:-mt-[40px]">
          {/* <Image src={Main} className="object-cover h-full w-full" /> */}
          {/* <Stream
            controls
            src={videoIdOrSignedToken}
            height="400"
            width="400"
            autoplay
            onPlay={() => setIsPlaying(true)}
          /> */}
          {/* <VideoPlayer
            src={
              "https://customer-jcu3t54p5nuo4woo.cloudflarestream.com/aba71fa4392fdda8026474776b1f0a86/manifest/video.m3u8"
            }
            autoplay={true}
            height="400"
            width="400"
          /> */}
          {/* <div className="relative p-4">
            <iframe
              src="https://customer-jcu3t54p5nuo4woo.cloudflarestream.com/aba71fa4392fdda8026474776b1f0a86/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-jcu3t54p5nuo4woo.cloudflarestream.com%2Faba71fa4392fdda8026474776b1f0a86%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
              className="h-full w-full"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowfullscreen="true"
            ></iframe>
          </div> */}
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
            // style={{
            //   position: "absolute",
            //   top: "40px",
            //   left: 0,
            //   objectPosition: "center",
            // }}
          />
        </div>
        <div className="flex md:hidden absolute top-0 w-full z-[2]">
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
          {/* <iframe
            src="https://customer-jcu3t54p5nuo4woo.cloudflarestream.com/aba71fa4392fdda8026474776b1f0a86/iframe?poster=https%3A%2F%2Fcustomer-jcu3t54p5nuo4woo.cloudflarestream.com%2Faba71fa4392fdda8026474776b1f0a86%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
            height="720"
            width="1280"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          ></iframe> */}
          <ReactPlayer
            url="https://customer-jcu3t54p5nuo4woo.cloudflarestream.com/0b88c495cf2bb65e96f5b39d9ac70e53/manifest/video.m3u8"
            playing={true}
            loop={true}
            controls={false}
            muted={true}
            onPlay={() => setIsPlaying(true)}
            playsinline={true}
            width={"100%"}
            height={"100%"}
            className="object-cover "
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
                className="justify-center items-center flex flex-col"
              >
                <Image
                  src={PearlIcon}
                  alt="ICWC Pearl Icon"
                  className="w-14 h-auto mb-8"
                />
                <h1 className="text-white text-center lg:text-left max-w-[700px] text-[48px] font-bold leading-[50px] mb-8 font-['Roboto'] ">
                  Luxury Watch Servicing and Restoration
                </h1>
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <div className="w-full flex justify-center items-center">
                  <h1 className="text-white text-center text-2xl font-black lg:text-left lg:text-[18px] lg:max-w-[400px] max-w-[90vw] align font-['Roboto'] p-2 ">
                    Experience the finest care for your Rolex timepiece. Restore
                    your movement to factory Swiss standards.
                  </h1>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 2.5 }}
              >
                <div className="w-full flex flex-col lg:flex-row justify-center md:justify-start items-center gap-4 mt-20 lg:mt-10">
                  <a href="/ContactUs" aria-label="Contact Us">
                    <Button
                      variant="gradient"
                      className="rounded-sm font-['Roboto'] px-2 py-3 min-w-[220px] border-2 border-[#182835] bg-[#182835] text font-black text-white"
                    >
                      Contact Us
                    </Button>
                  </a>
                  <a href="/WatchRepair" aria-label="Learn More">
                    <Button
                      variant="gradient"
                      className="rounded-sm font-['Roboto'] px-2 py-3 min-w-[220px] text font-black text-white border-2 border-white shadow-[0_2px_20px_0.1px_rgba(255,255,255,0.2)]"
                    >
                      Learn More
                    </Button>
                  </a>
                </div>
              </motion.div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="hidden md:flex h-full w-full"></div>
      </section>
    </>
  );
}
//up
