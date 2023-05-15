import { Dispatch, createContext, useEffect, useState } from "react";
import useMovieQuery, { Movie } from "./useMovieQuery";
import { Genre } from "../helpers/filterMovies";

export interface IndexedMovie extends Movie {
  index: number;
}

export type GenreFilter = {
  type: "Genre";
  genres: Genre[];
};

export type YearFilter = {
  type: "Year";
  startYear: number;
  endYear: number;
};

export type FilterType = GenreFilter | YearFilter;

interface MoviesContextInterface {
  isLoading: boolean;
  indexedMovies: IndexedMovie[];
  filters: FilterType[];
  setFilters?: Dispatch<FilterType[]>;
}

export const MoviesContext = createContext<MoviesContextInterface>({
  isLoading: false,
  indexedMovies: [],
  filters: [],
});

interface MoviesProviderProps {
  children: JSX.Element | JSX.Element[];
}

export function MoviesProvider({ children }: MoviesProviderProps) {
  const { isLoading, data, error } = useMovieQuery();
  const [indexedMovies, setIndexedMovies] = useState<IndexedMovie[]>([]);
  const [filters, setFilters] = useState<FilterType[]>([
    {
      type: "Genre",
      genres: [],
    },
    {
      type: "Year",
      startYear: 1900,
      endYear: new Date().getFullYear()
    }
  ]);

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
