import Image from "next/image";
import Button from "../../Button";
import {motion} from "framer-motion"

const container = {
  hidden:{
    opacity:0
  },
  show:{
    opacity:1,
    transition:{
      staggerChildren:0.4,
      ease:"easeInOut"
    }
  }}

  const text = {
    hidden:{
      opacity:0,
      x:-110
    },
    show:{
      opacity:1,
      x:0,
      transition:{
        type:"spring",
        ease:"easeInOut",
        duration:2
      }
    }
  }

  const image = {
    hidden:{
      opacity:0,
      x:110,
    },
    show:{
      opacity:1,
      x:0,
      transition:{
        duration:2,
        ease:"easeInOut",
        type:"spring"
      }
    }
  }

const BankSection = () => {
  return (
    <motion.section initial="hidden" whileInView={"show"} variants={container} className="flex container  lg:gap-20 sm:gap-10 md:gap-4 gap-6 px-3 sm:pl-10 flex-col lg:flex-row">
      <motion.div variants={text} className="flex flex-col  w-[100%] lg:w-[40%] pt-16 md:pt-12 lg:pt-16 gap-6 lg:gap-8 xl:gap-6">
        <h2 className="font-extrabold text-[#5265CA] tracking-widest text-2xl uppercase text-center lg:text-left ">Bank</h2>
        <h3 className="text-5xl sm:text-6xl md:text-5xl text-center lg:text-left lg:text-6xl xl:text-7xl font-bold">All bank cards in one place.</h3>
        <p className="text-[#B2BCCD] text-sm  text-center lg:text-left w-[90%] sm:w-[90%] md:w-[80%] mx-auto lg:w-full lg:mx-0 lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          temporibus impedit provident quidem natus praesentium deserunt
          dignissimos molestias iusto, enim, optio atque? Impedit vitae iusto
          maxime consectetur aliquam, nobis minus.
        </p>
        <div className="w-[140px] sm:w-[160px] md:w-[140px] lg:w-[170px] mx-auto lg:mx-0 md:mb-3 lg:mb-0"><Button/></div>
      </motion.div>
      <motion.div variants={image} className=" h-[300px] sm:h-[400px] md:h-[450px] xl:h-[450px] w-full  lg:w-[60%] xl:pt-16">
       <div className="relative w-full h-full">
        <Image src={'/images/allbankcard.gif'} alt="bank statisc" fill style={{objectFit:"contain"}}/>
       </div>
      </motion.div>
    </motion.section>
  );
};

export default BankSection;
