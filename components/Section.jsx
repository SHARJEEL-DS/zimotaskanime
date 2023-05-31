import Image from "next/image";
import { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";

import { motion } from "framer-motion";

const Section = () => {
  const [currentTime, setCurrentTime] = useState();
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    // Fetch the user's geolocation data
    fetch("https://geolocation-db.com/json/")
      .then((response) => response.json())
      .then((data) => {
        setCountryCode(data.country_code);
        setCountryName(data.country_name);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [currentDate, setCurrentDate] = useState({
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
          second: undefined,
        })
      );
      setCurrentDate(
        new Date().toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className='bg-[url("/assistes/bg.png")]  bg-local bg-center bg-no-repeat bg-cover '>

      <div
        className=" flex  flex-col justify-between  md:px-[30px]      h-screen  
      px-[60px] sm:px-[25px]   "
      >
        <div
          className=" child-div grid grid-cols-3  sm:pt-[20px] items-center   justify-between  
       pt-[2%]"
        >
          <div className="flex ">
            <Image
              className="  lg:w-[65.96px] w-[25px] mr-[39px] sm:mr-2 h-[20px] lg:h-[50px]  "
              src="/assistes/1.png"
              alt="asd"
              width={100} height={100}
            />
            <Image
              className=" sm:hidden  lg:w-[184.9px] w-[25px] h-[20px] lg:h-[50px]  lg:mr-[39px] mr-3  "
              src="/assistes/3.png"
              alt="asd"
              width={100} height={100}
            />
            <p className=" text-white uppercase sm:mt-1   mt-[25px] text-xs tracking-[2px] ">
              about
            </p>
          </div>
          <div className="flex justify-center ">
            <Image
              className="  lg:w-[204.38px]  w-[100px] h-[auto]  "
              src="/assistes/2.png"
              alt="asd"
              width={100} height={100}
            />
          </div>
          <div className="flex justify-end mt-0 ">
            <div className="mr-2 text-white sm:hidden text-end ">
              <p className=" text-sm tracking-[2px] ">
                {currentTime}{" "}
                <span className=" text-sm sm:text-xs ml-2 tracking-[2px]  ">
                  {countryName}
                </span>
              </p>
              <p className="text-end  text-sm tracking-[2px] ">{`${currentDate} `}</p>
            </div>
            <div className="text-white sm:pt-0  pt-[7px] sm:justify-between  flex  ">
              <ReactCountryFlag
                className="ml-3 sm:ml-4"
                countryCode={countryCode}
                svg
                style={{
                  width: "37.31px",
                  height: "25px",
                }}
                title={countryCode}
              />

              <Image
                src="/assistes/6.png"
                className="w-[20.89px] h-[25px] mx-3 sm:mx-0 sm:ml-3 ml-[40px]"
                alt="sad"
                width={100} height={100}
              />

              <Image
                src="/assistes/5.png"
                className="w-[20.89px] h-[25px]  sm:ml-3 ml-[40px]"
                alt="asdasd"
                width={100} height={100}
              />
            </div>
          </div>
          <div className=" mt-[30px]  text-white flex">
            <button className="flex text-white" >

            <Image
              src="/assistes/back.png"
              className=" w-[22px] mt-2 sm:mt-1 mr-2  h-[16px] "
              alt="asdas"
              width={100} height={100}
              />
            <p className=" uppercase sm:text-[17px] text-[22px] tracking-[4px] ">
              back
            </p>
              </button>
          </div>
        </div>

        <div className="text-white child-div">
          <p  data-aos="zoom-in-left"
            className=" uppercase sm:text-[20px]  md:text-[30px] text-[40px] 
           tracking-[4px]    "
          >
            discover
          </p>
          <p  data-aos="zoom-in-left"
          className=" uppercase   text-[60px] sm:text-[35px] tracking-[3px]">
            A NEW WORLD
          </p>
          <p data-aos="zoom-in-left"
           className=" uppercase text-[20px] sm:text-[16px]    text-[#A9A6A6] tracking-[3px]  ">
            FOR THOSE WHO WISH FOR MORE...
          </p>
        </div>

        <div className="grid grid-cols-1 child-div">
          <p data-aos="zoom-in-up" className=" text-[#A9A6A6] mb-[40px] text-center text-[20px] sm:text-[16px] tracking-[3px] ">
            Bringing the world closer together
          </p>
          
          <motion.a
              whileHover={{ scale: 2.1 }}
              whileTap={{ scale: 0.9 }}
              className="justify-self-center"
              href="#Section1"
            >
              <img
                src="/assistes/down.png"
                className="  w-[40px] mb-5  "
                alt=""
              />
            </motion.a>
        </div>
      </div>
        </div>
    </>
  );
};

export default Section;
