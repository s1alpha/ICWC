"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// import Stars from "../../../../public//Icons/✨.svg";
import Stars from "../../../../public//Icons/Stars.svg";
import Badge from "../../../../public/Icons/Badge.svg";
import Cert from "../../../../public/Icons/Certificate.svg";

export default function Services() {
  return (
    <>
      <div className="w-full bg-white h-full lg:h-[400px] px-16 py-28 flex flex-col justify-center items-center gap-20">
        <div className=" max-w-[1400px] flex flex-col lg:flex-row justify-center items-start gap-24 inline-flex">
          <div className="h-full grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-full flex-col justify-start items-start gap-6 flex">
              {/* <Image src={Stars} alt="stars" /> */}
              <Service1 />
            </div>
          </div>
          <div className="h-full grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-full flex-col justify-start items-start gap-6 flex">
              {/* <Image src={Cert} className="h-14 w-14" alt="stars" /> */}
              <Service2 />
            </div>
            {/* <div className="w-full pt-4 justify-start lg:justify-center items-center gap-6 inline-flex">
              <button className="px-6 py-3 bg-gray-800 border border-gray-800 justify-center items-center gap-2 flex">
                <div className="text-[#182835] text-base font-normal font-['Roboto'] leading-normal">
                  Contact Us
                </div>
              </button>
            </div> */}
          </div>
          <div className="h-full grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-full flex-col justify-start items-start gap-6 flex">
              <Service3 />
            </div>
          </div>
        </div>
      </div>
      {/* <section className="py-[5%]  px-[5%] w-[100vw] h-full flex flex-col gap-20 justify-start lg:justify-center items-center">
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="font-extrabold text-[24px]">Export COA and Watch Restoration</h2>
      <h6>subtitle</h6>
    </div>
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="font-extrabold text-[24px]">Export COA and Watch Restoration</h2>
      <h6>subtitle</h6>
    </div>
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="font-extrabold text-[24px]">Export COA and Watch Restoration</h2>
      <h6>subtitle</h6>
    </div>
    </section> */}
    </>
  );
}

export function Service1() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.7 },
  };

  useEffect(() => {
    console.log("in view", inView);
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className=""
    >
      {" "}
      <div className="h-full flex flex-col justify-start items-start gap-1">
        <h2 className="self-stretch text-center  text-[#182835] text-[2.5rem] lg:text-[32px] font-bold font-['Roboto'] leading-[60px]">
          Expert Movement Service{" "}
        </h2>
        <p className="self-stretch max-w-[400px] text-center text-gray-800 text-[1.2rem] lg:text-base font-normal font-['Roboto'] leading-normal">
          A clean, oil, and adjust performed by our team with careful attention
          to your specific timepiece.{" "}
        </p>
      </div>
    </motion.div>
  );
}

export function Service2() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.7 },
  };

  useEffect(() => {
    console.log("in view", inView);
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className=""
    >
      {" "}
      <div className="h-full flex flex-col justify-start items-start gap-1">
        <h2 className="w-full text-center text-[#182835] text-[2.5rem] lg:text-[32px] font-bold font-['Roboto'] leading-[40px]">
          Restorations with Care
        </h2>
        <p className="self-stretch max-w-[400px] text-center text-gray-800 text-[1.2rem] lg:text-base font-normal font-['Roboto'] leading-normal">
          Our team will assess your watch and provide a detailed restoration
          plan to return it to its original glory.
        </p>
      </div>
    </motion.div>
  );
}

export function Service3() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.7 },
  };

  useEffect(() => {
    console.log("in view", inView);
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className=""
    >
      {" "}
      <div className="h-full flex flex-col justify-start items-start gap-1">
        {/* <div className="h-12 justify-center items-center inline-flex lg:mb-6">
                  <div className="w-full h-12  py-[4.50px] justify-center items-center flex" />
                  <Image src={Badge} className="h-14 w-14" alt="stars" />
                  <div className="w-full">
                    <span className="text-gray-800 text-5xl font-semibold font-['Roboto']">
                      1
                    </span>
                    <span className="text-gray-800 text-[32px] font-semibold font-['Roboto']">
                      year
                    </span>
                  </div>
                </div> */}
        <h2 className="w-full text-[#182835] text-center text-[2.5rem] lg:text-[32px] font-bold font-['Roboto'] leading-[40px]">
          Quality Assurance
        </h2>
        <p className="self-stretch text-center text-gray-800 text-[1.2rem] max-w-[400px] lg:text-base font-normal font-['Roboto'] leading-normal">
          Our team will test and ensure the quality of your movement for up to{" "}
          <div className="font-extrabold inline text-[#182835]">
            &nbsp;1&nbsp;
          </div>{" "}
          year after service
        </p>
      </div>
    </motion.div>
  );
}
