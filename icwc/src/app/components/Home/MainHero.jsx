import Image from "next/image";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

import WorkTable from "../../../../public/Images/WorkTable.png";
import PearlIcon from "../../../../public/LogoImages/Pearl_Icon.png";
import PearlText from "../../../../public/LogoImages/Pearl_Text.png";

export default function MainHero() {
  return (
    <>
      <section className="relative py-[5%] lg:px-[25%] w-full h-[100vh] lg:h-[70vh] overflow-hidden flex flex-col md:flex-row justify-center items-left lg:items-center">
        <div className="absolute top-0 h-[100vh] lg:[70vh] w-full  bg-black opacity-50 z-[3]"></div>
        <div className="absolute top-0 h-[100vh] lg:[70vh]  bg-black bg-opacity-20 z-[2]">
          <Image src={WorkTable} className="object-cover h-full w-full" />
        </div>
        <div className="pl-[5%] flex flex-col justify-center items-left lg:items-left w-full z-[4]">
          <Image src={PearlIcon} className="h-32 w-32 mb-12 lg:mb-4 " />
          <Image src={PearlText} className="w-[400px] " />

          {/* <div className="flex flex-col justify-center mb-8">
            <h1 className="font-extrabold text-white text-[64px] text-center md:text-left">
              Title
            </h1>
            <Image src={PearlIcon} className="h-24" />
            <h5 className="text-[24px] text-white text-center md:text-left">
              SUBTITLE
            </h5>
          </div> */}
          <div className="w-full flex justify-center md:justify-start items-center mt-20 lg:mt-10">
            <Button
              variant="gradient"
              className="rounded-sm px-2 py-2 min-w-[200px] bg-[#182835] text font-bold text-white shadow-[0_2px_20px_0.1px_rgba(255,255,255,0.2)]"
            >
              REACH OUT
            </Button>
          </div>
        </div>
        <div className="hidden md:flex h-full w-full"></div>
      </section>
    </>
  );
}
//up
