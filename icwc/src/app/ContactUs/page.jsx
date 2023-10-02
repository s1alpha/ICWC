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
      <div className="w-full h-full px-8 lg:px-16 py-4 lg:py-14 bg-white flex-col justify-start items-start gap-20 inline-flex  lg:mt-[0%]">
        <div className="relative self-stretch flex flex-col lg:flex-row justify-center lg:justify-start lg:items-end gap-20 inline-flex">
          <div className="relative grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-[149px] flex-col justify-start items-center lg:items-start gap-0 flex ">
              <div className="text-center font-bold font-['Roboto'] text-gray-600 text-xl font-['Roboto'] ">
                NEED HELP?
              </div>
              <div className="self-stretch h-[109px] w-full flex-col justify-start items-center lg:items-start gap-1 flex">
                <div className="self-stretch text-center lg:text-left text-gray-800 text-5xl font-bold font-['Roboto'] leading-[57.60px]">
                  Get in Touch
                </div>
                {/* <div className="self-stretch text-gray-800 text-lg font-normal font-['Roboto'] leading-[27px]">
                  Have a question or need assistance? Contact us today!
                </div> */}
              </div>
            </div>
            <Form />
          </div>
          <div className="absolute top-0 left-0 lg:relative order-first lg:order-last relative lg:h-[600px] overflow-hidden h-full lg:max-w-[50vw]">
            <Image
              src={FixingWatch}
              alt="Fixing a watch"
              className="object-cover h-full"
            />

            <div className="absolute top-0 left-0  w-full h-full flex justify-center items-center z-[8]">
              <Image
                src={PearlIcon}
                alt="ICWC Pearl Icon"
                className="h-12 w-auto"
              />
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
  const onSubmit = async (data) => {
    console.log(data);
  };

  const handleServiceSelection = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <form
        className=" px-0 lg:px-4 py-2 w-full flex flex-col justify-center items-left"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <p className="mb-2 font-bold text-gray-600">Name:</p> */}
        <input
          {...register("name")}
          name="name"
          placeholder="Name"
          className="shadow-inner p-2 border-b-2 border-gray-400 mb-12 max-w-[400px]  rounded-sm focus:outline-none focus:border-r-4"
        />
        {/* <p className="mb-2 text-gray-600 font-bold">Email: </p>{" "} */}
        <p className="lg:inline text-[8px] lg:text-[12px] text-gray-400 mb-4 w-full text-center lg:text-left">
          WE DO NOT SEND PROMOTIONAL CONTENT UNLESS OPTED IN
        </p>
        <input
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "This is not a valid email",
            },
          })}
          name="email"
          placeholder="Email"
          className="shadow-inner p-2 border-b-2 border-gray-400 mb-12 max-w-[400px]  rounded-sm focus:outline-none focus:border-r-4"
        />
        <textarea
          name="message"
          {...register("message")}
          placeholder="Message"
          className="min-h-[120px] shadow-inner p-2 mb-12 border-b-2 border-gray-600 max-w-[400px] rounded-sm focus:outline-none focus:border-r-4"
        />

        {/* <p className="mb-2 text-gray-600 font-bold">Interest:</p> */}
        {/* <div className="max-w-[400px] p-2 shadow-inner border-2 mb-12">
          <select
            name="type"
            {...register("type", {
              required: true,
            })}
            placeholder="Select"
            className=""
          >
            <option value="repair">Watch Repair Estimate</option>
            <option value="sourcing">TimePiece Sourcing</option>
            <option value="assesment">General Assesment</option>
            <option value="other">Other</option>
          </select>
        </div>
        {errors?.type?.type === "required" && <p>This field is required</p>} */}
        <div className="max-w-[400px] p-2 mb-12 flex flex-col justify-center items-left gap-4">
          <label className="flex flex-row gap-2">
            <input
              name="fruit"
              {...register("fruit", { required: "Please select fruits" })}
              type="checkbox"
              value="Banana"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#182835] checked:bg-[#182835] checked:before:bg-[#182835] hover:before:opacity-10"
              onChange={(e) => handleServiceSelection(e)}
            />{" "}
            <p className="text-gray-600 "> &nbsp;Watch Repair Estimate</p>
          </label>
          <label className="flex flex-row gap-2">
            <input
              name="fruit"
              {...register("fruit", { required: "Please select fruits" })}
              type="checkbox"
              value="Apple"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#182835] checked:bg-[#182835] checked:before:bg-[#182835] hover:before:opacity-10"
              onChange={(e) => handleServiceSelection(e)}
            />{" "}
            <p className="text-gray-600  ">&nbsp;Timepiece Sourcing</p>
          </label>
          <label className="flex flex-row gap-2">
            <input
              name="fruit"
              {...register("fruit", { required: "Please select fruits" })}
              type="checkbox"
              value="Cherry"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#182835] checked:bg-[#182835] checked:before:bg-[#182835] hover:before:opacity-10"
              onChange={(e) => handleServiceSelection(e)}
            />{" "}
            <p className="text-gray-600 ">&nbsp;General Assesment</p>
          </label>
          <label className="flex flex-row gap-2">
            <input
              name="fruit"
              {...register("fruit", { required: "Please select fruits" })}
              type="checkbox"
              value="Cherry"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#182835] checked:bg-[#182835] checked:before:bg-[#182835] hover:before:opacity-10"
              onChange={(e) => handleServiceSelection(e)}
            />{" "}
            <p className="text-gray-600">&nbsp;Other</p>
          </label>
        </div>

        <div className="w-full flex justify-left ">
          {" "}
          <Button
            type="submit"
            className="bg-[#182835] border text-white w-full lg:w-[200px] mt-8 "
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
