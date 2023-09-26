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

export default function MainHero() {
  return (
    <>
      <section className="relative py-[5%] lg:px-[10%] w-full h-[100vh] :h-[100vh] overflow-hidden flex flex-col md:flex-row justify-center items-left lg:items-center">
        <div className="absolute top-0 h-[100vh] lg:[70vh] w-full  bg-black opacity-50 z-[3]"></div>
        <div className="absolute top-0 h-[100vh] lg:[70vh] w-full bg-black bg-opacity-20 z-[2]">
          <Image src={Main} className="object-cover h-full w-full" />
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
          <h1 className="text-center lg:text-left max-w-[700px] text-[48px] font-bold leading-[50px] mb-8 ">
            Luxury Rolex Servicing and Restoration
          </h1>
          <h1 className="text-center lg:text-left max-w-[700px]">
            Experience the finest care for your Rolex timepiece. Restore your
            movement to factory Swiss standards
          </h1>

          <div className="w-full flex justify-center md:justify-start items-center gap-4 mt-20 lg:mt-10">
            <a href="/ContactUs">
              <Button
                variant="gradient"
                className="rounded-sm px-2 py-2 min-w-[200px] border-2 border-[#182835] bg-[#182835] text font-normal text-white shadow-[0_2px_20px_0.1px_rgba(255,255,255,0.2)]"
              >
                Contact Us
              </Button>
            </a>
            <a href="/WatchRepair">
              <Button
                variant="gradient"
                className="rounded-sm px-2 py-2 min-w-[200px] text font-thin text-white border-2 border-white shadow-[0_2px_20px_0.1px_rgba(255,255,255,0.2)]"
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
