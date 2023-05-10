import { Dispatch, createContext, useEffect, useState } from "react";
import useMovieQuery, { Movie } from "./useMovieQuery";

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
  data?: Movie[];
  filteredMovies: IndexedMovie[];
  filters: FiltersInterface;
  setFilters?: Dispatch<FiltersInterface>;
  setFilteredMovies?: Dispatch<IndexedMovie[]>;
}

export const MoviesContext = createContext<MoviesContextInterface>({
  isLoading: false,
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
    let indexedMovies;
    if (data) {
      indexedMovies = data.map((movie, index) => {
        return {
          index,
          ...movie,
        };
      });
    }

    indexedMovies && setFilteredMovies(indexedMovies);
  }, [data]);

  return (
    <MoviesContext.Provider
      value={{
        isLoading,
        data,
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
