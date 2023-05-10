import { Dispatch } from "react";
import { Flex, Text } from "@mantine/core";
import { Filter } from "tabler-icons-react";
import GenreFilter from "./GenreFilter";
import YearFilter from "./YearFilter";
import { FiltersInterface } from "../../hooks/useMoviesContext";

export interface FilterInputProps {
  setFilters?: Dispatch<FiltersInterface>;
  filters: FiltersInterface;
}

export default function FilterInput({
  setFilters,
  filters,
}: FilterInputProps): JSX.Element {
  return (
    <Flex direction="row" columnGap="sm" justify="center" align="center">
      <Filter size="2rem" />
      <Text>Filters: </Text>
      <GenreFilter setFilters={setFilters} filters={filters} />
      <YearFilter setFilters={setFilters} filters={filters} />
    </Flex>
  );
}
