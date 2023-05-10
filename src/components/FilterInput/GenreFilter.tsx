import React from "react";
import { Button, MultiSelect, Popover } from "@mantine/core";

const genreData = ["Action", "Barnyard", "Comedy", "Adventure", "Fantasy"];

export default function GenreFilter(): JSX.Element {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button color="blue">Genre</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <MultiSelect placeholder="Pick your favourites" data={genreData} />
      </Popover.Dropdown>
    </Popover>
  );
}
