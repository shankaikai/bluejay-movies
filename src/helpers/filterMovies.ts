import { Dispatch } from "react";
import { FiltersInterface, IndexedMovie } from "../hooks/useMoviesContext";

export default function filterMovies(
  indexedMovies: IndexedMovie[],
  setFilteredMovies: Dispatch<IndexedMovie[]>,
  filters: FiltersInterface
) {
  let filteredMovies = indexedMovies;

  if (filters.genres.length > 0) {
    filteredMovies = filteredMovies.filter((movie) =>
      filters.genres.includes(movie.genre)
    );
  }

  filteredMovies = filteredMovies.filter(
    (movie) => movie.productionYear >= filters.startYear
  );

  filteredMovies = filteredMovies.filter(
    (movie) => movie.productionYear <= filters.endYear
  );

  setFilteredMovies(filteredMovies);
}
