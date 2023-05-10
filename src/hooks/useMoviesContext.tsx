import { Dispatch, createContext, useEffect, useState } from "react";
import useMovieQuery, { Movie } from "./useMovieQuery";
import filterMovies from "../helpers/filterMovies";

export interface IndexedMovie extends Movie {
  index: number;
}

export interface FiltersInterface {
  genres: string[];
  startYear: number;
  endYear: number;
}

interface MoviesContextInterface {
  isLoading: boolean;
  indexedMovies: IndexedMovie[];
  filteredMovies: IndexedMovie[];
  filters: FiltersInterface;
  setFilters?: Dispatch<FiltersInterface>;
  setFilteredMovies?: Dispatch<IndexedMovie[]>;
}

export const MoviesContext = createContext<MoviesContextInterface>({
  isLoading: false,
  indexedMovies: [],
  filteredMovies: [],
  filters: {
    genres: [],
    startYear: 1900,
    endYear: new Date().getFullYear(),
  },
});

interface MoviesProviderProps {
  children: JSX.Element | JSX.Element[];
}

export function MoviesProvider({ children }: MoviesProviderProps) {
  const { isLoading, data, error } = useMovieQuery();
  const [indexedMovies, setIndexedMovies] = useState<IndexedMovie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<IndexedMovie[]>([]);
  const [filters, setFilters] = useState<FiltersInterface>({
    genres: [],
    startYear: 1900,
    endYear: new Date().getFullYear(),
  });

  // Go to fallback error page
  if (error) {
    throw error;
  }

  useEffect(() => {
    let indexedMoviesList;
    if (data) {
      indexedMoviesList = data.map((movie, index) => {
        return {
          index,
          ...movie,
        };
      });
    }

    indexedMoviesList && setFilteredMovies(indexedMoviesList);
    indexedMoviesList && setIndexedMovies(indexedMoviesList);
  }, [data]);

  useEffect(() => {
    indexedMovies &&
      setFilteredMovies &&
      filterMovies(indexedMovies, setFilteredMovies, filters);
  }, [filters]);

  return (
    <MoviesContext.Provider
      value={{
        isLoading,
        indexedMovies,
        filteredMovies,
        filters,
        setFilters,
        setFilteredMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
