import axios from "axios";
import { useQuery } from "react-query";
import { Genre } from "../helpers/filterMovies";

export const MOVIE_QUERY_KEY = "movies";

export interface Movie {
  genre: Genre;
  image: string;
  name: string;
  productionYear: number;
  synopsis: string;
  synopsisShort: string;
}

async function fetchMovies(): Promise<Movie[]> {
  return await axios
    .get(
      "https://remarkable-bombolone-51a3d9.netlify.app/.netlify/functions/movies"
    )
    .then((response) => response.data)
    .catch((err) => {
      throw Error(err);
    });
}

export default function useMovieQuery() {
  return useQuery<Movie[], Error>(MOVIE_QUERY_KEY, fetchMovies, { retry: 2 });
}
