import React from "react";
import { Button, MultiSelect, Popover } from "@mantine/core";
import { FilterInputProps } from "./FilterInput";

const genreData = ["Action", "Animation", "Comedy", "Adventure", "Fantasy"];

export default function GenreFilter({
  setFilters,
  filters,
}: FilterInputProps): JSX.Element {
  function handleChange(values: string[]) {
    setFilters &&
      setFilters({
        ...filters,
        genres: values,
      });
  }

  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button color={filters.genres.length > 0 ? "blue" : "gray"}>
          Genre
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <MultiSelect
          placeholder="Pick your favourites"
          data={genreData}
          value={filters.genres}
          onChange={(values) => handleChange(values)}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
