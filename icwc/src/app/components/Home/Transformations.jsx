import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

import Image from "next/image";
import StopWatch from "../../../../public/Images/StopWatch.png";
import WatchBanner from "../../../../public/Images/WatchBanner_Medium.webp";

export default function Transformations() {
  return (
    <>
      <section className="overflow-hidden relative py-[10%] px-[5%] w-full h-[300px] lg:h-[400px] flex flex-col gap-8 lg:gap-20 justify-center items-center">
        <div className="absolute top-0 left-0 bg-black opacity-40 h-full w-full z-[4]"></div>
        <div className="absolute top-0 left-0 bg-black opacity-100 z-[2] w-full">
          {/* <div className="flex lg:hidden">
            {" "}
            <Image
              src={WatchesRow}
              className="object-cover h-[80vh] lg:h-[50vh] w-full"
            />
          </div>

          <div className="hidden lg:flex">
            <Image
              src={StopWatch}
              className="object-cover h-[80vh] lg:h-[50vh] w-full"
            />
          </div> */}
          <Image
            src={WatchBanner}
            className="h-[300px] w-full object-cover lg:h-full lg:w-full"
            alt="A rolex watch being transformed, restored, and COA"
          />
        </div>

        <div className="flex flex-col justify-center gap-0 items-center z-[4]">
          <h1 className="font-extrabold text-[48px] font-['Roboto'] lg:text-[64px] text-center md:text-left text-white">
            Transformations
          </h1>
          <h5 className="text-[16px] lg:text-[18px] max-w-[400px] lg:max-w-[700px] text-gray-800 text-center md:text-left font-['Roboto'] text-white">
            See the incredible before and after results of our watch servicing
            and restoration
          </h5>
        </div>
        <div className="w-full flex justify-center items-center gap-4 z-[4]">
          <a href="/ContactUs">
            <Button
              variant="gradient"
              className="rounded-sm px-2 py-2 min-w-[140px] border-2 border-[#182835] bg-[#182835] text font-normal text-white shadow-[0_2px_20px_0.1px_rgba(255,255,255,0.2)]"
            >
              View
            </Button>
          </a>
          <a href="/WatchRepair">
            <Button
              variant="gradient"
              className="rounded-sm px-2 py-2 min-w-[200px] text font-thin text-white border-2 border-gray-200 shadow-[0_2px_20px_0.1px_rgba(255,255,255,0.2)]"
            >
              Learn More
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
