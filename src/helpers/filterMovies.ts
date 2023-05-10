import { Dispatch } from "react";
import { FiltersInterface } from "../hooks/useMoviesContext";
import { Movie } from "../hooks/useMovieQuery";

export default function filterMovies(
  data: Movie[],
  setFilteredMovies: Dispatch<Movie[]>,
  filters: FiltersInterface
) {
  let filteredMovies = data;

  if (filters.genres) {
    filteredMovies = filteredMovies.filter((movie) =>
      filters.genres.includes(movie.genre)
    );
  }

  if (filters.startYear) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.productionYear >= filters.startYear
    );
  }

  if (filters.endYear) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.productionYear <= filters.endYear
    );
  }

  setFilteredMovies(filteredMovies);
}
