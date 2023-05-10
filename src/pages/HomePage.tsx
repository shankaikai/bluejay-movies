import React from "react";
import useMovieQuery from "../hooks/useMovieQuery";
import { Flex } from "@mantine/core";
import FilterInput from "../components/FilterInput/FilterInput";

export default function HomePage(): JSX.Element {
  const { isLoading, data, error } = useMovieQuery();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Flex direction="column" rowGap="md">
      <FilterInput />
    </Flex>
  );
}
