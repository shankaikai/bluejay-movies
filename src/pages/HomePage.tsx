import { useContext } from "react";
import { Center, Flex, Loader } from "@mantine/core";
import FilterInput from "../components/FilterInput/FilterInput";
import { MoviesContext } from "../hooks/useMoviesContext";
import MoviesGrid from "../components/MoviesGrid/MoviesGrid";
import MovieCard from "../components/MoviesGrid/MovieCard";
import filterMovies from "../helpers/filterMovies";

export default function HomePage(): JSX.Element {
  const { indexedMovies, isLoading, setFilters, filters } =
    useContext(MoviesContext);

  const filteredMovies = filterMovies(indexedMovies, filters);

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
