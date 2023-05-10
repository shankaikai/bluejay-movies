import React from "react";
import { Flex, Image, Text, Divider } from "@mantine/core";

export default function MainHeader() {
  return (
    <>
      <Flex
        direction="row"
        columnGap="sm"
        align="center"
        sx={{ height: "5rem" }}
        mx="xl"
      >
        <Image src="./clapperboard.png" alt="Movie Logo" width="3rem" />
        <Text fw="700">Movies</Text>
      </Flex>
    </>
  );
}
