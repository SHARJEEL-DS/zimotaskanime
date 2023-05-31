import Head from "next/head";
import Section from "@/components/Section";

import { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";


// import { motion, useScroll } from "framer-motion"


export default function Home() {
  // const scrollRef = useRef(null)
  useEffect(() => {
    AOS.init({
      
    });
    
  }, [])
  

  return (
    <>
      <Head>
        <title>About us</title>
      </Head>

      <main>
      <div className=" h-screen">
     
     
     <Section/>
     <Section1/>
     <Section2/>
     <Section3/>
    <Section4/>
  
    
    
    </div>
      </main>
    </>
  );
}
