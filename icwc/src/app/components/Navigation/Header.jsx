"use client";

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Image from "next/image";
import LogoTextAqua from "../../../../public/LogoImages/Logo ICWC_Aqua_Text.png";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="h-full mb-4 mt-2 flex flex-col gap-2 justify-start lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/WatchRepair" className="flex items-center">
          Watch Repair
        </a>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Contact Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography> */}
    </ul>
  );

  return (
    <>
      <Navbar className="bg-white border-none sticky top-0 z-10 h-full w-full rounded-none py-4 pb-8 px-8 lg:px-8 lg:py-4">
        <div className="relative flex items-center justify-between text-blue-gray-900">
          <a href="/" className="hidden lg:flex">
            <Image
              src={LogoTextAqua}
              className="h-4 w-auto flex flex-col justify-center items-center object-cover"
            />{" "}
          </a>
          <a
            href="/"
            className="absolute top-0 left-0 w-full mt-4 flex justify-center items-center lg:hidden"
          >
            <Image
              src={LogoTextAqua}
              className="h-4 w-auto  flex flex-col justify-center items-center object-cover"
            />{" "}
          </a>

          {/* <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Material Tailwind
          </Typography> */}
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block text-black ">{navList}</div>
            <a href="/ContactUs">
              <Button
                variant="gradient"
                size="sm"
                href="/ContactUs"
                className="hidden lg:inline-block bg-gray-800 px-6 py-1 rounded-sm"
              >
                Reach Out
              </Button>
            </a>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  stroke="black"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav
          open={openNav}
          className="flex flex-col justify-center items-center h-full "
        >
          <div className="h-full">{navList}</div>

          <Button
            variant="gradient"
            size="sm"
            fullWidth
            href="/ContactUs"
            className="mb-2 bg-gray-800"
          >
            <span>Contact Us</span>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
}
