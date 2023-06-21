"use client";

import React from "react";
import { mobileNavLists, navLists } from "./NavbarData";
import Link from "next/link";
import { Burger, Drawer, MediaQuery, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {motion} from "framer-motion"

const navContainer = {
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      staggerChildren:0.4,
      ease:"easeInOut"
    }
  }
};

const navItem = {
  hidden:{opacity:0,y:40},
  show:{
    opacity:1,
    y:0,
    transition:{
      duration:2,
      type:"spring",
      ease:"easeInOut"
    }
  }
}


export const Navbar = () => {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  return (
    <>
      <nav className="flex items-center justify-between px-4 md:px-8 lg:px-8 xl:px-14 pt-6 w-full h-[70px]">
        <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0,transition:{duration:2,ease:"easeInOut",type:"spring"}}}>
          <Link href={"/"} className="text-[#2F3460] font-bold text-xl">
            Smart Save
          </Link>
        </motion.div>
        <motion.div className="hidden lg:block overflow-hidden" initial="hidden" animate="show" variants={navContainer} >
          {/* <ul className="flex gap-20 lg:gap-8 xl:gap-16 2xl:gap-24 items-center justify-items-center">
            {navLists.map((li, index) => (
              <Link href={li.link} key={index}>
                <li className="text-[#A6B1C4] active:text-blue-500 font-bold hover:text-blue-500">
                  {li.name}
                </li>
              </Link>
            ))}
          </ul> */}
           <motion.div className="flex gap-20 lg:gap-8 xl:gap-16 2xl:gap-24 items-center justify-items-center" variants={navItem}>
          {navLists.map((item,index)=>(
           
              <ScrollLink key={index}
              activeClass="active"
              to={item.link}
              spy={true}
              smooth={true}
              offset={-10}
              duration={800}
              className="hover:cursor-pointer font-bold hover:text-blue-500"
              activeStyle={{
                color:"#3b82f6",
                
              }}
            >{item.name}</ScrollLink>
            
          ))}
          </motion.div>
        </motion.div>
        <motion.div className=" items-center lg:gap-4  hidden lg:flex" initial="hidden" animate="show" variants={navContainer}>
          <motion.button
            variants={navItem}
            onClick={() => router.push("/auth")}
            className="w-[140px] bg-[#EBEDF9] py-[10px] rounded-full text-[#5063C9] hover:bg-[#5063C9] hover:text-white"
          >
            Sign In
          </motion.button>

          <motion.button
            variants={navItem}
            onClick={() => router.push("/auth")}
            className="w-[140px] bg-inherit border-[1px] border-[#5063C9] py-[10px] rounded-full text-[#5063C9] hover:bg-[#5063C9] hover:text-white"
          >
            Sign Out
          </motion.button>
        </motion.div>

        <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
          <Burger opened={opened} onClick={toggle} aria-label={label} />
        </MediaQuery>
      </nav>

      <Drawer
        opened={opened}
        onClose={toggle}
        title={<Text className="font-bold text-xl">Menu</Text>}
        size={"xs"}
        overlayProps={{ opacity: 0.5, blur: 4 }}
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        <ul className="p-0">
          {mobileNavLists.map((li, index) => (
            <li
              key={index}
              className="w-full py-4 pl-4  hover:bg-[#bbc3f3] hover:text-white font-medium"
            >
              <Link href={li.link}>{li.name}</Link>
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
};
