import React from "react";
import MainHeader from "./MainHeader";
import { Container, Divider, Flex } from "@mantine/core";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex direction={"column"}>
      <MainHeader />
      <Divider />
      <Container fluid p={"xl"} sx={{ width: "100%", maxWidth: "1280px" }}>
        {children}
      </Container>
    </Flex>
  );
}
