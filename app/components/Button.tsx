import React from "react";
import { motion } from "framer-motion";

const button = {
  hidden:{opacity:0,y:40},
  show:{
    opacity:1,
    y:0,
    transition:{
      duration:1.5,
      delay:0.7,
      type:"spring",
      ease:"easeInOut"
    }
  }
}

const Button = () => {
  return (
    <motion.button initial="hidden" whileInView={"show"} variants={button} className="w-[140px] sm:w-[160px] mx-auto md:mx-0 md:w-[140px] lg:w-[170px] bg-[#5063C9] py-[10px] sm:py-[14px] lg:text-base md:text-sm rounded-full text-white">
      Get Started
    </motion.button>
  );
};

export default Button;
