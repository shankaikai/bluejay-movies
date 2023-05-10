import React from "react";
import { Flex, Text } from "@mantine/core";
import { Filter } from "tabler-icons-react";
import GenreFilter from "./GenreFilter";
import YearFilter from "./YearFilter";

export default function FilterInput(): JSX.Element {
  return (
    <Flex direction="row" columnGap="sm" justify="center" align="center">
      <Filter size="2rem" />
      <Text>Filters: </Text>
      <GenreFilter />
      <YearFilter />
    </Flex>
  );
}
