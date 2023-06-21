"use client";

import { Box, Checkbox, Anchor } from "@mantine/core";

import { useForm, isEmail, hasLength } from "@mantine/form";
import { CustomInput } from "./CustomInput";

interface AuthProps {
  login: boolean;
}
export default function Input(props: AuthProps) {
  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: {
      email: isEmail("Please enter valid email address"),
      password: hasLength({ min: 8 }, "Password must be 8 letters"),
    },
  });

  const handleSubmit = (values: any) => console.log(values);

  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        {props.login && (
          <CustomInput
            placeholder="Enter your name"
            text="Username"
            props={form.getInputProps("username")}
          />
        )}

        <CustomInput
          placeholder="Enter your email"
          text="Email"
          props={form.getInputProps("email")}
        />

        <CustomInput
          placeholder="Enter your password"
          text="Password"
          props={form.getInputProps("password")}
        />

        <Box className="mt-4 flex align-middle">
        <Checkbox
          color="violet"
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank">
            terms and conditions
          </Anchor>
        </>
      }
    />
        </Box>

        <button
          type="submit"
          className="bg-[#5F3DC4] w-full text-sm text-white mt-4 py-[10px] rounded-[10px] font-bold sm:py-3 lg:text-lg lg:py-4 lg:mt-6"
        >
          {props.login ? "Sign Up" : "Sign In"}
        </button>
        {/* <Button type="submit" size="md" mt="lg" color="dark" className="bg-black w-full text-sm sm:text-sm">
           {props.login ? "Sign Up" : "Sign In"}
        </Button> */}
      </form>
    </>
  );
}
