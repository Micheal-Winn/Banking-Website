"use client";

import { Text, TypographyStylesProvider, Image } from "@mantine/core";
import Button from "../Button";
import {motion} from "framer-motion"

const textContainer ={
  hidden:{
    opacity:0,
    x:-20,
    y:-20,
  },
  show:{
    opacity:1,
    x:0,
    y:0,
    transition:{
      staggerChildren:0.06,
      duration:1,
      type:"spring",
      damping:12,
      stiffness:100
    }
  }
};
const child ={
  hidden:{
    opacity:0,
    x:-20,
    y:-20,
  },
  show:{
    opacity:1,
    x:0,
    y:0,
    transition:{
      duration:1,
      type:"spring",
      damping:12,
      stiffness:100
    }
  }
}

const paragraph = {
  hidden:{opacity:0,y:40},
  show:{
    opacity:1,
    y:0,
    transition:{
      duration:1.5,
      delay:0.9,
      type:"spring",
      ease:"easeInOut"
    }
  }
}

const imageContainer = {
  hidden:{
    opacity:0,
  },
  show:{
    opacity:1,
    staggerChildren:0.02,
    ease:"easeInOut"
  }
};

const image = {
  hidden:{
    opacity:0,
    y:-80,
  },
  show:{
    opacity:1,
    y:0,
    transition:{
      duration:4,
      ease:"easeInOut",
      delay:0.8,
      type:"spring"
    }
  }
}

const BannerHome = () => {

  const bannerText = "The Best bank to manage your finances.".split("");

  return (
    <section
      id="home"
      className=" flex xl:container sm:pt-6 md:pt-8 lg:pt-8 xl:pt-24 2xl:pt-36 flex-col-reverse md:flex-row gap-4 md:gap-0 min-h-[100vh - 70px]"
    >
      <div className=" sm:w-full md:w-[45%] flex  flex-col gap-9 xl:pt-16 lg:pt-10 lg:pl-14 md:pt-8 md:pl-6 sm:pt-6 sm:pl-4 pl-3 pr-4">
        <motion.div initial="hidden" whileInView={"show"} variants={textContainer} className="text-[#0E1446] text-center md:text-left 2xl:text-[5rem] xl:text-[4.3rem] lg:text-[3.2rem] md:text-[2.5rem] sm:text-7xl text-[2.4rem] md:leading-tight  md:tracking-wider xl:tracking-wider lg:tracking-wider  leading-tight font-bold tracking-wide">
          {bannerText.map((text, index) => (
            <motion.span key={index} variants={child}>
              {text === "" ? "/u00A0" : text}
            </motion.span>
          ))}
        </motion.div>
        <motion.p  initial="hidden" whileInView={"show"} variants={paragraph}  className="text-[#C9D0DD] text-center md:text-left 2xl:text-base xl:text-lg lg:text-base md:text-sm sm:text-[1rem] text-sm w-[96%] sm:w-[80%] mx-auto md:mx-0 md:w-full lg:w-[85%] sm:leading-6">
          It is time to make the world of finance simpler, smarter and fit for
          modern life.You can get started modern banking instantly with our
          banking application !
        </motion.p>

        <Button />
      </div>
      <motion.div className=" sm:w-full md:w-[55%] h-full" initial="hidden" whileInView={"show"} variants={imageContainer}>
        <motion.div className="relative w-full h-full" variants={image}>
          <Image
            src="/images/transfer.jpeg"
            alt="bank logo"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BannerHome;
