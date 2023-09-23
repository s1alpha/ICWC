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
import WatchesRow from "../../../../public/Images/WatchesRow.jpg";

export default function Transformations() {
  return (
    <>
      <section className="overflow-hidden relative py-[5%] px-[5%] my-[5%] w-full h-[80vh] lg:h-[50vh] flex flex-col gap-20 justify-center lg:justify-center items-center">
        <div className="absolute top-0 left-0 bg-black opacity-60 h-full w-full z-[4]"></div>
        <div className="absolute top-0 left-0 bg-black opacity-100 z-[2] w-full">
          <div className="flex lg:hidden">
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
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mb-8 z-[10]">
          <h1 className="font-extrabold text-[32px] lg:text-[64px] text-center md:text-left text-white">
            Transformations
          </h1>
          <h5 className="text-[16px] lg:text-[18px] text-gray-800 text-center md:text-left text-white">
            See the incredible before and after results of our watch servicing
            and restoration
          </h5>
        </div>
        <div className="w-full flex justify-center  items-center z-[6]">
          <a href="/ContactUs">
            <Button
              variant="gradiant"
              className=" px-2 py-1 min-w-[200px] bg-white  text-xl text-gray-800 "
            >
              Reach Out
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
