"use client";
import { Tabs, Box, Text } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import Input from "./Input";

export const Auth = () => {
  const theme = useMantineTheme();
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

        <Tabs
          variant="pills"
          color="dark"
          radius="sm"
          defaultValue="gallery"
          className="w-[70%] mx-auto flex mt-4 flex-col"
        >
          <Box className=" bg-gray-300 rounded-md">
            <Tabs.List className="flex gap-0 justify-between w-full box-border p-[3px]">
              <Tabs.Tab value="gallery" className=" w-1/2 py-2 text-xs font-semibold">
                Sign In
              </Tabs.Tab>
              <Tabs.Tab value="messages" className=" w-1/2 py-2 text-xs font-semibold">
                Signup
              </Tabs.Tab>
            </Tabs.List>
          </Box>
          <Tabs.Panel value="gallery" pt={8}>
            <Input login={false} />
          </Tabs.Panel>

          <Tabs.Panel value="messages" pt={8}>
            <Input login={true} />
          </Tabs.Panel>
        </Tabs>
      </div>
      <p className="text-gray-400 text-xs w-[90%] mx-auto text-left">
      Join the millions of smart investions who trust us to manage their
        finances.Log in to access your personalized dashboard, track your
        portfolio performance, and make informed investment decisions.
      </p>
    </div>
  );
};
