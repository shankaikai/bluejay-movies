import React, { useContext } from "react";
import { Flex } from "@mantine/core";
import FilterInput from "../components/FilterInput/FilterInput";
import { MoviesContext } from "../hooks/useMoviesContext";
import MoviesGrid from "../components/MoviesGrid/MoviesGrid";
import Movie from "../components/MoviesGrid/Movie";

export default function HomePage(): JSX.Element {
  const { filteredMovies } = useContext(MoviesContext);
  console.log(filteredMovies);

  return (
    <Flex direction="column" rowGap="xl">
      <FilterInput />
      <MoviesGrid>
        {filteredMovies.map((movie, index) => (
          <Movie key={index} />
        ))}
      </MoviesGrid>
    </Flex>
  );
}
