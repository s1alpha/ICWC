import { useState, useEffect } from "react";
import Image from "next/image";
import ContactImage from "../../../../public/Images/ContactUs.webp";

export default function HomeContact() {
  const initOpen = true;
  const [isOpenEmail, setIsOpenEmail] = useState(initOpen);
  const [isOpenPhone, setIsOpenPhone] = useState(initOpen);

  const [isOpenOffice, setIsOpenOffice] = useState(initOpen);

  return (
    <>
      <div className="w-full max-w-[1600px] overflow-hidden h-full px-6 lg:px-16 my-[5%] py-28 bg-white flex-col justify-start items-start gap-20 inline-flex">
        <div className="h-full flex-col justify-start items-start gap-0 flex lg:mb-12">
          <div className="text-center font-bold font-['Roboto'] text-gray-600 text-xl font-['Roboto'] leading-normal">
            NEED HELP?
          </div>
          <div className="self-stretch h-full flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-gray-800 text-5xl font-bold font-['Roboto'] leading-[57.60px]">
              Contact our team
            </div>
            <div className="self-stretch text-gray-800 text-lg text-xl font-normal font-['Roboto'] leading-[27px]">
              Reach out to us today and our team will make sure to get back to
              you as soon as we can
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col lg:flex-row justify-center items-center gap-20 inline-flex">
          <div className="h-full w-full lg:pl-10 lg:w-[500px] flex flex-col justify-center items-center lg:gap-2 gap-8 lg:pr-[300px]">
            {/* <button>Reach out</button> */}
            <div className="w-full self-stretch h-full">
              <div className="w-8 h-8 px-[2.67px] py-[5.33px] justify-center items-center inline-flex" />

              <div className="bg-[#182835] w-full px-4 lg:pt-12 py-4 lg:py-2 self-stretch h-full flex flex-col lg:min-w-[500px] justify-start items-center gap-2 flex">
                <div className="self-stretch text-white text-2xl lg:text-3xl font-bold font-['Roboto'] leading-7 flex flex-row justify-between ">
                  EMAIL{" "}
                  {isOpenEmail ? (
                    <button onClick={() => setIsOpenEmail(!isOpenEmail)}>
                      <i class="material-icons">close_fullscreen</i>
                    </button>
                  ) : (
                    <button onClick={() => setIsOpenEmail(!isOpenEmail)}>
                      <i class="material-icons">open_in_full</i>
                    </button>
                  )}
                </div>
                {isOpenEmail && (
                  <>
                    <div className="text-white mt-8 self-stretch text-gray-800 text-base font-normal font-['Roboto'] leading-normal whitespace-nowrap">
                      Send us a message today!
                    </div>
                    <div className="text-white self-stretch pb-8 text-gray-800 text-base font-normal font-['Roboto'] underline leading-normal">
                      hello@ironcitywatchcompany.com
                    </div>
                  </>
                )}
              </div>

              <div className="w-full self-stretch h-full ">
                <div className="w-8 h-8 px-[2.67px] py-[5.33px] justify-center items-center inline-flex" />

                <div className="bg-[#182835] w-full px-4 lg:pt-12 py-4 lg:py-2  self-stretch h-full flex flex-col lg:min-w-[500px] justify-start items-center gap-2 flex">
                  <div className="self-stretch text-white text-2xl lg:text-3xl font-bold font-['Roboto'] leading-7 flex flex-row justify-between ">
                    PHONE{" "}
                    {isOpenPhone ? (
                      <button onClick={() => setIsOpenPhone(!isOpenPhone)}>
                        <i class="material-icons">close_fullscreen</i>
                      </button>
                    ) : (
                      <button onClick={() => setIsOpenPhone(!isOpenPhone)}>
                        <i class="material-icons">open_in_full</i>
                      </button>
                    )}
                  </div>
                  {isOpenPhone && (
                    <>
                      <div className="text-white mt-8 self-stretch text-gray-800 text-base font-normal font-['Roboto'] leading-normal whitespace-nowrap">
                        Call us for assistance.
                      </div>
                      <div className="text-white self-stretch pb-8 text-gray-800 text-base font-normal font-['Roboto'] underline leading-normal">
                        +1 (205) 123-4567
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full self-stretch h-full ">
              <div className="w-8 h-8 px-[2.67px] py-[5.33px] justify-center items-center inline-flex" />

              <div className="bg-[#182835] w-full px-4 lg:pt-12 py-4 lg:py-2 self-stretch h-full flex flex-col lg:min-w-[500px] justify-start items-center gap-2 flex">
                <div className="self-stretch text-white text-2xl lg:text-3xl font-bold font-['Roboto'] leading-7 flex flex-row justify-between ">
                  OFFICE{" "}
                  {isOpenOffice ? (
                    <button onClick={() => setIsOpenOffice(!isOpenOffice)}>
                      <i class="material-icons">close_fullscreen</i>
                    </button>
                  ) : (
                    <button onClick={() => setIsOpenOffice(!isOpenOffice)}>
                      <i class="material-icons">open_in_full</i>
                    </button>
                  )}
                </div>
                {isOpenOffice && (
                  <>
                    <div className="text-white mt-8 self-stretch text-gray-800 text-base font-normal font-['Roboto'] leading-normal whitespace-nowrap">
                      Send us a message today!
                    </div>
                    <div className="text-white self-stretch pb-8 text-gray-800 text-base font-normal font-['Roboto'] underline leading-normal">
                      hello@ironcitywatchcompany.com
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <Image
            src={ContactImage}
            alt="IronCityWatchCompany Team"
            className="object-contain lg:max-w-[50vw]"
          />
        </div>
      </div>
    </>
  );
}
