import { FilterType, IndexedMovie } from "../hooks/useMoviesContext";

export type Genre = "Action" | "Animation" | "Comedy" | "Adventure" | "Fantasy";

export default function filterMovies(
  indexedMovies: IndexedMovie[],
  filters: FilterType[]
) {
  let filteredMovies = indexedMovies;

  filters.map((filterValue) => {
    switch (filterValue.type) {
      case "Genre":
        if (filterValue.genres.length > 0) {
          filteredMovies = filteredMovies.filter((movie) =>
            filterValue.genres.includes(movie.genre)
          );
        }
        break;

      case "Year":
        filteredMovies = filteredMovies.filter(
          (movie) =>
            movie.productionYear >= filterValue.startYear &&
            movie.productionYear <= filterValue.endYear
        );
        break;

      default:
        break;
    }
  });

  return filteredMovies;
}
