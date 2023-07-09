"use client";
import { Tabs, Box, Text } from "@mantine/core";
import Input from "./Input";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export const Auth = () => {
  const router = useRouter();
  return (
    <section className=" flex flex-col justify-center gap-12 w-full md:w-1/2 xl:gap-10 2xl:gap-16 xl:w-[30%]">
      <button
        onClick={()=>router.push('/')}
      className="mt-6 md:mt-0 ml-3 md:ml-0 bg-[#373396] hover:bg-blue-900 w-[140px] py-2 px-2 rounded-md flex items-center justify-center text-white gap-1">
        <IconArrowLeft size={"1rem"} />
        <span className="text-xs md:text-sm">Back to Main</span>
      </button>
      <div className="mt-8 lg:mt-0">
        <h4 className="text-center text-xl xl:text-2xl">SmartSave</h4>
      </div>
      <div className="flex flex-col">
        <div>
          <h4 className="text-2xl font-medium text-center xl:text-3xl xl:mb-1">
            Welcome back
          </h4>
          <p className="text-center text-[10px] text-gray-400 xl:text-xs xl:mb-3">
            Welcome back. Please enter Your details
          </p>
        </div>

        {/** Login and sign In Tab */}

        <Tabs
          variant="pills"
          color="violet.9"
          radius="sm"
          defaultValue="signin"
          className="w-[70%] mx-auto flex mt-4 flex-col sm:w-[55%] md:w-4/5 lg:w-[75%]"
        >
          <Box className=" bg-gray-300 rounded-md">
            <Tabs.List className="flex gap-0 justify-between w-full box-border p-[3px]">
              <Tabs.Tab
                value="signin"
                className=" w-1/2 py-[10px] text-xs font-semibold sm:py-3 md:py-[10px] sm:text-sm lg:text-base  xl:text-lg"
              >
                Sign In
              </Tabs.Tab>
              <Tabs.Tab
                value="signup"
                className=" w-1/2 py-[10px] text-xs font-semibold sm:py-3 md:py-[10px] sm:text-sm lg:text-base  xl:text-lg"
              >
                Signup
              </Tabs.Tab>
            </Tabs.List>
          </Box>
          <Tabs.Panel value="signin" pt={8}>
            <Input login={false} />
          </Tabs.Panel>

          <Tabs.Panel value="signup" pt={8}>
            <Input login={true} />
          </Tabs.Panel>
        </Tabs>
      </div>
      <p className="text-gray-400 text-xs w-[90%] mx-auto text-left sm:w-[55%] md:w-4/5 lg:w-[75%]">
        Join the millions of smart investions who trust us to manage their
        finances.Log in to access your personalized dashboard, track your
        portfolio performance, and make informed investment decisions.
      </p>
    </section>
  );
};
