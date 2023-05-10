import React from "react";
import { Movie } from "../../hooks/useMovieQuery";
import {
  Card,
  Group,
  Image,
  Text,
  Badge,
  useMantineTheme,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  index: number;
  movie: Movie;
}

// MovieCard uses an image placeholder since image links were not provided
export default function MovieCard({
  index,
  movie,
}: MovieCardProps): JSX.Element {
  const { genre, name, productionYear, synopsisShort } = movie;
  const theme = useMantineTheme();
  const navigate = useNavigate();

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      sx={{
        ":hover": {
          borderColor: theme.colors.blue[3],
          cursor: "pointer",
        },
      }}
      onClick={() => navigate(`/movie/${index}`)}
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          height="15rem"
          alt="Movie Image"
        />
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
        <Text weight={400}>{productionYear}</Text>
      </Group>
      <Badge variant="light" mb="xs">
        {genre}
      </Badge>
      <Text size="sm" color="dimmed">
        {synopsisShort}
      </Text>
    </Card>
  );
}
