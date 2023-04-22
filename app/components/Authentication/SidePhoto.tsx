import { Box,Image} from "@mantine/core";
export default function SidePhoto() {
  return (
    <Box className="w-1/2 bg-black h-screen hidden sm:block  xl:w-[70%]" component="div">
      <Image
        src={
          "https://usdc.vn/wp-content/uploads/2020/05/illustration-16.png"
        }
        alt="adverise photo"
        width={'100%'}
        height={"100vh"}
        fit="contain"
      />
    </Box>
  );
}
