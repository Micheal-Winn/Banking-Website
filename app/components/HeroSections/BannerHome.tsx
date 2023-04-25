"use client";

import { Text, TypographyStylesProvider, Image } from "@mantine/core";
import Button from "../Button";

const BannerHome = () => {
  return (
    <section className=" flex xl:container sm:pt-6 md:pt-8 lg:pt-8 xl:pt-24 2xl:pt-36 flex-col-reverse md:flex-row gap-4 md:gap-0 min-h-[100vh - 70px]">
      <div className=" sm:w-full md:w-[45%] flex  flex-col gap-9 xl:pt-16 lg:pt-10 lg:pl-14 md:pt-8 md:pl-6 sm:pt-6 sm:pl-4 pl-3 pr-4">
        <h2 className="text-[#0E1446] text-center md:text-left 2xl:text-[5rem] xl:text-7xl lg:text-[3.2rem] md:text-[2.6rem] sm:text-7xl text-[2.4rem] md:leading-tight  md:tracking-wider xl:tracking-wider lg:tracking-wider  leading-tight font-bold tracking-wide">The Best bank to manage your finances.</h2>
        <p className="text-[#C9D0DD] text-center md:text-left 2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-[1rem] text-sm w-[96%] sm:w-[80%] mx-auto md:mx-0 md:w-full lg:w-[85%] sm:leading-6">
          It is time to make the world of finance simpler, smarter and fit for
          modern life.You can get started modern banking instantly with our
          banking application !
        </p>

        <Button/>
      </div>
      <div className=" sm:w-full md:w-[55%] h-full">
        <div className="relative w-full h-full">
          <Image
            src="/images/transfer.jpeg"
            alt="bank logo"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
