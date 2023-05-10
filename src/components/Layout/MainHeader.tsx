import { Flex, Text, useMantineTheme } from "@mantine/core";
import { Movie } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";

export default function MainHeader() {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  return (
    <Flex
      direction="row"
      columnGap="sm"
      align="center"
      sx={{ height: "4rem", cursor: "pointer" }}
      mx="xl"
      onClick={() => navigate("/")}
    >
      <Movie size="1.6rem" color={theme.colors.red[3]} />
      <Text fw="700">Movies</Text>
    </Flex>
  );
}
