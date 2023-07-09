"use client";

import React from "react";
import Container from "./Container";
import { Auth } from "./Auth";
import SidePhoto from "./SidePhoto";
import { MediaQuery } from "@mantine/core";

type Props = {};

const AuthenticationPage = (props: Props) => {
  return (
    <section className="flex flex-row-reverse w-full  bg-inherit">
      <Auth />
      <SidePhoto />
    </section>
  );
};

export default AuthenticationPage;
