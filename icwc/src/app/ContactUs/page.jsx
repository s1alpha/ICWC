"use client";

import Footer from "../components/Navigation/Footer";
import Header from "../components/Navigation/Header";
import FixingWatch from "../../../public/Images/FixingWatchFar.png";
import PearlIcon from "../../../public/LogoImages/Pearl_Icon.png";
import Image from "next/image";

import { useForm } from "react-hook-form";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export default function ContactUs() {
  return (
    <>
      <Header />
      <div className="w-full h-full px-16 py-28 bg-white flex-col justify-start items-start gap-20 inline-flex my-[5%]">
        <div className="self-stretch flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-20 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch h-[149px] flex-col justify-start items-start gap-4 flex">
              <div className="text-center font-bold font-['Roboto'] text-gray-600 text-xl font-['Roboto'] leading-normal">
                NEED HELP?
              </div>
              <div className="self-stretch h-[109px] flex-col justify-start items-start gap-1 mt-4 flex">
                <div className="self-stretch text-gray-800 text-5xl font-bold font-['Roboto'] leading-[57.60px]">
                  Get in Touch
                </div>
                <div className="self-stretch text-gray-800 text-lg font-normal font-['Roboto'] leading-[27px]">
                  Have a question or need assistance? Contact us today!
                </div>
              </div>
            </div>
            <Form />
          </div>
          <div className="relative min-h-[600px] overflow-hidden h-full lg:max-w-[50vw]">
            <Image
              src={FixingWatch}
              alt="Fixing a watch"
              className="object-fit"
            />

            <div className="absolute top-0 left-0  w-full h-full flex justify-center items-center z-[8]">
              <Image src={PearlIcon} alt="ICWC Icon" className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form className="bg-[#182835]" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Name")} name="Name" />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
