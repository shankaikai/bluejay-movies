import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../hooks/useMoviesContext";
import { Center, Flex, Loader, Text, Image, Group } from "@mantine/core";
import { processText } from "../helpers/processText";

export default function MoviePage(): JSX.Element {
  const { index } = useParams();

  const { indexedMovies, isLoading } = useContext(MoviesContext);

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  const movie = indexedMovies && index && indexedMovies[parseInt(index)];

  return (
    <>
      {movie ? (
        <Flex direction="column" rowGap="sm">
          <Group>
            <Image
              src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              width="15rem"
              radius="md"
              alt="Movie Image"
            />
          </Group>
          <Text size="2rem" fw="bolder">
            {movie.name}
          </Text>
          <Text size="1.4rem">
            {movie.productionYear} • {movie.genre}
          </Text>
          <Text fw="bold">Synopsis: </Text>
          {processText(movie.synopsis).map((paragraph, i) => (
            <Text key={i}>{paragraph}</Text>
          ))}
        </Flex>
      ) : (
        <Center>
          <Text>There was an error fetching the movie!</Text>
        </Center>
      )}
    </>
  );
}
