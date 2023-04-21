import {
  TextInput,
  Box,
  Button,
  Group,
  Checkbox,
  Anchor,
  Text,
  MediaQuery,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { useForm, isEmail, hasLength } from "@mantine/form";

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

  const matches = useMediaQuery("max-width:760px");

  const handleSubmit = (values: any) => console.log(values);

  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        {props.login && (
          <TextInput
            size="md"
            label={<Text className="sm:text-[15px]">Username</Text>}
            placeholder="Enter your name"
            className="mt-4"
            {...form.getInputProps("username")}
          />
        )}
        <TextInput
        size="md"
          label={<Text className="sm:text-[15px]">Email</Text>}
          placeholder="Enter your email"
          className="mt-4"
          {...form.getInputProps("email")}
        />
        <TextInput
            size="md"
          label={<Text className="sm:text-[15px]">Password</Text>}
          type="password"
          placeholder="Enter your password"
          className="mt-4"
          {...form.getInputProps("password")}
        />

        <Box className="mt-4">
          <Checkbox
            color="dark"
            size={"xs"}
            label={
              <>
                I accept <Anchor href="">terms and conditions</Anchor>
              </>
            }
          />
        </Box>

        {/* <button
          type="submit"
          className="bg-black w-full text-sm text-white mt-4 py-[10px] rounded-[3px] font-bold sm:py-3"
        >
          {props.login ? "Sign Up" : "Sign In"}
        </button> */}
          <Button type="submit" size="md" mt="lg" color="dark" className="bg-black w-full text-sm sm:text-sm">
           {props.login ? "Sign Up" : "Sign In"}
        </Button>
      </form>
    </>
  );
}
