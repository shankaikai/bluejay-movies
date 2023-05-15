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
  indexedMovies: IndexedMovie[];
  filters: FiltersInterface;
  setFilters?: Dispatch<FiltersInterface>;
}

export const MoviesContext = createContext<MoviesContextInterface>({
  isLoading: false,
  indexedMovies: [],
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

    indexedMoviesList && setIndexedMovies(indexedMoviesList);
  }, [data]);

  return (
    <MoviesContext.Provider
      value={{
        isLoading,
        indexedMovies,
        filters,
        setFilters,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
