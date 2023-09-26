import Image from "next/image";
// import Stars from "../../../../public//Icons/✨.svg";
import Stars from "../../../../public//Icons/Stars.svg";
import Badge from "../../../../public/Icons/Badge.svg";
import Cert from "../../../../public/Icons/Certificate.svg";

export default function Services() {
  return (
    <>
      <div className="w-full bg-[#182835]  h-full px-16 py-28 flex-col justify-start items-start gap-20 inline-flex">
        <div className="self-stretch flex flex-col lg:flex-row justify-center items-start gap-24 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-full flex-col justify-start items-start gap-6 flex">
              {/* <Image src={Stars} alt="stars" /> */}
              <div className="self-stretch h-[162px] flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-white text-[2.5rem] lg:text-[32px] font-bold font-['Roboto'] leading-[60px]">
                  Expert COA{" "}
                </div>
                <div className="self-stretch max-w-[400px] text-gray-400 text-[1.2rem] lg:text-base font-normal font-['Roboto'] leading-normal">
                  A clean, oil, and adjust performed by our team with careful
                  attention to your specific timepiece.{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="h-full grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-full flex-col justify-start items-start gap-6 flex">
              {/* <Image src={Cert} className="h-14 w-14" alt="stars" /> */}
              <div className="self-stretch h-full flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-white text-[2.5rem] h-full lg:text-[32px] font-bold font-['Roboto'] leading-[60px]">
                  Restorations with Care
                </div>
                <div className="self-stretch max-w-[400px] text-gray-400 text-[1.2rem] lg:text-base font-normal font-['Roboto'] leading-normal">
                  Our expert team will assess your watch and provide a detailed
                  restoration plan to return it to its original glory.
                </div>
              </div>
            </div>
            {/* <div className="w-full pt-4 justify-start lg:justify-center items-center gap-6 inline-flex">
              <button className="px-6 py-3 bg-gray-800 border border-gray-800 justify-center items-center gap-2 flex">
                <div className="text-white text-base font-normal font-['Roboto'] leading-normal">
                  Contact Us
                </div>
              </button>
            </div> */}
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-full flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch h-full flex-col justify-start items-start gap-1 flex">
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
                <div className="self-stretch text-white text-[2.5rem] lg:text-[32px] font-bold font-['Roboto'] leading-[60.60px]">
                  Quality Assurance
                </div>
                <div className="self-stretch text-gray-400 text-[1.2rem] max-w-[400px] lg:text-base font-normal font-['Roboto'] leading-normal">
                  Our team will test and ensure the quality of your movement for
                  up to{" "}
                  <p className="font-extrabold inline text-white">
                    &nbsp;1&nbsp;
                  </p>{" "}
                  year after service
                </div>
              </div>
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
