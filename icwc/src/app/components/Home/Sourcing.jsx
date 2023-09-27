import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export default function Sourcing() {
  return (
    <>
      <div className="w-full h-full lg:h-[400px] bg-[#182835] px-8 lg:px-16 py-20 lg:py-[10%] flex-col justify-center items-start gap-20 inline-flex">
        <div className="self-stretch flex flex-col h-full lg:flex-row justify-start items-center gap-6 lg:gap-20 inline-flex">
          <div className="grow shrink basis-0  lg:text-left text-center">
            <span className="text-neutral-400 text-[2.5rem] lg:text-2xl font-bold font-['Roboto'] leading-[28.80px]">
              TIMEPIECE SOURCING
              <br />
            </span>
            <span className="text-gray-800 text-white mt-4 pt-1 text-5xl font-bold font-['Roboto'] leading-[57.60px]">
              Looking to acquire a watch?
            </span>
          </div>
          <div className="h-full grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex bg-[#182835] h-full">
            <div className=" self-stretch max-w-[400px] lg:max-w-[700px] text-gray-800 text-[24px] font-normal font-['Roboto'] leading-[27px] text-white text-center lg:text-left">
              We&apos;ll source and qualify the watch you&apos;re looking for,
              even if we don&apos;t have it. You tell us the specs, we&apos;ll
              find it. Our team will look far and wide for that specific
              timepiece.
            </div>
            <div className="w-full pt-4 flex flex-row justify-center lg:justify-start items-start gap-4 inline-flex">
              <a href="/ContactUs">
                <Button
                  variant="gradientt"
                  className="px-6 py-3 bg-white border border-gray-800 justify-center items-center gap-2 flex"
                >
                  <p className="text-black text-xl font-['Roboto']">
                    Contact Us
                  </p>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
