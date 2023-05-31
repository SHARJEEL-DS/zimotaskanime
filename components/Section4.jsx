import Image from "next/image";
import React from "react";

const Section4 = () => {
  return (
    <div>
      <div className=" footer  h-screen flex tracking-[2px]  bg-local  bg-center bg-no-repeat bg-cover">
        <div className="grid grid-cols-3 text-white uppercase sm:grid-cols-1 3xl:grid-cols-4">
          <div className="flex flex-col justify-center ">
            <Image
              className=" w-[200px] lg:w-[500.74px] lg:ml-[60px] ml-3 "
              src="/assistes/f1.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="flex sm:hidden"></div>
          <div className="flex 3xl:flex lg:hidden sm:hidden"></div>

          <div className="   sm:px-[20px] ">
            <div className="sm:bg-opacity-40 blurFun sm:bg-black ">
              <div className=" sm:pt-3 sm:px-2">
                <p data-aos="zoom-in-right" className=" sm:text-[14px] 5xl:text-[45px] text-[30px]  text-[white]   sm:pt-0 pt-12">
                  Personalised for You
                </p>
                <p data-aos="zoom-in-right" className="  text-gray-300  max-w-sm font-medium 5xl:pr-[110px] 3xl:pr-[38px] 3xl:text-[15px] 4xl:text-[20px]  2xl:pr-[90px] sm:pr-2 mt-[40px] sm:text-[10px] text-[12px]">
                  Delivering thousands of personalised alerts everyday, our
                  USERS can be first in line when that opportunity of a lifetime
                  is here.
                </p>
              </div>
              <p data-aos="zoom-in-right" className="flex  sm:py-3 sm:mt-6  sm:px-2 sm:justify-start lg:text-[21px]  text-[14px]  lg:mt-[220px] lg:ml-36   ">
                CREATE USER ID
                <Image
                  className="w-[44.87px] ml-3 "
                  src="/assistes/f2.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
