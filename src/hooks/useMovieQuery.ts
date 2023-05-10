import axios from "axios";
import { useQuery } from "react-query";

export const MOVIE_QUERY_KEY = "movies";

export interface Movie {
  genre: string;
  image: string;
  name: string;
  productionYear: number;
  synopsis: string;
  synopsisShort: string;
}

async function fetchMovies(): Promise<Array<Movie>> {
  const { data } = await axios.get(
    "https://remarkable-bombolone-51a3d9.netlify.app/.netlify/functions/movies"
  );
  return data;
}

export default function useMovieQuery(): ReturnType<typeof useQuery> {
  return useQuery(MOVIE_QUERY_KEY, fetchMovies, { retry: 2 });
}
