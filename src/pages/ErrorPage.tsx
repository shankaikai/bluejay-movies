import { Flex, Text } from "@mantine/core";
import { Error404 } from "tabler-icons-react";

export default function ErrorPage(): JSX.Element {
  return (
    <Flex
      sx={{
        height: "100vh",
      }}
      direction="column"
      justify="center"
      align="center"
    >
      <Error404 size="5rem" />
      <Text>There was an unexpected error.</Text>
    </Flex>
  );
}
