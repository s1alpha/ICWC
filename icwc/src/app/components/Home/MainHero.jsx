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
import ReactPlayer from "react-player";

export default function MainHero() {
  return (
    <>
      <section className="relative py-[5%] lg:px-[10%] w-full aspect-video bg-white overflow-hidden flex flex-col md:flex-row justify-center items-left lg:items-center">
        <div className="absolute top-0 aspect-video h-full bg-black opacity-0 z-[3]"></div>
        <div className="absolute top-0 aspect-video h-full bg-white z-[2]">
          {/* <Image src={Main} className="object-cover h-full w-full" /> */}

          <ReactPlayer
            url="https://res.cloudinary.com/dypxraoci/video/upload/v1695783402/epnz4f5ddqbweemf7jr9.mp4"
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
        <div className="pl-[5%] flex flex-col justify-center items-left lg:items-left w-full z-[4]">
          {/* <div className="w-full hidden lg:flex flex-col justify-center items-left ">
            <Image src={PearlIcon} className="h-32 w-28 mb-12 lg:mb-4 " />
            <Image src={PearlText} className=" w-[300px] lg:w-[400px] " />
          </div>
          <div className="lg:hidden w-full flex flex-col justify-center items-center lg:items-left ">
            <Image src={PearlIcon} className="h-24 w-24 mb-12 lg:mb-4 " />
            <Image src={PearlText} className=" w-[300px] lg:w-[400px] " />
          </div> */}
          <h1 className="text-white text-center lg:text-left max-w-[700px] text-[48px] font-bold leading-[50px] mb-8 font-['Roboto'] ">
            Luxury Rolex Servicing and Restoration
          </h1>
          <h1 className="text-white text-center lg:text-left lg:text-[18px] lg:max-w-[400px] font-['Roboto'] p-2 shadow-[0_2px_20px_0.2px_rgba(255,255,255,0.2)]">
            Experience the finest care for your Rolex timepiece. Restore your
            movement to factory Swiss standards.
          </h1>

          <div className="w-full flex flex-col lg:flex-row justify-center md:justify-start items-center gap-4 mt-20 lg:mt-10">
            <a href="/ContactUs">
              <Button
                variant="gradient"
                className="rounded-sm font-['Roboto'] px-2 py-2 min-w-[200px] border-2 border-[#182835] bg-[#182835] text font-normal text-white shadow-[0_2px_20px_0.1px_rgba(255,255,255,0.2)]"
              >
                Contact Us
              </Button>
            </a>
            <a href="/WatchRepair">
              <Button
                variant="gradient"
                className="rounded-sm font-['Roboto'] px-2 py-2 min-w-[200px] text font-thin text-white border-2 border-white shadow-[0_2px_20px_0.1px_rgba(255,255,255,0.2)]"
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>
        <div className="hidden md:flex h-full w-full"></div>
      </section>
    </>
  );
}
//up
