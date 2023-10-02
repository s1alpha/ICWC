"use client";

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";
import Image from "next/image";
// import LogoTextAqua from "../../../../public/LogoImages/Logo ICWC_Aqua_Text.png";
import LogoTextAqua from "../../../../public/LogoImages/Logo ICWC_Aqua.png";

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
        className="p-1 font-normal pt-12 lg:pt-0"
      >
        <a
          aria-label="WatchRepair"
          href="/WatchRepair"
          className="flex items-center text-black text-[24px] lg:text-[18px] font-['Roboto']"
        >
          WatchRepair
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
      <Navbar className="bg-white border-none sticky top-0 z-10 h-full w-full rounded-none py-4 pb-8 px-2 lg:px-24 lg:py-4">
        <div className="relative flex items-center justify-between text-blue-gray-900">
          <a href="/" className="hidden lg:flex" aria-label="Logo link to home">
            <Image
              src={LogoTextAqua}
              className="h-10 w-auto flex flex-col justify-center items-center object-cover"
              alt="IronCityWatchCompany logo"
            />{" "}
          </a>
          <a
            aria-label="Logo link to home"
            href="/"
            className="absolute top-0 left-0 w-full mt-4 flex justify-center items-center lg:hidden"
          >
            <Image
              src={LogoTextAqua}
              className="h-8 w-auto  flex flex-col justify-center items-center object-cover"
              alt="IronCityWatchCompany logo"
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
            <a href="/ContactUs" aria-label="ContactUs button">
              <Button
                variant="gradient"
                size="sm"
                href="/ContactUs"
                className="hidden lg:inline-block bg-gray-800 px-6 py-1 rounded-sm font-['Roboto']"
              >
                Contact Us
              </Button>
            </a>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              alt="menu button mobile"
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
        <Collapse
          open={openNav}
          className="flex flex-col justify-center items-center h-full "
        >
          {navList}

          <Button
            variant="gradient"
            size="sm"
            fullWidth
            href="/ContactUs"
            className="mb-2 bg-gray-800"
          >
            <span>Contact Us</span>
          </Button>
        </Collapse>
      </Navbar>
    </>
  );
}
