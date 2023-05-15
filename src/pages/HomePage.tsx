import { useContext } from "react";
import { Center, Flex, Loader } from "@mantine/core";
import FilterInput from "../components/FilterInput/FilterInput";
import { MoviesContext } from "../hooks/useMoviesContext";
import MoviesGrid from "../components/MoviesGrid/MoviesGrid";
import MovieCard from "../components/MoviesGrid/MovieCard";

export default function HomePage(): JSX.Element {
  const { filteredMovies, isLoading, setFilters, filters } =
    useContext(MoviesContext);

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <Flex direction="column" rowGap="xl">
      <FilterInput filters={filters} setFilters={setFilters} />
      <MoviesGrid>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.index} movie={movie} />
        ))}
      </MoviesGrid>
    </Flex>
  );
}
