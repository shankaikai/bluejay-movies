import { Dispatch, createContext, useEffect, useState } from "react";
import useMovieQuery, { Movie } from "./useMovieQuery";

export interface FiltersInterface {
  genres: string[];
  startYear: number;
  endYear: number;
}

interface MoviesContextInterface {
  isLoading: boolean;
  filteredMovies: Movie[];
  filters: FiltersInterface;
  setFilters?: Dispatch<FiltersInterface>;
  setFilteredMovies?: Dispatch<Movie[]>;
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
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
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
    data && setFilteredMovies(data);
  }, [data]);

  return (
    <MoviesContext.Provider
      value={{
        isLoading,
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
