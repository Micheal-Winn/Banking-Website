import React from "react";
import { MdSpaceDashboard, MdOutlineAlignVerticalBottom } from "react-icons/md";
import { RiBankCardFill } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import BankSection from "./BankSection";
import {motion} from "framer-motion"

const featureText = {
  hidden:{
    opacity:0,
    y:100
  },
  show:{
    opacity:1,
    y:0,
    transition:{
      duration:2,
      type:'spring',
      ease:"easeInOut"
    }
  }
}

const featureIconContainer = {
  hidden:{
    opacity:0
  },
  show:{
    opacity:1,
    transition:{
      staggerChildren:0.4,
      ease:"easeInOut"
    }
  }
}

const lefAnimateIcon = {
  hidden:{
    opacity:0,
    x:-100
  },
  show:{
    opacity:1,
    x:0,
    transition:{
      delay:0.5,
      type:"spring",
      duration:2.2,
      ease:"easeInOut"
    }
  }
}

const rightAnimateIcon = {
  hidden:{
    opacity:0,
    x:100
  },
  show:{
    opacity:1,
    x:0,
    transition:{
      delay:0.5,
      type:"spring",
      duration:2.2,
      ease:"easeInOut"
    }
  }
}

const FeatureSection = () => {
  return (
    <section id="features" className="min-h-screen flex flex-col pt-12 overflow-hidden">
      {/** Provide feature */}
      <div className="flex flex-col text-center">
        <motion.div initial="hidden" whileInView={"show"} variants={featureIconContainer} className="flex flex-col gap-4">
          <motion.h2  variants={featureText} className="text-[#5265CA] sm:text-base lg:text-xl uppercase tracking-widest font-bold">
            Feature
          </motion.h2>
          <motion.h3  variants={featureText}  className="text-2xl font-bold tracking-widest lg:tracking-wider sm:text-[2rem] md:text-4xl lg:text-4xl xl:text-5xl">
            Features We Provide
          </motion.h3>
          <motion.p  variants={featureText}  className="text-[#B2BCCD] w-[80%] sm:w-[70%] md:w-[40%] mx-auto  text-sm  lg:text-base xl:text-lg">
            Powerful metrics to better understand your business are right at
            your fingertips,once you start working with them!
          </motion.p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-7 mt-14 container sm:px-4  ">
          <motion.div initial="hidden" whileInView={"show"} variants={lefAnimateIcon} className="flex flex-col gap-3 sm:gap-4">
            <div className="bg-[#001582] w-[60px] h-[60px] mx-auto rounded-xl flex justify-center items-center">
              <MdSpaceDashboard color="white" size={'45px'}/>
            </div>
            <h4 className="text-[#303561] text-xl sm:text-base lg:text-xl font-semibold ">Dashboard</h4>
            <p className="text-[#B2BCCD] text-sm w-[55%] sm:w-full md:w-[85%] mx-auto sm:text-xs  md:text-[0.7rem] lg:text-xs xl:text-sm">
              Life is not about finding yourself.Life is about creating
              yourself.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView={"show"} variants={lefAnimateIcon} className="flex flex-col gap-4">
            <div className="bg-[#61CEF6] w-[60px] h-[60px] mx-auto rounded-xl flex justify-center items-center">
              <MdOutlineAlignVerticalBottom color="white" size={'45px'}/>
            </div>
            <h4 className="text-[#303561] text-xl sm:text-base lg:text-xl font-semibold ">Statistic</h4>
            <p className="text-[#B2BCCD] text-sm w-[55%] sm:w-full md:w-[85%] mx-auto sm:text-xs  md:text-[0.7rem] lg:text-xs xl:text-sm">
              Better a diamond with a flow than a pebble without one diamond.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView={"show"} variants={rightAnimateIcon} className="flex flex-col gap-4">
            <div className="bg-[#334AC0] w-[60px] h-[60px] mx-auto rounded-xl flex justify-center items-center">
              <RiBankCardFill color="white"  size={'45px'}/>
            </div>
            <h4 className="text-[#303561] text-xl sm:text-base lg:text-xl font-semibold ">Bank Account</h4>
            <p className="text-[#B2BCCD] text-sm w-[55%] sm:w-full md:w-[85%] mx-auto sm:text-xs  md:text-[0.7rem] lg:text-xs xl:text-sm">
              Life is not about finding yourself.Life is about creating
              yourself.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView={"show"} variants={rightAnimateIcon} className="flex flex-col gap-4">
            <div className="bg-[#9854C1] w-[60px] h-[60px] mx-auto rounded-xl flex justify-center items-center">
              <BiMessageDetail color="white"  size={'45px'}/>
            </div>
            <h4 className="text-[#303561] text-xl sm:text-base lg:text-xl font-semibold ">Messages</h4>
            <p className="text-[#B2BCCD] text-sm w-[55%] sm:w-full md:w-[85%] mx-auto sm:text-xs  md:text-[0.7rem] lg:text-xs xl:text-sm">
              Better a diamond with a flow than a pebble without one diamond.
            </p>
          </motion.div>
        </div>
      </div>

      {/**Dashboard feature */}
      <BankSection/>
    </section>
  );
};

export default FeatureSection;
