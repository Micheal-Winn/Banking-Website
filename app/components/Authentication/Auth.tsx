"use client";
import { Tabs } from "@mantine/core";

export const Auth = () => {
  return (
    <div className=" flex flex-col justify-center gap-28">
      <div className="mt-8">
        <h4 className="text-center text-xl">SmartSave</h4>
      </div>
      <div className="flex flex-col">
        <div>
          <h4 className="text-2xl font-medium text-center">Welcome back</h4>
          <p className="text-center text-[10px] text-gray-400">
            Welcome back. Please enter Your details
          </p>
        </div>

        {/** Login and sign In Tab */}


        <Tabs variant="pills" sx={{color:"white"}} radius="md" defaultValue="gallery" className="w-[70%] mx-auto flex bg-gray-300">
          <Tabs.List className="flex gap-0 justify-between w-full box-border">
            <Tabs.Tab value="gallery" className="bg-white w-1/2">Gallery</Tabs.Tab>
            <Tabs.Tab value="messages" className=" w-1/2">Messages</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
    </div>
  );
};
