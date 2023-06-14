/* eslint-disable react/no-unescaped-entities */
import { BiCheck } from "react-icons/bi";
import Button from "../../Button";
import Image from "next/image";
import { motion } from "framer-motion";

const lefAnimate = {
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

const rightAnimate = {
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

const TransactionSection = () => {
  return (
    <section className="flex container  sm:pl-10 md:pl-5 flex-col-reverse md:flex-row">
      <motion.div initial="hidden" whileInView={"show"} variants={lefAnimate} className=" flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-4 w-full lg:w-[45%] text-center md:text-left px-2 sm:px-0">
        <h2 className="text-[#5265CA] sm:text-base lg:text-xl uppercase tracking-widest font-bold ">Transaction</h2>
        <h3 className="text-4xl sm:text-[2.5rem] md:text-4xl xl:text-6xl font-bold xl:font-extrabold leading-tight">Stay Up to Date about your transaction</h3>
        <p className="text-[#C9D0DD] w-[80%] sm:w-[70%] md:w-[80%] mx-auto md:mx-0 lg:mx-0 lg:w-[85%] text-sm xl:text-base">
          It is time to make the world finance simpler,smarter and fit for
          modern life. It is time to say goodbye to the aid.
        </p>
        <div className="flex flex-col gap-4 sm:gap-4 sm:w-[50%] md:w-[90%] mx-auto md:mx-0 lg:w-full md:gap-6 lg:gap-4 mb-2 px-4 md:px-0 ">
          <div className="flex items-center  gap-5">
            <div className="bg-[#E7EAE9] h-[25px] w-[25px] rounded-full p-[1.4px] flex items-center justify-center">
              <BiCheck color="blue" />
            </div>
            <p className="text-xs  2xl:text-lg font-bold 2xl:font-semibold">
              It will notify you after
              every transaction.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="bg-[#E7EAE9] h-[25px] w-[25px] rounded-full p-[1.4px] flex items-center justify-center">
              <BiCheck color="blue" />
            </div>
            <p className="text-xs  2xl:text-lg font-bold 2xl:font-semibold">Changes for any kind of transaction.</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="bg-[#E7EAE9] h-[25px] w-[25px] rounded-full p-[1.4px] flex items-center justify-center">
              <BiCheck color="blue" />
            </div>
            <p className="text-xs l 2xl:text-lg font-bold 2xl:font-semibold">Keep you updated in every steps.</p>
          </div>
        </div>
        {/**Button */}
        <div className="w-[140px] sm:w-[160px] md:w-[140px] lg:w-[170px] mx-auto md:mx-0 md:mb-3 lg:mb-2">

        <Button  />
        </div>
      </motion.div>
      <motion.div initial="hidden" whileInView={"show"} variants={rightAnimate} className="h-[300px] sm:h-[350px] md:h-[400px] xl:h-[460px] w-full  lg:w-[60%] xl:pt-16">
        <div className="relative w-full h-full">
          <Image
            src={"/images/transactiondetail.jpeg"}
            fill
            alt="bank transaction"
            style={{ objectFit: "contain" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default TransactionSection;
